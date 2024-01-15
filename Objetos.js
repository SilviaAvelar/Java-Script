// objetos
let person = {
    name: 'Silvia',
    age: 49,
    address: 'Rua Frei Luis de Moura'
}


// Para alterar a propriedade de um objeto:
// Dot Notation
person.address = 'Cham de Mars, Paris, França'

console.log(person.address)
// Bracket Notation
person['name'] = 'Marcos'
console.log(person)
console.log(person.name)

let celular = {
    nome: 'iphone 15 Pro Max',
    preco: 1500,
    marca: 'Apple',
    cor: 'verde limão'
}

console.log(celular)

console.log('o ' + person.name + ' comprou um ' + 
celular.nome + ' da cor ' + celular.cor + ' pela bagatela de ' +
 celular.preco +  ' euros! ' )