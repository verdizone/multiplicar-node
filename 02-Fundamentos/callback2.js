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

// empleados y salarios

let getEmpleado = (id, callback)=>{
    let empleadosDB = empleados.find(empleado=>empleado.id === id);
    if(!empleadosDB){
        callback(`No existe un empleado con el ID: ${id}`);
    }else{
        callback(null, empleadosDB);
    }
};

let getSalario = (empleado, callback) => {
    salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`El usuario ${empleado.nombre} con id: ${empleado.id} no tiene un salario asignado.`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id,
        });
    }
}

getEmpleado(4, (err, empleado)=>{
    if(err){
        return console.log(err);
    }
        // console.log(empleado);
        getSalario(empleado, (err, resp)=>{
            if(err){
                return console.log(err);
            }
            console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
        });
});


