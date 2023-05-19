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
}
else if(simbolosChoice === "-"){
    console.log("resta")
    console.log(numero1, simbolosChoice, numero2)
}
else if(simbolosChoice === "*"){
    console.log("multiplicacion")
    console.log(numero1, simbolosChoice, numero2)
}
else{
    console.log("divicion")
    console.log(numero1, simbolosChoice, numero2)
}