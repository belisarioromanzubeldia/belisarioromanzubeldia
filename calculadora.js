

/*

PROYECTO CALCULADORA, VERSION CON MUCHO CODIGO, ESPECIALMENTE PARA PRACTICAR
EL PENSAMIENTO LOGICO SIN RECURRIR DIRECTAMENTE A FUNCIONES. PREFERI HACER LA VERSION
LARGA PARA TENER QUE REBUSCARMELAS MAS Y EJERCITARME EN EL BROWSING DE INFORMACION.

Belisario Roman Zubeldia. 27/1/2022.

*/

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

let operacion = prompt("Que queres hacer? +,-,/,*");

let numeroUno;
let numeroDos;
let resultado;

if (operacion === "+"){
     numeroUno = prompt("¿Cual es el primer numero a sumar?");
    numeroUno = parseInt(numeroUno);
    numeroDos = prompt("Cual es el segundo numero a sumar?");
    numeroDos = parseInt(numeroDos);
    
        resultado = sumar(numeroUno,numeroDos);

        if (isNaN(resultado)){
            alert("Pone todos numeros boludito"); 
        }
        
        else {
            alert(resultado);
        }
    }


else if (operacion === "-"){
    
     numeroUno = prompt("¿Cual es el primer numero a restar?");
    numeroUno = parseInt(numeroUno);
     numeroDos = prompt("Cual es el segundo numero a restar?");
    numeroDos= parseInt(numeroDos);

    resultado= restar(numeroUno,numeroDos);

    if (isNaN(resultado)){
        alert("Pone todos numeros boludito"); 
    }

    else {
        alert(resultado);
    }

}

else if (operacion === "/"){
     numeroUno = prompt("¿Cual es el primer numero a dividir?");
    numeroUno = parseInt(numeroUno);
     numeroDos = prompt("Cual es el segundo numero a dividir?");
    numeroDos= parseInt(numeroDos);

    resultado= dividir(numeroUno,numeroDos);

    if (isNaN(resultado)){
        alert("Pone todos numeros boludito"); 
    }

    else {
        alert(resultado);
    }
}

else if (operacion === "*"){
     numeroUno = prompt("¿Cual es el primer numero a multiplicar?");
    numeroUno = parseInt(numeroUno);
     numeroDos = prompt("Cual es el segundo numero a multiplicar?");
    numeroDos= parseInt(numeroDos);
    resultado= multiplicar(numeroUno,numeroDos);

    if (isNaN(resultado)){
        alert("Pone todos numeros boludito"); 
    }

    else {
        alert(resultado);
    }
}

else {
    alert("Pone los simbolos que te dije boludito.")
    
}