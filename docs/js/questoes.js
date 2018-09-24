questoes_json = `
[
	{
	"enunciado": "Uma letra <kbd>a</kbd> minúscula",
	"senha": "",
	"peso": 0.2,
	"linhas": [
		"a", "b", "c", "d", "A", "4"
	],
	"resposta": "a"
	}
	
,

	{
	"enunciado": "Duas letras <kbd>a</kbd>'s minúsculas",
	"senha": "",
	"peso": 0.2,
	"linhas": [
		"a", "aa", "aaa", "aaaa", "a aa aaa aaaa"
	],
	"resposta": "aa" 
	}
,
	{
	"enunciado": "A palavra <kbd>do</kbd> seguida de um espaço em branco",
	"senha": "",
	"peso": 0.2,
	"linhas": [
		"Olhos do mundo", 
		"zelos do marido",
		"morte do Viegas",
		"uma vertigem de cabriolas",
		"descendente do cavalo de Aquiles",
		"a minha teoria das edições humanas",
		"me pareceu entrar na região dos gelos eternos"
	],
	"resposta": "do " 
	}
,
	{
	"enunciado": "Uma letra <kbd>a</kbd> ou uma letra <kbd>b</kbd>",
	"senha": "",
	"peso": 0.4,
	"linhas": [
		"a", "b", "c", "d", "A", "4"
	],
	"resposta": "[ab]"
	}
,

	{
	"enunciado": "o dígito zero seguido de uma letra <kbd>a</kbd> ou <kbd>b</kbd> minúscula",
	"senha": "",
	"peso": 0.4,
	"linhas": [
		"0a", "0b", "0c", "a0", "b0", "aa", "bb", "0aa0"
	],
	"resposta": "0[ab]"
	}
,	
	{
	"enunciado": "O nome Alberto ou Alberta",
	"senha": "",
	"peso": 0.4,
	"linhas": [
		"Alberto", "Alberta", "Alberte", "Al-Berto", "Albertina", "Albberto"
	],
	"resposta": "Albert[oa]"
	}
,
	{
	"enunciado": "qualquer dígito de zero a nove seguido de uma letra <kbd>a</kbd> ou <kbd>b</kbd> minúscula",
	"senha": "",
	"peso": 1.2,
	"linhas": [
		"0a", "1b", "versão 9a", "3bca", "a2c", "b3b", "rota 44", "senha 0a1b", "aabb1190", "ID: 10cA0"
	],
	"resposta": "[0123456789][ab]"
	}
,
	{
	"enunciado": "Uma ou mais letras <kbd>a</kbd>'s consecutivas",
	"senha": "",
	"peso": 1.2,
	"linhas": [
		"a", "aa", "b", "bb", "aba", "aa"
	],
	"resposta": "a+"
	}
,
	{
	"enunciado": "Uma ou mais letras <kbd>a</kbd>'s imediatamente seguidas de uma ou mais letras <kbd>b</kbd>'s",
	"senha": "",
	"peso": 1.2,
	"linhas": [
		"a", "aa", "ab", "aab", "aabb", "aacbb", "bbaa", "cabbbbbbc", "a1b1"
	],
	"resposta": "a+b+"
	}
,
	{
	"enunciado": "um ou mais dígitos <kbd>0</kbd>'s imediatamente seguidos de zero ou mais dígitos",
	"senha": "",
	"peso": 1.2,
	"linhas": [
		"0001", "12345", "101", "707", "abc", "número", "rota 044", "0a1b", "ID", "061 1122-3344", "0"
	],
	"resposta": "0+[0123456789]*"
	}

]
`
