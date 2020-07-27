const fs = require('fs');
const colors = require('colors');
// const fs = require ('express');
// const fs = require ('./fs');
let listarTabla = (base, limite = 10) => {

    console.log('=============================='.green);
    console.log(`=======Tabla de ${base}=======`.red);
    console.log('=============================='.yellow);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}\n`);

    }
}

let crearArchivo = (base, limite = 10)=>{
    return new Promise( (res, rej)=>{


        if(!Number(base)){
            rej(`El valor introducido: ${ base } NO es un número.`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += (`${base} * ${index} = ${base * index}\n`);

        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err){
                
                rej (err);
            } 
            else{
                res(`tabla-${base}.txt`);
            }
            // console.log(`¡El archivo tabla-${base}.txt ha sido creado!`);
        });

    });
};


module.exports = {
    crearArchivo,
    listarTabla,
}

