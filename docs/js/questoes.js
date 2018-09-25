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
	"tempo": 90,
	"linhas": [
		"a", "aa", "aaa", "aaaa", "a aa aaa aaaa"
	],
	"resposta": "aa" 
	}
,
	{
	"enunciado": "A palavra <kbd>do</kbd> seguida de um espaço em branco",
	"senha": true,
	"peso": 0.2,
	"tempo": 90,
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
	"peso": 0.2,
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
	"peso": 0.2,
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
	"enunciado": "A sequência de caracteres literais: <kbd>*$+</kbd>",
	"senha": true,
	"peso": 0.2,
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
	"resposta": "\\*\\$\\+" 
	}
,











	{
	"enunciado": "Uma letra <kbd>a</kbd> ou uma letra <kbd>b</kbd>",
	"senha": true,
	"peso": 0.2,
	"tempo": 90,
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
	"tempo": 90,
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
	"tempo": 90,
	"linhas": [
		"0a", "0b", "0c", "a0", "b0", "aa", "bb", "0aa0"
	],
	"resposta": "0[ab]"
	}
,	
	{
	"enunciado": "O nome Alberto ou Alberta",
	"senha": true,
	"peso": 0.2,
	"tempo": 90,
	"linhas": [
		"Alberto", "Alberta", "Alberte", "Al-Berto", "alberto", "alberta", "Albertina", "Albberto"
	],
	"resposta": "Albert[oa]"
	}
,
	{
	"enunciado": "O nome Alberto ou Alberta (iniciando com letra maiúscula ou minúscula)",
	"senha": true,
	"peso": 0.2,
	"tempo": 90,
	"linhas": [
		"Alberto", "Alberta", "Alberte", "Al-Berto", "alberto", "alberta", "Albertina", "Albberto"
	],
	"resposta": "[Aa]lbert[oa]"
	}
,
	{
	"enunciado": "Duas vogais consecutivas (ditongo ou hiato)",
	"senha": true,
	"peso": 0.3,
	"tempo": 90,
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
	"enunciado": "Uma vogal seguida de um caractere diferente de vogal. <br><b>obs.</b>: cuidado com acentos!",
	"senha": true,
	"peso": 0.3,
	"tempo": 90,
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
	"enunciado": "qualquer dígito (0 a 9) seguido da letra <kbd>a</kbd>",
	"senha": true,
	"peso": 0.3,
	"tempo": 90,
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
	"tempo": 90,
	"linhas": [
		"0a 1b", "versão 9.a 3bca", "a2c b3b", "rota 44 com senha 0a1b", "aabb1190 / ID: 10cA0", "1\t \t2 \t_4_\t 1\t \t2"
	],
	"resposta": "\\d[ab]"
	}
,
	{
	"enunciado": "qualquer dígito seguido de um caractere diferente de <kbd>a</kbd> ou <kbd>b</kbd>",
	"senha": true,
	"peso": 0.3,
	"tempo": 90,
	"linhas": [
		"0a 1b", "versão 9.a 3bca", "a2c b3b", "rota 44 com senha 0a1b", "aabb1190 / ID: 10cA0", "1\t \t2 \t_4_\t 1\t \t2"
	],
	"resposta": "\\d[^ab]"
	}
,
	{
	"enunciado": "qualquer dígito <b>precedido</b> de um espaço",
	"senha": true,
	"peso": 0.3,
	"tempo": 90,
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
	"tempo": 90,
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
	"tempo": 90,
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
	"tempo": 90,
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
	"tempo": 90,
	"linhas": [
		"0a", "1b", "versão 9a", "3bca", "a2c", "b3b", "rota 44", "senha 0a1b", "aabb1190", "ID: 10cA0"
	],
	"resposta": "\\d."
	}
,
	{
	"enunciado": "qualquer caractere seguido de um ponto literal",
	"senha": true,
	"peso": 0.3,
	"tempo": 90,
	"linhas": [
		"0a", "1b", "versão 9a", "3bca", "a2c", "b3b", "rota 44", "senha 0a1b", "aabb1190", "ID: 10cA0"
	],
	"resposta": "\\d\\."
	}
,
	{
	"enunciado": "Um número no formato xxx.xxx,xx (onde x é um dígito)",
	"senha": true,
	"peso": 0.3,
	"tempo": 90,
	"linhas": [
		"0a", "1b", "versão 9a", "3bca", "a2c", "b3b", "rota 44", "senha 0a1b", "aabb1190", "ID: 10cA0"
	],
	"resposta": "\\d\\."
	}
,
	{
	"enunciado": "dois dígitos com três caracteres entre eles",
	"senha": true,
	"peso": 0.3,
	"tempo": 90,
	"linhas": [
		"0a", "1b", "versão 9a", "3bca", "a2c", "b3b", "rota 44", "senha 0a1b", "aabb1190", "ID: 10cA0"
	],
	"resposta": "\\d...\\d"
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
	"enunciado": "Uma ou mais letras <kbd>a</kbd>'s imediatamente seguidas de uma ou mais letras <kbd>b</kbd>'s",
	"senha": true,
	"peso": 0.5,
	"tempo": 90,
	"linhas": [
		"a", "aa", "ab", "aab", "aabb", "aacbb", "bbaa", "cabbbbbbc", "a1b1"
	],
	"resposta": "a+b+"
	}
,
	{
	"enunciado": "um ou mais dígitos <kbd>0</kbd>'s imediatamente seguidos de zero ou mais dígitos",
	"senha": true,
	"peso": 0.5,
	"tempo": 90,
	"linhas": [
		"0001", "12345", "101", "707", "abc", "número", "rota 044", "0a1b", "ID", "061 1122-3344", "0"
	],
	"resposta": "0+[0123456789]*"
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

var senhas = [];
