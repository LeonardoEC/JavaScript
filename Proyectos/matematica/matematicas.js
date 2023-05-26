// posiciones html
let p1 = document.getElementById("p1")
let sim = document.getElementById("sim")
let p2 = document.getElementById("p2")
let res = document.getElementById("res")

// Logica



numero1 = Math.round(Math.random() * 100)
numero2 = Math.round(Math.random() * 100)

simbolos = ["+","-","*","/"]

console.log(simbolos.length)
console.log(simbolos[Math.floor(Math.random() * simbolos.length)])

simbolosChoice = simbolos[Math.floor(Math.random() * simbolos.length)]

console.log(numero1)
console.log(numero2)


if(simbolosChoice === "+"){
    console.log("suma")
    console.log(numero1, simbolosChoice, numero2)
    let resultado = Number
    if(resultado === numero1 + numero2){
        console.log("Muy bien")
    }
}
else if(simbolosChoice === "-"){
    console.log("resta")
    console.log(numero1, simbolosChoice, numero2)
    let resultado = Number
    if(resultado === numero1 - numero2){
        console.log("Muy bien")
    }
}
else if(simbolosChoice === "*"){
    console.log("multiplicacion")
    console.log(numero1, simbolosChoice, numero2)
    let resultado = Number
    if(resultado === numero1 * numero2){
        console.log("Muy bien")
    }
}
else{
    console.log("divicion")
    console.log(numero1, simbolosChoice, numero2)
    let resultado = Number
    if(resultado === numero1 / numero2){
        console.log("Muy bien")
    }
}


// render
p1.innerHTML= numero1
sim.innerHTML= simbolosChoice
p2.innerHTML= numero2

