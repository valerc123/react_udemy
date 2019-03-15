// Metodos en arreglos (arrays)

const personas = [
    {nombre: "juan", edad: 23, aprendiendo: 'php'},
    {nombre: "ana", edad: 40, aprendiendo: 'js'},
    {nombre: "andres", edad: 35, aprendiendo: 'css'},
]

//mayores de 25 años 
const mayores = personas.filter(x =>{
    return x.edad > 25;
})
//console.log(mayores)

//encontrar a juan 
const juan = personas.find(x => {
    return x.nombre === 'juan';
})
//(console.log(juan)

// suma de edades
let total = personas.reduce((edadTotal, age) => {
    return edadTotal + age.edad;
}, 0);
//console.log(total)

//promedio de edades
//console.log((total/ personas.length).toFixed(0))