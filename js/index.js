
function validarCorreo(email){
    var expReg= /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
    var div = document.getElementById('error'); //Obteniendo el div con el id = error
    var correo= document.getElementById("email").value; //Obteniendo el valor del correo.
    var ul = document.querySelector("input"); //Obteniendo input.
    var text = document.createTextNode("Ingrese un correo Valido"); //El texto a Mostrar cuando no ingresen un correo correcto.

    if(expReg.test(email)){
        console.log(correo) //Obteniendo el correo Ingresado.
    }else{  
        ul.style.border = "1px solid red"; // Cambiando el color del border del input.
        div.appendChild(text);
    }
}