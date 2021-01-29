// function adicionar(...numeros) {
//     console.log(numeros);
// }

// adicionar(5, 6, 7, 8, 9, 10);


function adicionar(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto;
}

let nomes = ['Roberto', 'Reis'];

let outros = adicionar(nomes, 'Joseane', 'Batista');

console.log(outros);