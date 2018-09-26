//var texto="At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.\nTeste de expressão 123 123 123 456";

//http://jsfiddle.net/M6nuZ/

var id_questao_atual = -1;
var questao_atual = {};
var respondido = false;
var peso = 0;

var sala = '15ub9g';
var sala_jogadores = {};
var status_jogadores = {};

var d = 0;
var nome = "";
var json_uri = "";
var historicos = {};
var jogadores = {};
var pontos = null;
var tempo_restante = 300;
var erros = 0;
var em_jogo = false;
var timer = null;
var time_warning = false;
var time_started = false;

// Thanks NoiseForFun.com
var audio_start = new Audio('sounds/start.mp3');
var audio_wrong = new Audio('sounds/wrong.mp3');
var audio_correct = new Audio('sounds/correct.mp3');
var audio_clock = new Audio('sounds/clock.mp3');
var audio_timeup = new Audio('sounds/timeup.mp3');

var req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    resp = JSON.parse(req.responseText);
    console.log(req.responseText);
    if ("uri" in resp) {
      json_uri = resp["uri"];
      check_sala();
    }
  }
};




function processar_expressao(expressao, texto) {
	if (expressao == "") {
		return null;
	}
	try {
		var re = new RegExp(expressao, 'gmu');
		var pos = new Array();
		while (match = re.exec(texto)) {
			if (match.index === re.lastIndex) {
				re.lastIndex++;
				continue;
			}
			//console.log("Teste:", match);
			i0 = match.index;
			i1 = match.index + match[0].length;
			pos.push([i0, i1]);
			if (pos.length>1000) break;
		}
		document.getElementById('regex').style.color = "#404040"; 
	} catch(error) {
		document.getElementById('regex').style.color = "red"; 
		console.error(error);
		return null;
	}
    	return pos;
}

function calcular_pontos_acumulados(h) {
	pontos_acumulados = 0;
	for (var key in h) {
		pontos_acumulados += h[key]['pontos']*questoes[key]['peso'];
	}
	return Math.round(pontos_acumulados);
}


function atualizar_pontos_acumulados() {
	pontos_acumulados = calcular_pontos_acumulados(historicos);
	document.getElementById('pt_total').textContent = pontos_acumulados;
}


function atualizar_resultado(id, r, resultado_ok) {
	r = r.replace(/\n/g, "<br>");
	r = r.replace(/\t/g, "<span style='color:gray'>&#x21E5;</span>");
	div = document.getElementById('resultado' + id);
	div.innerHTML = r;
	if (resultado_ok == null) {
		div.className = "resultado";
	} else if (resultado_ok == true) {
		div.className = "resultado correto";
	} else if (resultado_ok == false) {
		div.className = "resultado incorreto";
	}
}


function corrigir_linhas(id, pattern, texto, resposta) {
	if (pattern == "" || pattern == null) {
		atualizar_resultado(id, texto, null);
		return {
			'selecoes': [],
			'correto': false,
		};
	}
	pos = processar_expressao(pattern, linhas[id])
	if (pos == null) {
		return {
			'selecoes': [],
			'correto': false,
		};
	}

	states = new Array()
        var s = JSON.stringify(pos);
	for (i=0; i<pos.length; i++) {
		p = pos[i];
		states.push([p[0], 2])
		states.push([p[1], 0])
	}
	for (i=0; i<resposta.length; i++) {
		p = resposta[i]
		states.push([p[0], 3])
		states.push([p[1], 1])
	}
	var r = "";
	var prev_i = 0;
	states.sort(function(a,b) {return a[0]==b[0]?a[1]-b[1]:a[0]-b[0];});
	h_on = [0,0];
	span_on = 0;
	mark_count = 0;
	resultado_ok = (pos.length == resposta.length);
	for (i=0; i<states.length; i++) {
		p = states[i];
		h_on[p[1]%2] = Math.floor(p[1]/2);
		if ((i<states.length-1) && (states[i+1][0] == p[0])) {
			continue
		}
		r += texto.substring(prev_i, p[0]);
		if (span_on) {
			r += '</span>'
			span_on = 0;
		}
		if (h_on[0] && h_on[1]) {
			if ((states[i-1][0] == states[i][0] && states[i-1][1]==2 && states[i][1]==3) 
				&& (states[i+1][0] == states[i+2][0] && states[i+1][1]==0 && states[i+2][1]==1)) {
				classe = "mark11";
			} else {
				classe = "mark11b";
			}
			//console.log(states[i-1], states[i], states[i+1], states[i+2], classe)
		} else {
			classe = "mark" + h_on[0].toString() + h_on[1].toString();
		}
		if (classe != "mark00") {
			//r += "<span class='" + classe + "' title='x'>"; 
			r += "<span class='" + classe + "'>"; 
			span_on = 1;
			if (classe != "mark11") {
				resultado_ok = false;
			}
		}
		prev_i = p[0];
		//console.log(classe) 
	}
	r += texto.substring(prev_i);
	atualizar_resultado(id, r, resultado_ok);
	return {
		'selecoes': pos,
		'correto': resultado_ok,
	};

}

