// Metodos en arreglos

const personas = [
    {nombre: "juan", edad: 23, aprendiendo: 'php'},
    {nombre: "ana", edad: 40, aprendiendo: 'js'},
    {nombre: "andres", edad: 35, aprendiendo: 'css'},
]

//mayores de 25 años 
const mayores = personas.filter(x =>{
    return x.edad > 25;
})

console.log(mayores)