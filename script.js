var inputTexto = document.querySelector(".input-texto");
var mensaje = document.querySelector(".mensaje");

function encriptar(stringMensaje){

    var matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringMensaje = stringMensaje.toLowerCase();

    for(var i = 0; i<matriz.length;i++){
        if(stringMensaje.includes(matriz[i][0])){
            stringMensaje = stringMensaje.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return stringMensaje;
}

function desencriptar(stringMensaje){

    var matriz = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringMensaje = stringMensaje.toLowerCase();

    for(var i = 0; i<matriz.length;i++){
        if(stringMensaje.includes(matriz[i][0])){
            stringMensaje = stringMensaje.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return stringMensaje;
}

function btnEncriptar(){
    const texto = encriptar(inputTexto.value);
    mensaje.value=texto;
    mensaje.style.backgroundImage="none";
    inputTexto.value="";
}

function btnDesencriptar(){
    var texto = desencriptar(inputTexto.value);
    mensaje.value = texto;
    inputTexto.value = "";
}

function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value="";
}