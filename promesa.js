//Declarando la funcion principal
function principal(){

    // Se instancia un objeto de la clase primera de JS

    let promesa=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //definiendo el proceso de la funcion principal
            console.log("soy el proceso principal")
            //resuelvo o rechazo 
            resolve("el proceso del callbac")
        },2000)
    })
    return promesa
}
    
        
principal()
.then((respuesta)=>{
    console.log(respuesta)
})
