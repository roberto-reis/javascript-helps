


/* function requisitar() {

    const url = "https://alunos.b7web.com.br/api/ping";
    const params= {
        method:'POST',
        body:JSON.stringify({
            nome:'José Roberto',
            idade: 33
        })
    };

    fetch(url, params)
        .then( (r)=>r.json() )
        .then( (json)=>{
            console.log(json)
        });

        console.log("Alguma Coisa");

} */


async function requisitar2() {
    const url = "https://alunos.b7web.com.br/api/ping";
    const params= {
        method:'POST',
        body:JSON.stringify({
            nome:'José Roberto',
            idade: 33
        })
    };

    const r = await fetch(url, params);
    const json = await r.json();

    console.log(json);

    console.log("Alguma Coisa");

}

requisitar2();
