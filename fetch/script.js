/* fetch('https://alunos.b7web.com.br/api/ping')
.then( (r) => r.json())
.then( (json)=>{
    console.log( json )
} ); */

const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
    method: "GET",
    body:JSON.stringify({
        nome:'José Roberto',
        idade:33
    })
};

fetch(url, params)
    .then( (r) => r.json())
    .then( (json)=>{
        console.log( json )
    } );