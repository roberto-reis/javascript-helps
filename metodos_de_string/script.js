let nome = 'José Roberto Batista';
let telefone = '5456';

// Retorna o número de caractere de código presentes na string
// let resultado = nome.length;

// Retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
// let resultado = nome.indexOf('Reis');

// Retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim
// let resultado = nome.slice(0, 8);

// Retorna a parte da string entre os índices inicial e final, ou até o final da string.
// let resultado = nome.substring(0, 8);

// Retorna uma parte da string, começando no índice especificado e estendendo-se por um determinado número de caracteres posteriormente.
// let resultado = nome.substr(0, 12);

// Retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres).
// let resultado = nome.replace('Reis', 'Batista');

// Remove os espaços em branco (whitespaces) do início e/ou fim de um texto.
// let resultado = nome.trim();

// Retorna o caractere especificado a partir de uma string.
// let resultado = nome.charAt(0);

// Divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
// let resultado = nome.split(' ');

// Preenche a string original com um determinado caractere. O preenchimento é aplicado a partir do final.
// let resultado = telefone.padEnd(9, '*');

// O preenchimento é aplicado antes do primeiro caractere da string original
let resultado = telefone.padStart(9, '*');


console.log("Resultado: ", resultado);

