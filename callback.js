//Declarando la funcion principal
function principal(callback){
    setTimeout(()=>{
        //definiendo el proceso de la funcion principal
        console.log("soy el proceso principal")
        //llamando al callback
        callback()
    },2000)
}
//llamando la funcion principal
principal(()=>{
    console.log("soy el callback")
})