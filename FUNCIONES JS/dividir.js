let numeroA =parseInt(prompt("Ingrese un numero:"));
let numeroB =parseInt(prompt("Ingrese otro numero:"));
let proceso = dividir (numeroA,numeroB);


function dividir (a,b) {
    return a/b;
    
}

alert("el resultado de dividir es : " + proceso)