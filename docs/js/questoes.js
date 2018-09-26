var questoes = [
	{
	"enunciado": "Uma letra <kbd>a</kbd> minúscula",
	"senha": true,
	"peso": 0.1,
	"tempo": 120,
	"linhas": [
		"a", "b", "c", "d", "A", "4"
	],
	"resposta": "a"
	}
,

	{
	"enunciado": "Duas letras <kbd>a</kbd>'s minúsculas",
	"senha": true,
	"peso": 0.1,
	"tempo": 100,
	"linhas": [
		"a", "aa", "aaa", "aaaa", "a aa aaa aaaa"
	],
	"resposta": "aa" 
	}
,
	{
	"enunciado": "A palavra <kbd>do</kbd> seguida de um espaço em branco",
	"senha": true,
	"peso": 0.1,
	"tempo": 100,
	"linhas": [
		"Olhos do mundo", 
		"zelos do marido",
		"morte do Viegas",
		"uma vertigem de cabriolas",
		"descendente do cavalo de Aquiles",
		"a minha teoria das edições humanas",
		"me pareceu entrar na região dos gelos eternos",
		"dor de cabeça"
	],
	"resposta": "do " 
	}






,
	{
	"enunciado": "Um ponto de interrogação",
	"senha": true,
	"peso": 0.1,
	"tempo": 90,
	"linhas": [
		"Qual seu nome?", 
		"Olá!",
		"Bom dia!",
		"¿Como Estas Hoy?",
		"Nome: ????",
		"***$++$***",
		"*[teste]*",
		"(teste)",
		"0+3"
	],
	"resposta": "\\?" 
	}
,
	{
	"enunciado": "Uma letra <kbd>a</kbd> seguida de um ponto de exclamação",
	"senha": true,
	"peso": 0.1,
	"tempo": 90,
	"linhas": [
		"Qual seu nome?", 
		"!Teste",
		"Bom dia!",
		"¿Como Estas Hoy?",
		"Nome: ????",
		"***$++$***",
		"*[teste]*",
		"(teste)",
		"0+3"
	],
	"resposta": "a!" 
	}
,
	{
	"enunciado": "A sequência de caracteres literais: <kbd>*$+!n</kbd>",
	"senha": true,
	"peso": 0.3,
	"tempo": 180,
	"linhas": [
		"Qual seu nome?", 
		"!Teste",
		"Bom dia!",
		"¿Como Estas Hoy?",
		"Nome: ????",
		"***$+!n!+$***",
		"*[teste]*",
		"(teste)",
		"0+3"
	],
	"resposta": "\\*\\$\\+!n" 
	}
,











	{
	"enunciado": "Uma letra <kbd>a</kbd> ou uma letra <kbd>b</kbd>",
	"senha": true,
	"peso": 0.2,
	"tempo": 120,
	"linhas": [
		"a", "b", "c", "d", "A", "4"
	],
	"resposta": "[ab]"
	}
,
	{
	"enunciado": "Uma vogal",
	"senha": true,
	"peso": 0.3,
	"tempo": 120,
	"linhas": [
		"Olhos do mundo", 
		"zelos do marido",
		"morte do Viegas",
		"uma vertigem de cabriolas",
		"descendente do cavalo de Aquiles",
		"a minha teoria das edições humanas",
		"me pareceu entrar na região dos gelos eternos",
		"dor de cabeça"
	],
	"resposta": "[aeiou]"
	}
,
	{
	"enunciado": "o dígito zero seguido de uma letra <kbd>a</kbd> ou <kbd>b</kbd>",
	"senha": true,
	"peso": 0.2,
	"tempo": 120,
	"linhas": [
		"0a", "0b", "0c", "a0", "b0", "aa", "bb", "0aa0"
	],
	"resposta": "0[ab]"
	}
,
	{
	"enunciado": "O nome Alberto ou Alberta (iniciando com letra maiúscula ou minúscula)",
	"senha": true,
	"peso": 0.3,
	"tempo": 120,
	"linhas": [
		"Alberto", "Alberta", "Alberte", "Al-Berto", "alberto", "alberta", "Albertina", "Albberto"
	],
	"resposta": "[Aa]lbert[oa]"
	}
,
	{
	"enunciado": "Duas vogais consecutivas (ditongo ou hiato)",
	"senha": true,
	"peso": 0.4,
	"tempo": 120,
	"linhas": [
		"Olhos do mundo", 
		"zelos do marido",
		"morte do Viegas",
		"uma vertigem de cabriolas",
		"descendente do cavalo de Aquiles",
		"a minha teoria das edições humanas",
		"me pareceu entrar na região dos gelos eternos",
		"dor de cabeça"
	],
	"resposta": "[aeiou][aeiou]"
	}
,
	{
	"enunciado": "qualquer dígito (0 a 9) seguido da letra <kbd>a</kbd>",
	"senha": true,
	"peso": 0.3,
	"tempo": 120,
	"linhas": [
		"0a", "1b", "versão 9a", "3bca", "a2c", "b3b", "rota 44", "senha 0a1b", "aabb1190", "ID: 10cA0"
	],
	"resposta": "[0123456789]a"
	}
,








	{
	"enunciado": "qualquer dígito seguido de uma letra <kbd>a</kbd> ou <kbd>b</kbd>",
	"senha": true,
	"peso": 0.3,
	"tempo": 120,
	"linhas": [
		"0a 1b", "versão 9.a 3bca", "a2c b3b", "rota 44 com senha 0a1b", "aabb1190 / ID: 10cA0", "1\t \t2 \t_4_\t 1\t \t2"
	],
	"resposta": "[0123456789][ab]"
	}
,
	{
	"enunciado": "qualquer dígito seguido de um caractere diferente de <kbd>a</kbd> ou <kbd>b</kbd>",
	"senha": true,
	"peso": 0.4,
	"tempo": 120,
	"linhas": [
		"0a 1b", "versão 9.a 3bca", "a2c b3b", "rota 44 com senha 0a1b", "aabb1190 / ID: 10cA0", "1\t \t2 \t_4_\t 1\t \t2"
	],
	"resposta": "[0123456789][^ab]"
	}
,
	{
	"enunciado": "Uma vogal seguida de um caractere diferente de vogal. <br><b>obs.</b>: cuidado com acentos!",
	"senha": true,
	"peso": 0.5,
	"tempo": 200,
	"linhas": [
		"Olhos do mundo", 
		"zelos do marido",
		"morte do Viegas",
		"uma vertigem de cabriolas",
		"descendente do cavalo de Aquiles",
		"a minha teoria das edições humanas",
		"me pareceu entrar na região dos gelos eternos",
		"dor de cabeça"
	],
	"resposta": "[aeiou][^aeiouã]"
	}
,





	{
	"enunciado": "qualquer dígito <b>precedido</b> de um espaço",
	"senha": true,
	"peso": 0.3,
	"tempo": 210,
	"linhas": [
		"0a 1b", "versão 9.a 3bca", "a2c b3b", "rota 44 com senha 0a1b", "aabb1190 / ID: 10cA0", "1\t \t2 \t_4_\t 1\t \t2"
	],
	"resposta": "\\s\\d"
	}
,
	{
	"enunciado": "qualquer caractere de palavra seguido de um dígito",
	"senha": true,
	"peso": 0.3,
	"tempo": 180,
	"linhas": [
		"0a 1b", "versão 9.a 3bca", "a2c b3b", "rota 44 com senha 0a1b", "aabb1190 / ID: 10cA0", "1\t \t2 \t_4_\t 1\t \t2"
	],
	"resposta": "\\w\\d"
	}
,
	{
	"enunciado": "qualquer dígito seguido de um caractere que não seja dígito",
	"senha": true,
	"peso": 0.3,
	"tempo": 180,
	"linhas": [
		"0a 1b", "versão 9.a 3bca", "a2c b3b", "rota 44 com senha 0a1b", "aabb1190 / ID: 10cA0", "1\t \t2 \t_4_\t 1\t \t2"
	],
	"resposta": "\\d\\D"
	}
,
	{
	"enunciado": "qualquer dígito seguido de um caractere que não seja espaço",
	"senha": true,
	"peso": 0.3,
	"tempo": 180,
	"linhas": [
		"0a 1b", "versão 9.a 3bca", "a2c b3b", "rota 44 com senha 0a1b", "aabb1190 / ID: 10cA0", "1\t \t2 \t_4_\t 1\t \t2"
	],
	"resposta": "\\d\\S"
	}
,





	{
	"enunciado": "qualquer dígito seguido de qualquer caractere",
	"senha": true,
	"peso": 0.3,
	"tempo": 150,
	"linhas": [
		"0a", "1b", "versão 9a", "3bca", "a2c", "b3b", "rota 44", "senha 0a1b", "aabb1190", "ID: 10cA0"
	],
	"resposta": "\\d."
	}
,
	{
	"enunciado": "qualquer caractere seguido de um ponto literal",
	"senha": true,
	"peso": 0.4,
	"tempo": 150,
	"linhas": [
		"0a", "1b", "ponto final.", "1.2.3.4", "......", "..", "rota.44", "senha-0a1b", "aabb1190", "ID:10cA.0"
	],
	"resposta": ".\\."
	}
,
	{
	"enunciado": "Um número no formato xxx.xxx,xx (onde x é um dígito)",
	"senha": true,
	"peso": 0.6,
	"tempo": 210,
	"linhas": [
		"R$ 401.159,00", "123.122,15 reais", "[932.443,07]", "US$ 100.000,00", "1000000,00", "100-000,00", "abc432,00", "123.123.11", "a11.a11,90", "ID10cA0"
	],
	"resposta": "\\d\\d\\d\\.\\d\\d\\d,\\d\\d"
	}
,
	{
	"enunciado": "Um CPF no formato xxx.xxx.xxx-xx (onde x é um dígito)",
	"senha": true,
	"peso": 0.8,
	"tempo": 210,
	"linhas": [
		"000.000.000-00",
		"111.111.111-11",
		"0111.111.111-11",
		"111.111.111-110",
		"111.0111.0111-11",
		"11101110111-11",
		"111.111.111111",
		"1110110111111",
		"111011011111",
		"11101101111",
		"1110110111",
		"111011011",
		".111011011-11",
		"..111011011-11",
		"...111011011-11",
		"..1.11011011-11",
		".1.1.1011011-11",
		"1.1.1.011011-11",
	],
	"resposta": "\\d\\d\\d\\.\\d\\d\\d\\.\\d\\d\\d-\\d\\d"
	}
,
	{
	"enunciado": "dois dígitos separados por três caracteres quaisquer",
	"senha": true,
	"peso": 0.3,
	"tempo": 120,
	"linhas": [
		"0a0", "1bb1", "versão 9aaa9", "3bca4", "11111", "3c3ab3b33a33", "rota 44", "senha 0a1b2c", "9aabb1190", "ID:10cA0"
	],
	"resposta": "\\d...\\d"
	}
,



	{
	"enunciado": "Uma linha contendo somente a palavra casa ou caso",
	"senha": true,
	"peso": 0.4,
	"tempo": 180,
	"linhas": [
		"casa", "caso", "casaa", "casso", "acasa", "acacasaa", "casa\ncaso\nmesmo\ncaso",
	],
	"resposta": "^cas[ao]$"
	}
,
	{
	"enunciado": "Uma palavra com exatamente 3 letras",
	"senha": true,
	"peso": 0.4,
	"tempo": 180,
	"linhas": [
		"casa", "rei", "toa", "moi", "hey", "a4b", "c\td", "var ias", "pal avr separadas por espaço", "lin\ninh\nhas",
	],
	"resposta": "\\b\\w\\w\\w\\b"
	}
,
	{
	"enunciado": "Uma palavra com exatamente 4 letras e terminando com s",
	"senha": true,
	"peso": 0.4,
	"tempo": 150,
	"linhas": [
		"casa", "reis", "toas", "mois", "m is", "moiss", "hets", "var rias pala avr separ adas por espaço", "linh\ninha\nnhas",
	],
	"resposta": "\\b\\w\\w\\ws\\b"
	}
,
	{
	"enunciado": "Duas palavra com 3 letras separadas por um único espaço",
	"senha": true,
	"peso": 0.5,
	"tempo": 210,
	"linhas": [
		"oba oba", "rei reis", "reis rei", "re  rei", "m is", "mo s", "hets", "var rias pal avr asse par adas por espaço", "linh\ninha\nnhas",
	],
	"resposta": "\\b\\w\\w\\w\\s\\w\\w\\w\\b"
	}
,


	{
	"enunciado": "2 letras maiúsculas ou 2 dígitos consecutivos",
	"senha": true,
	"peso": 0.6,
	"tempo": 180,
	"linhas": [
		"AEA", "22", "XX", "212", "o2", "u2a", "2a9","AK822","KKK","iAi 25","24 III"," 23 ", " AJZ ", " zZzZ", "22 "
	],
	"resposta": "[A-Z][A-Z]|\\d\\d"
	}
,

	{
	"enunciado": "Uma linha contendo exatamente 3 vogais ou exatamente 2 dígitos",
	"senha": true,
	"peso": 0.7,
	"tempo": 210,
	"linhas": [
		"aea", "22", "ai", "212", "o2", "u2a", "2a9","aa822","aea","iaa 25","24 iii"," 23 ", " aaa ", " aaa", "22 "
	],
	"resposta": "^([aeiou][aeiou][aeiou]|\\d\\d)$"
	}
,


	{
	"enunciado": "Uma ou mais letras <kbd>a</kbd>'s consecutivas",
	"senha": true,
	"peso": 0.4,
	"tempo": 90,
	"linhas": [
		"a", "aa", "b", "bb", "aba", "aa"
	],
	"resposta": "a+"
	}
,
	{
	"enunciado": "Um ou mais <kbd>a</kbd>'s seguidos de um ou mais <kbd>b</kbd>'s",
	"senha": true,
	"peso": 0.5,
	"tempo": 120,
	"linhas": [
		"a", "aa", "ab", "aab", "aabb", "aacbb", "bbaa", "cabbbbbbc", "a1b1"
	],
	"resposta": "a+b+"
	}
,




	{
	"enunciado": "duas letras <kbd>a</kbd>'s separadas por zero ou mais dígitos",
	"senha": true,
	"peso": 0.5,
	"tempo": 180,
	"linhas": [
		"a0001a", "12a3a45", "101aa", "707aaa", "1a1", "2a2número", "rota 044", "abba", "a  a", "061 1122-3344", "0"
	],
	"resposta": "a\\d*a"
	}
,
	{
	"enunciado": "um ou mais dígitos <kbd>0</kbd>'s imediatamente seguidos por 3 dígitos",
	"senha": true,
	"peso": 0.5,
	"tempo": 180,
	"linhas": [
		"000123", "012345", "0101", "0707", "0abc", "núm0ero", "rota 044", "0a1b", "ID", "061 1122-3344", "00000"
	],
	"resposta": "0+\\d{3}"
	}
,
	{
	"enunciado": "um ou mais dígitos <kbd>0</kbd>'s imediatamente seguidos por no mínimo 3 dígitos",
	"senha": true,
	"peso": 0.3,
	"tempo": 120,
	"linhas": [
		"000123", "012345", "0101", "0707", "0abc", "núm0ero", "rota 044", "0a1b", "ID", "061 1122-3344", "00000", "0000000000a"
	],
	"resposta": "0+\\d{3,}"
	}
,
	{
	"enunciado": "Um CPF no formato xxx.xxx.xxx-xx (onde x é um dígito), com separador de milhares opcional e hífen opcional.",
	"senha": true,
	"peso": 0.6,
	"tempo": 180,
	"linhas": [
		"000.000.000-00",
		"111.111.111-11",
		"0111.111.111-11",
		"111.111.111-110",
		"111.0111.0111-11",
		"11101110111-11",
		"111.111.111111",
		"1110110111111",
		"111011011111",
		"11101101111",
		"1110110111",
		"111011011",
		".111011011-11",
		"..111011011-11",
		"...111011011-11",
		"..1.11011011-11",
		".1.1.1011011-11",
		"1.1.1.011011-11",
	],
	"resposta": "\\d\\d\\d\\.?\\d\\d\\d\\.?\\d\\d\\d-?\\d\\d"
	}
,
	{
	"enunciado": "Uma linha contendo exatamente um endereço IP. ex.: 127.0.0.1, 192.168.0.254. Um IP é formado por exatamente 4 números separados por pontos. Cada número possui no máximo 3 dígitos.",
	"senha": true,
	"peso": 0.7,
	"tempo": 210,
	"linhas": [
		"127.0.0.1",
		"192.168.0.254",
		"10.11.10.11",
		"127.127.127.127",
		"9999.0.0.1",
		"127404041",
		"a127.0.0.1",
		"127.a.a.1",
		"127.0.0.1a",
		"xxx.yyy.zzz.www",
		"0.0.0.a",
		"127.0.0.1.0",
		"palavra",
		"0.1.2.",
		".0.1.2",
		".0.1.2.",
		".0.1.2.3.",
		".0.1.2.3.4.",
		"0.1.2.3.4.",
		".0.1.2.3.4",
		"0.1.2.3.4",
		"a0.1.2.3b",
	],
	"resposta": "^\\d{1,3}.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$"
	}




,
	{
	"enunciado": "uma ou mais repetições consecutivas das letras <kbd>xy</kbd>",
	"senha": true,
	"peso": 0.3,
	"tempo": 120,
	"linhas": [
		"xy", "xyxy", "xyxyxy", "xyxyxyxy", "xyxyxyxyxy", "xyxyxyxyxyxy", "xyxyxyxyxyxyxy", "xxxxxxyyyyyy", "yyyyyxxxxx"
	],
	"resposta": "(xy)+"
	}
,
	{
	"enunciado": "5 ou 6 repetições consecutivas das letras <kbd>xy</kbd>",
	"senha": true,
	"peso": 0.3,
	"tempo": 120,
	"linhas": [
		"xy", "xyxy", "xyxyxy", "xyxyxyxy", "xyxyxyxyxy", "xyxyxyxyxyxy", "xyxyxyxyxyxyxy", "xxxxxxyyyyyy", "yyyyyxxxxxyyyyy"
	],
	"resposta": "(xy){5,6}"
	}
,
	{
	"enunciado": "Uma linha contendo exatamente um telefone no formato <kbd>0xx xxxx-xxxx</kbd> ou <kbd>xxxx-xxxx</kbd> (cou ou sem DDD).",
	"senha": true,
	"peso": 0.8,
	"tempo": 180,
	"linhas": [
		"061 3316-0000",
		"61 3316-0000",
		"x61 3316-0000",
		"3316-0000",
		"061x3316x0000",
		"061 3316x0000",
		"061 3316-00006",
		"770613316x000077",
		"770613316-00007",
	],
	"resposta": "(0\\d\\d )?\\d{4}-\\d{4}"
	}



,
	{
	"enunciado": "um ou mais caracteres quaisquer entre aspas duplas",
	"senha": true,
	"peso": 0.8,
	"tempo": 180,
	"linhas": [
		"\"olá\"", "\"2\"", "\"33\"", "\"ocorrencia #1\" \"ocorrencia#2\"", "\"x\" \"y\" \"z\"", "\"1 2 3 4\"", "\"#$\" \"}{]\"", "z \"x\" y"
	],
	"resposta": "\".+?\""
	}
,
	{
	"enunciado": "um ou mais caracteres quaisquer entre [colchetes]",
	"senha": true,
	"peso": 0.6,
	"tempo": 120,
	"linhas": [
		"[]", "[2]", "[33]", "[ocorrencia #1] [ocorrencia#2]", "[x] [y] [z]", "[1] [2] [3] [4]", "[#$] [}{]", "z [x] y"
	],
	"resposta": "\\[.+?\\]"
	}


,
	{
	"enunciado": "dois dígitos que se alternam repetidamente por mais de duas vezes consecutivas",
	"senha": true,
	"peso": 0.8,
	"tempo": 180,
	"linhas": [
		"1212", "1213", "12:12", "1212121212", "222", "3333", "1a1a1a", "12211221", "12341234"
	],
	"resposta": "(\\d{2})\\1+"
	}
,
	{
	"enunciado": "uma mesma palavra que ocorre duas vezes separadas por um hífen",
	"senha": true,
	"peso": 0.8,
	"tempo": 180,
	"linhas": [
		"oba-oba", 'rei-rei', 'bora-bora', 'cai-cai', 'nao-sei', 'sei+nao', 'sei sim', 'sim nao', 'sim sim', 'nao nao'
	],
	"resposta": "(\\w+)-\\1"
	}



];


var senhas = [
23619,
63980,
23490,
56835,
43442,
95451,
98730,
51610,
6890,
76818,
60116,
66683,
28994,
9400,
80264,
79473,
55023,
35209,
4681,
52175,
20154,
99024,
30298,
61473,
67921,
41155,
60633,
76679,
36092,
41186,
35392,
52420,
85203,
99926,
37191,
73835,
90040,
83885,
48559,
35227,
63726,
412,
27047,
44330,
92107,
39511,
8434,
44739,
85973,
97151,
85033,
18292,
7882,
12983,
30614,
74117,
73054,
16297,
87730,
82480,
20380,
97475,
46774,
67164,
88659,
35896,
77461,
13282,
44454,
99999,
81138,
12977,
26329,
32339,
90873,
28176,
83302,
97525,
78829,
19870,
16594,
80776,
43218,
36988,
30949,
93833,
14723,
31091,
46052,
35602,
65771,
16128,
80493,
56560,
13500,
55643,
42470,
54746,
13985,
25189
];

//var senhas = [];