function corrigir(pattern) {
	//putjson(pos);
	linhas = questao_atual['linhas'];
	respostas = questao_atual['respostas'];
	//console.log(questao_atual);
	selecoes_atuais = [];
	tudo_correto = true;
	for (id=0; id<linhas.length; id++) {
		correcao = corrigir_linhas(id, pattern, linhas[id], respostas[id])
		tudo_correto &= correcao['correto'];
		selecoes_atuais.push(correcao['selecoes']);
	}
        var s = JSON.stringify(selecoes_atuais);
	console.log(s);
	if (pattern != null && pattern != "" && !respondido && em_jogo) {
		if (!tudo_correto) {
			erros += 1;
			//erros = Math.min(erros, 12);
			atualizar_status();
			audio_wrong.play();
		} else {
			pontos = 10 + Math.floor(Math.max(0, Math.floor(tempo_restante/15) - erros));
			salvar_historico(pattern)
			respondido = true;
			em_jogo = false;
			audio_correct.play();
			stopTimer();
			//document.getElementById("select_questoes").disabled = false;
		}
	}
	console.log(tudo_correto);
}


function carregar_questao(id_questao) {
	if (id_questao < 0) {
		document.getElementById('center').style.visibility = "hidden";
		tempo_restante = 60*5;
		atualizar_status();
		return true;
	}
	if (id_questao in historicos) {
		//window.alert("Essa questão já foi respondida!");
		pattern = historicos[id_questao]['pattern'];
		pontos = historicos[id_questao]['pontos'];
		erros = historicos[id_questao]['erros'];
		tempo_restante = historicos[id_questao]['tempo'];
		respondido = true;
	} else {
		pattern = "";
		respondido = false;
		pontos = 0;
		erros = 0;
	}
	if (pattern == "" && questoes[id_questao].senha && senhas.length > id_questao) {
		n_questao = parseInt(id_questao)+1;
		var senha = window.prompt("Para desbloquear a questão nº" + n_questao + ", informe a senha informada na oficina.","");
		if (senha != senhas[id_questao]) {
			window.alert("Senha inválida");
			document.getElementById('select_questoes').selectedIndex = id_questao_atual+1;
			return false;
		}
	}
	id_questao_atual = id_questao;
	questao_atual = questoes[id_questao];
	peso = questao_atual['peso'];

	if ('resposta' in questao_atual) {
		questao_atual['respostas'] = [];
		for (i=0; i<questao_atual['linhas'].length; i++) {
			questao_atual['respostas'].push(processar_expressao(questao_atual['resposta'],questao_atual['linhas'][i]))  
		}
	} else {
		for (i=questao_atual['respostas'].length; i<questao_atual['linhas'].length; i++) {
			questao_atual['respostas'].push([]);
		}
	}
	num_matches = []
	for (i=0; i<questao_atual['respostas'].length; i++) {
		n = questao_atual['respostas'][i].length;
		num_matches.push([i, n==0 ? 9999:n]);
	}
	var sorted = num_matches.slice().sort(function(a,b){return a[1]-b[1]});
	var ranks = sorted.slice().map(function(v){ return v[0] });
	console.log(num_matches, sorted, ranks);
	
	document.getElementById('center').style.visibility = "visible";
	document.getElementById('enunciado').innerHTML = questao_atual['enunciado'];
	divs = ""
	linhas = questao_atual['linhas'];
	for (i=0; i<linhas.length; i++) {
		par = (i%2==0)?"even":"odd";
		divs += '<div class="'+ par +'"><div id="resultado' + ranks[i] + '" class="resultado"></div></div>';
	}
	document.getElementById('resultado').innerHTML = divs;

	document.getElementById('regex').value = pattern;
	corrigir(pattern);

	atualizar_pontos_acumulados();

	if (!respondido) {
		if ('tempo' in questao_atual) {
			tempo_restante = questao_atual['tempo'];
		} else {
			tempo_restante = 60 * 5; // 5 minutos
		}
		time_warning = false;
		em_jogo = true;
		startTimer();
	}
	atualizar_status();
	return true;
}

function deletar_jogo() {
	var r = confirm("Clique em OK se desejar excluir esse jogador.\n Atenção: todo o histórico do jogador anterior será perdido.");
	if (r == false) {
		return;
	}

	localStorage.removeItem("oficina.regex.nome");
	localStorage.removeItem("oficina.regex.json_id");
	localStorage.removeItem("oficina.regex.historicos");
	inicializar();
}

