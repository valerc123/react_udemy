// PROMESAS
//resolve: se ejecuta cuando el llamado a la promesa es correcto 
//reject: se ejecuta cuando hubo un error
// const aplicarDescuento = new Promise((resolve, reject) =>{
//     setTimeout( () => {
//         let descuento = false;
//         if(descuento)
//         {
//             resolve('descuento aplicado');
//         }else{
//             reject('sin descuento')
//         }
//     }, 3000 )
// }).then(resultado => {
//     console.log(resultado)
// }).catch(error => {
//     console.log(error);
// })


//PROMESAS CON AJAX

const descargarUsuarios = cantidad => new Promise((resolve, reject) =>{
    
    //pasar la cantidad a la  api

    const api= `https://randomuser.me/api/?page=3&${cantidad}=10&seed=abc`;

    //llamado ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open('GET', api, true); 

    //on load
    xhr.onload = () => {
        if(xhr.status ===200) //200: si el llamado es correcto
        {
            resolve(JSON.parse(xhr.responseText).results)
        } else {
            reject(Error(xhr.statusText));
        }
    }

    //enviar
    xhr.send()

    //opcional (on error)
    xhr.onerror = (error) => reject(error);
});

descargarUsuarios(10)
    .then(
    miembros => console.log(miembros),
    error => console.error(
        new Error('Hubo un error' + error)
    )
)
