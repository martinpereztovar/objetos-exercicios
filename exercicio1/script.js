// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = [];

// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

const laranja = {nome: "laranja", preco: 5, disponibilidade: true};
const mamao = {nome: "mamao", preco: 4.50, disponibilidade: true};
const acerola = {nome: "acerola", preco: 3.50, disponibilidade: true};

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.
sacolao.push(laranja, mamao, acerola);

// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.
console.log(sacolao);