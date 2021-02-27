// forEach -> para cada item do array fazer uma iteração
const arr = [1, 2, 3, 4, 5];

arr.forEach((valorItemLido, indiceItemLido) => {
    console.log(`${indiceItemLido}: ${valorItemLido}`)
});

// map -> retorna um novo array, do mesmo tamanho, iterando cada item de um array
const arr2 = arr.map(value => value * 2);
console.log(arr2);

// flat -> retorna um novo array com todos os elementos de um subarray concatenados de forma recursiva de acorod com a profundidade especificada (depth)
const arr3 = [1, 2, 3, [3, 4, [7, 8]]];
const arr4 = arr3.flat(2);

console.log(arr3);
console.log(arr4);

// flatMap -> retorna um novo vetor, como na função map, e executa um flat de profundidade 1
const arr5 = [1, 2, 3, 4, 5];
const arr6 = arr5.flatMap(value => [[value * 2]]);
console.log(arr5);
console.log(arr6);

// keys -> retorna um array iterator que contém as chaves para cada elemento do array
const arr7 = [1, 2, 3, 4, 5];
const iterator = arr7.keys();
console.log(iterator.next());
console.log(iterator.next());

// values -> retorna um array iterator que contém cada elemento do array
const value = arr7.values();
console.log(value.next());
console.log(value.next());

// entries -> retorna o par chave e valor de cada elemento do array criando o iterator
const entrie = arr7.entries();
console.log(entrie.next());
console.log(entrie.next());

// find -> retorna o primeiro item que satisfaça a condição
const f = arr7.find(value => value > 2);
console.log(f);

// findIndex -> retorna o indice do primeiro item que satisfaça a condição
const fI = arr7.findIndex(value => value > 2);
console.log(fI);

// filter -> retorna um novo array com todos os elementos de um array que satisfaça uma condição
const arrFilter = arr7.filter(value => value > 2);
console.log(arrFilter);

// indexOf -> retorna o primeiro indice em que um elemento pode ser encontrado em um array
const iOf = arr7.indexOf(2);
console.log(iOf);

// lastIndexOf -> retorna o úlimo indice em que um elemento pode ser encontrado em um array
const lOf = arr7.lastIndexOf(2);
console.log(lOf);

// includes -> verifica se determinado indice existe em um array
const haItem = arr7.includes(1);
console.log(haItem);

// some -> verifica se pelo menos um item de um array satisfaz a condição
const haAlgumElemento = arr7.includes(value => value % 2 == 0);
console.log(haAlgumElemento);

// every -> verifica se todos os itens de um array satisfazem a condição
const todosSatisfazem = arr7.every(value => value % 2 == 0);
console.log(todosSatisfazem);

// sort -> ordena os elementos de acordo com uma condição
const students = [
    {
        name: 'José',
        grade: 10
    },
    {
        name: 'Joao',
        grade: 5
    },
    {
        name: 'Josefa',
        grade: 5.5
    }
]
const itemSort = students.sort((current, next) => current.grade - next.grade);
console.log(itemSort);

// reverse -> inverte o sentido de um array
const arr8 = [5, 4, 3, 2, 1];
console.log(arr8.reverse());

// join -> junta os elementos de um array separados por um delimitador, retornando uma string
const arr9 = [56, 58, 59, 61, 52];
console.log(arr9.join('*'));

// reduce -> itera cada posição e retorna um novo tipo de dado ou array
const arr10 = [1, 2, 3, 4, 5];
console.log(arr10.reduce((total /* O que será retornado, começa com intero igual a zero */
    , value) => total += value, 0 /* Tipo a ser retornado */));