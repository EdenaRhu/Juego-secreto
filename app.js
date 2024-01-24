let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else{
        //El usuario no acerto.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', `El número secreto es menor a ${numeroDeUsuario}`);
        }else{
            asignarTextoElemento('p',`El número secreto es mayor a ${numeroDeUsuario}`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
    
}

function generarNumeroSecreto(){
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
        return;
    }

    let numeroGenerado = null;
    /*Una vez que se genera un número secreto único que no está en la lista, 
    se agrega a la lista listaNumerosSorteados y se sale del bucle. En este punto, 
    la función devuelve el número secreto generado.*/
    do{
        numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
    }while(listaNumerosSorteados.includes(numeroGenerado));

    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;

    /*
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }*/
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);

    
}

condicionesIniciales();

