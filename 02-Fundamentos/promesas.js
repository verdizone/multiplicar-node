let empleados = [{
    id:1,
    nombre:'Fernando',

},
{
    id:2,
    nombre:'Jeroham',
},
{
    id:3,
    nombre:'Gabriel',

},

];

let salarios = [{
    id:1,
    salario:3000,

},
{
    id:2,
    salario:2000,
},];

let getEmpleado = (id) => {

    return new Promise( (res, rej)=>{

        let empleadoDB = empleados.find(empleado=>empleado.id === id);

        if(!empleadoDB){
            rej(`No existe un empleado con ID:${id}`);
        } else{
            res(empleadoDB)
        }
    });

};

let getSalario = (empleado)=>{
    return new Promise( (res, rej)=>{
        
        let salarioDB = salarios.find(salario=>empleado.id === salario.id);
        if(!salarioDB){
            rej(`No se encontró el salario del usuario: ${empleado.nombre}`);
        }else{
            res({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id,
            });
        }

    });
}

getEmpleado(3).then(empleado=>{
    // console.log('Empleado de DB', empleado);
    getSalario(empleado).then(resp=>{
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)
    }, err=>{
        console.log(err);
    });
},(err)=>{
    console.log(err);
});