function desistir_questao() {
	var r = confirm("Clique em OK se desejar desistir desta questão.");
	if (r == false) {
		return;
	}
	tempo_restante = 0;
}

function proxima_questao() {
	if (!em_jogo && document.getElementById('select_questoes').selectedIndex < document.getElementById('select_questoes').options.length-1) {
		document.getElementById('select_questoes').selectedIndex++;
		carregar_questao(document.getElementById('select_questoes').value);
	}
}
function questao_anterior() {
	if (!em_jogo && document.getElementById('select_questoes').selectedIndex > 0) {
		document.getElementById('select_questoes').selectedIndex--;
		carregar_questao(document.getElementById('select_questoes').value);
	}
}


function inicializar() {
	//questoes = JSON.parse(questoes_json);
	
	nome = localStorage.getItem("oficina.regex.nome");
	//json_uri = localStorage.getItem("oficina.regex.json_uri");
	console.log(json_uri);
	historicos_json = localStorage.getItem("oficina.regex.historicos");
	historicos = JSON.parse(historicos_json);	

	/*if (nome != null) {
		var r = confirm("Existe um jogo criado em nome de " + nome + ". Clique em OK se desejar continuar esse jogo.\n\nAtenção: ao clicar em Cancelar, todo o histórico do jogo anterior será perdido.");
		if (r == false) {
			nome = null;
			historicos = null;
		}
	}*/
	nome_default = "jogador" + Math.floor((Math.random() * 100000) + 1000)
	while (nome == null || nome == "") {
		nome = window.prompt("Informe seu nome:", nome_default);
	}
	localStorage.setItem("oficina.regex.nome", nome);

	if (historicos == null) {
		historicos = {};
	}
	document.getElementById('nome').textContent = nome;

	select = document.getElementById('select_questoes');
	length = select.options.length;
	for (i = 0; i < length; i++) {
		select.options[0] = null;
	}
	select.options[0] = new Option('( Questão )', -1);
	for (i=0; i<questoes.length; i++) {
		select.options[i+1] = new Option('Questão ' + (i+1), i);
	}

	check_cadastro();
	startTimerJogadores();

	stopTimer();
	atualizar_pontos_acumulados();
	carregar_questao(-1);
	//document.documentElement.requestFullscreen();
}

function handler_sala() {
  if(this.status == 200) {
	console.log("SALA", this.responseText);
	resp = JSON.parse(this.responseText)
	if (!(nome in resp) || resp[nome] != json_uri) {
		resp[nome] = json_uri;
		s = JSON.stringify(resp);
		console.log(s);
		var sala_uri = 'https://api.myjson.com/bins/' + sala;
		req.open("PUT", sala_uri, true);
		req.setRequestHeader("Content-type", "application/json; charset=utf-8");
		req.send(s);
		sala_jogadores = resp;
		temporizador_jogadores();
	}
	sala_jogadores = resp;
  } else {
	console.log(this.status);
  }
}

function check_sala() {
	if (json_uri == null || json_uri == "") {
		return;
	}
	try {
		var request = new XMLHttpRequest();
		var sala_uri = 'https://api.myjson.com/bins/' + sala;
		request.onload = handler_sala;
		request.open('GET', sala_uri);  // `false` makes the request synchronous
		request.send();
	} catch(error) {
		console.error(error);
	}
}

function check_cadastro() {
	try {
		//obj = {'nome': nome, 'json_uri': json_uri, "historicos": historicos};
		obj = {'nome': nome, "historicos": historicos};
		s = JSON.stringify(obj);
		console.log(s);
		console.log(json_uri);
		if (json_uri == "" || json_uri == null) {
			req.open("POST", "https://api.myjson.com/bins", true);
		} else {
			req.open("PUT", json_uri, true);
		}
		req.setRequestHeader("Content-type", "application/json; charset=utf-8");
		req.send(s);
	} catch(error) {
		console.error(error);
	}
}


function putjson(obj) {
        var s = JSON.stringify(obj);
	console.log(s);
	/*req.open("PUT", "https://api.jsonbin.io/b/5ba3b45b0fbf2833e2291185?versioning=false", true);
	req.setRequestHeader("Content-type", "application/json");
	req.send(s);*/
}

function entsub(myform) {
	document.getElementById('regex').style.color = "black"; 
	if (window.event && window.event.keyCode == 13) {
		pattern = document.getElementById('regex').value;
		corrigir(pattern);
	} else {
		return true;
	}
}

