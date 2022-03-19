let nombres=['york','samantha','pedro','luz ma']
let cursos=['avanzada','nuevas','moviles']

//numeros aleatorios donde su limite esta dado por la longitud

let numero=Math.floor(Math.random()*nombres.length)
let numero2=Math.floor(Math.random()*cursos.length)

let estudiantes=[]
let estudiante=[]

for (let i=0;i <50; i++){
    //llenando un objeto de estudiantes

estudiante.nombre=(nombres[Math.floor(Math.random()*nombres.length)])
estudiante.curso=(cursos[Math.floor(Math.random()*cursos.length)])
estudiantes.push(estudiante)
}

console.log (estudiantes)
