function sumar(numeroUno,numeroDos){
    return numeroUno + numeroDos;
}

function restar(numeroUno,numeroDos){
    return numeroUno - numeroDos;
}

function dividir(numeroUno,numeroDos){
    return numeroUno / numeroDos;
}

function multiplicar(numeroUno,numeroDos){
    return numeroUno * numeroDos;
}

function math(operacion) {

    numeroUno = prompt("¿Cual es el primer numero a " + operacion + "?");
    numeroUno = parseInt(numeroUno);
    numeroDos = prompt("Cual es el segundo numero a " +  operacion + "?");
    numeroDos = parseInt(numeroDos);
    
        resultado = sumar(numeroUno,numeroDos);

        if (isNaN(resultado)){
            alert("Pone todos numeros boludito"); 
        }
        else {
            alert(resultado);
        }
    }


let operacion = prompt("Que queres hacer? +,-,/,*");

let numeroUno;
let numeroDos;
let resultado;

if (operacion === "+"){
math("sumar");
}

else if (operacion === "-"){
math("restar");
 }

 else if (operacion === "/") { 
   math("dividir");
 }

 else if (operacion === "*"){
     math("multiplicar");
}

else {
    alert("Pone todos numeros boludito");
}