function atualizar_status() {
	minutes = parseInt(tempo_restante / 60, 10)
	seconds = parseInt(tempo_restante % 60, 10);

	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	div_tempo = document.getElementById('time');

	div_tempo.textContent = minutes + ":" + seconds;

	if (tempo_restante<0) {
		div_tempo.style.color = 'black';
		div_tempo.textContent = "Esgotado!";
	} else if (tempo_restante<45) {
		div_tempo.style.color = 'red';
		if (!time_warning) {
			time_warning = true;
			audio_clock.play();
		}
	} else {
		div_tempo.style.color = 'black';
	}
	if (respondido && tempo_restante>0) {
		div_tempo.style.color = 'green';
	}
	
	div_erros = document.getElementById('erros');
	if (erros == 0) {
		div_erros.textContent = '-';
		div_erros.style.color = 'green';
	} else {
		div_erros.textContent = erros;
		div_erros.style.color = 'red';
	}

	div_pontos = document.getElementById('pontos');
	if (pontos != null) {
		div_pontos.textContent = pontos;
	} else {
		div_pontos.textContent = '-';
	}
	div_peso = document.getElementById('peso');
	div_peso.textContent = peso;
	atualizar_div_jogadores();
}

function salvar_historico(pattern) {
	historicos[id_questao_atual] = {
		'pattern': pattern,
		'pontos': pontos,
		'erros': erros,
		'tempo': tempo_restante,
	}
	localStorage.setItem("oficina.regex.historicos", JSON.stringify(historicos));
	//localStorage.setItem("oficina.regex.json_uri", json_uri);
	check_cadastro();
	atualizar_pontos_acumulados();
}


function temporizador() {

	if (!time_started) {
		time_started = true;
		audio_start.play();
	}

	d = (new Date()).getTime()
	diff = d-d_prev;
	d_prev = d;
	tempo_restante -= diff/1000; //*10;

	if (tempo_restante <= 0) {
		tempo_restante = 0;
		stopTimer();
		if (!respondido) {
			audio_timeup.play();
			salvar_historico('');
		}
		em_jogo = false;
	}
	atualizar_status()
    }

/* https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer */
function startTimer() {
	stopTimer();
	document.getElementById("select_questoes").disabled = true;
	document.getElementById("bt_next").disabled = true;
	document.getElementById("bt_back").disabled = true;
	document.getElementById('bt_desistir').style.visibility = "visible";
	d_prev = (new Date()).getTime()
	timer = setInterval(temporizador, 200);
}

function stopTimer() {
	time_started = false;
	document.getElementById("select_questoes").disabled = false;
	document.getElementById("bt_next").disabled = false;
	document.getElementById("bt_back").disabled = false;
	document.getElementById('bt_desistir').style.visibility = "hidden";
	if (timer != null) {
		clearInterval(timer);
		timer = null;
	}
	atualizar_status()
}


function atualizar_div_jogadores() {
	divs = "";
	lista = []
	for (var key in status_jogadores) {
		h = status_jogadores[key];
		if (id_questao_atual in h) {
			t = h[id_questao_atual]['pattern'];
		} else {
			t = '-';
		}
		lista.push([key, calcular_pontos_acumulados(h), t]);
	}
	lista.sort(function(a,b) {return b[1]-a[1];});
	for (i=0; i<lista.length; i++) {
		t = lista[i][2];
		if (em_jogo) {
			if (t != '-') {
				t = "*";
			}
		}
		n = lista[i][0];
		if (n == nome) {
			n = "<b>" + nome + "</b>";
		}
		if (t!="-") {
			n = '<span style="color: red;">' + n + '</span>'
		}
		divs += '<div style="font-size:12;" title="' + t + '">'
		//divs += ' <span style="float:left;">' + n + ':</span>'
		divs += n;
		divs += ' <span style="float:right;">' + lista[i][1] + '</span>'
		divs += '</div>';
	}
	document.getElementById('jogadores').innerHTML = divs;
}


function handler_jogador() {
  if(this.status == 200) {
	console.log("JOGADOR", this.responseText);
	resp = JSON.parse(this.responseText)
	status_jogadores[resp['nome']] = resp['historicos'];
	atualizar_div_jogadores();
  } else {
	console.log(this.status);
  }
}

function temporizador_jogadores() {
	console.log("TESTE");
	check_sala();
	for (var key in sala_jogadores) {
		console.log(key);
		if (key != nome) {
			var jogador_uri = sala_jogadores[key];
			console.log(key, jogador_uri);
			request = new XMLHttpRequest();
			request.onload = handler_jogador;
			request.open('GET', jogador_uri);  // `false` makes the request synchronous
			request.send();
		} else {
			status_jogadores[nome] = historicos;
		}
	}
}

function startTimerJogadores() {
	timer_jogadores = setInterval(temporizador_jogadores, 60000);
}

function stopTimerJogadores() {
	var r = confirm("Deseja interromper conexão?");
	if (r == false) {
		return;
	}
	if (timer_jogadores != null) {
		clearInterval(timer_jogadores);
		timer_jogadores = null;
	}
}


