// Utilizando o Crt + : ele realiza esse comentário, no html é <!-- -->
// 1 - Number 
console.log(typeof 2);
console.log(typeof -3);
console.log(typeof 150.00);

// Operações Aritmeticas

console.log(2 + 4);
console.log(2 - 4);
console.log(2 * 4);
console.log(10 / 4);
console.log(20 + 20 / 2);
console.log(typeof Infinity); // Isso significa que é number
console.log(typeof Infinity); // Colocará como indefinido, ou seja, não existe

console.log(12 * "asd");

console.log(typeof NaN);

// STRINGS

console.log("Um texto");
console.log('Texto teste crase');

console.log(typeof"Um texto");
console.log(typeof'Texto teste crase');

// Simbolos especiais em strings

console.log("Testando a \n barra"); // \n ele puxa a linha

console.log("Execução do \t tab") // Ele executa como se fosse o a tecla tab

// Concatenação

console.log("Oi," + " tudo" + " bem?"); // Vai unir um texto normal, como se escreve Oi, tudo bem?

// Interpolação - Template Strings

console.log(`A soma de 2 + 2 é: ${ '10 + 10'} `); // ele faz a conversao como número, se colocar as crases no meio dos cochetes, como se fosse o console.log() ele lê como texto 10 + 10

// ELE SEMPRE PRECISA SER ESCRITO DENTRO DAS CRASES  SHIFT + ` - PODE SER CONSIDERADO DE TEMPLATE STRINGS

console.log(`Posso executar qualquer coisa aqui ${console.log("teste")}`)

// Booleanos
console.log(true);
console.log(false);

console.log( 10 > 5);
console.log( 10 < 5);
console.log( 10 >= 5);
console.log(30 === 30);
console.log(30 >= 30);
console.log(typeof true); // Aqui no caso estamos colocando que o tipo de dado é booleano, ou seja, verdadeiro ou falso.

// Comparações > e > maior ou menor <= >= maior ou igual menor ou igual != diferente === identicos/igual

console.log(5 <= 5); 
console.log( 5 < 5);
console.log(5 != 5);
console.log(5 === 5);

// Idênticos
console.log(9 == "9");
console.log(9 + "9");
console.log(9 === 9);
console.log(9 != "9");
console.log(9 !=="9");