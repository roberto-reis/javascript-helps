// let numeros = [1, 2, 3, 4];

// let outros = [...numeros, 5, 6, 7, 8];

// console.log(outros);


// let info = {
//     nome: 'José Roberto',
//     sobrenome: 'Reis',
//     idade: 33
// };

// let novaInfo = {
//     ...info,
//     cidade: 'Rio de Janeiro',
//     estado: 'RJ',
//     pais: 'Brasil'
// };
// console.log(novaInfo);

function adcionarInfor(info) {
    let novasInfo = {
        ...info,
        status:0,
        token:'rthfus445jmdffjgjrcfgbfbxzbdf',
        data_cadastro:'28/01/2021'
    };

    return novasInfo
}

console.log(adcionarInfor({nome:'Roberto', sobrenome:'Reis'}));