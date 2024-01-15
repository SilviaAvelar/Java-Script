// VAR e LET - valores mutáveis
var nome = 'Silvia';
let idade = 30;

// CONST - Não altera o valor
const PI = 3.1416;


console.log(nome, idade,PI)
console.log('Oi, meu nome é '+ nome + '!')

//Após a alteração do nome
nome = 'Leonardo';
console.log('Oi, meu nome é '+ nome + '!')

// Números

let num1 = 5;
let num2 = 4;
let num3 = '2'

console.log(num1 + num2 +num3)

// Boas práticas ao declarar uma variável
let carroAzul = "carro azul"
let CarroAzul = 'fiat uno'
let carroazul = true
let _carroAzul = 34
let $carroAzul = ['Saveiro', 'Gol','Uno']

console.log(carroAzul, CarroAzul, carroazul, _carroAzul, $carroAzul)

// Nomes descritivos e significativos
let fruta = "Morango"
let tamanhoDaTelevisao = "65 polegadas"
let isApproved = true

// Proibições
// Não pode conter palavras reservadas
// let if = "Marcos";

// Não pode conter espaços ou hifens
// let carro Azul = "carro azul"
// let carro-azul ="palio"

// Não pode começar com um número
// let 1name = "José"
