const arr = [1,2,3];
const arr2 = new Array(10, 'arroz', 3);
const arr3 = Array.of('batata', 'abacaxi', 'cebola');

// Passando apenas um parametro cria um array com n posições vazias
const arr4 = Array(5);
// Passando mais de um parametro cria o array com os parametros
const arr5 = Array(5, 2);

// Array.from
// Espera por uma instância array-like ou iterable object. Permite transformar listas em arrays
divs = document.querySelectorAll('div');
divsArr = Array.from(divs);


console.log(arr);
console.log(arr2);
console.log(arr3);

console.log(arr4);
console.log(arr5);

console.log(divs);
console.log(divsArr);

// Inserir e remover
// push -> inseri um mais elementos no final de um array e retorna o tamanho da lista
const frutas = ['Manga', 'Goiaba'];
const r = frutas.push('Abacaxi');

console.log(frutas);
console.log(r);

// pop -> remove o último elemento do array. Retorna o item removido
const removido = frutas.pop();
console.log(frutas);
console.log(removido);

// unshift -> adiciona no inicio do array. Retorna o tamnaho do array
const r = frutas.unshift('Morango');
console.log(frutas);
console.log(r);

// shift -> remove do inicio. Retorna o item removido
const removido = frutas.shift();
console.log(frutas);
console.log(removido);

// Concatenando arrays
// concat -> concatena arrays
const itens1 = ['Carro', 'Cadeira', 'Batata'];
const itens2 = ['Dino', 'Celular'];

const itens = itens1.concat(itens2);

console.log(itens1);
console.log(itens2);
console.log(itens);

// slice -> retorna um novo array 'fatiando' o array de acordo com o inicio e fim
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.slice(0, 2);
console.log(arr);
console.log(arr2);

// splice -> altera um array adicionado novos elementos enquanto remove elementos antigos
const arr = [1, 2, 3, 4, 5];
arr.splice(2);
console.log(arr);

const arr = [1, 2, 3, 4, 5];
arr.splice(0 /*posicao */, 0 /* qtdElementos */, 'first'/* Item a ser adicionado */);
console.log(arr);