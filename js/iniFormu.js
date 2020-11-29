function validar() {
    var nick, nombre, apellidos, correo, constraseña1, telefono, validado, mensaje;
    //Recuperamos los valores detodos los campos del formulario
    nick = document.getElementById("nick").value;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    constraseña1 = document.getElementById("contraseña1").value;
    constraseña2 = document.getElementById("contraseña2").value;
    telefono = document.getElementById("telefono").value;
    fecha = document.getElementById("fecha").value;
    //Guardamos los mensajes de error
    mensajeError = "Errores: \n";
    //Guardamos los mensajes de los campos vacios
    mensaje = "Introduzca: \n";
    //Variable con nos confirmara si se ha validado correctamente
    validado = true;
    //Validación del nick
    if (nick === "") {
        mensaje = mensaje.concat("- Nick \n");
        validado = false;
    }
    //Validación del nombre
    if (nombre === "") {
        mensaje = mensaje.concat("- Nombre \n");
        validado = false;
    }
    //Validación de los apellidos
    if (apellidos === "") {
        mensaje = mensaje.concat("- Apellidos \n");
        validado = false;
    }
    //Validación del correo
    if (correo === "") {
        mensaje = mensaje.concat("- Correo \n");
        validado = false;
    } else if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo))) {
        mensajeError = mensajeError.concat("- El correo insertado no es valido \n");
        validado = false;
    }
    //Validación de la contraseña1
    if (constraseña1 === "") {
        mensaje = mensaje.concat("- Constraseña1 \n");
        validado = false;
    }
    //Validación de la contraseña2 y comprobación de que sea igual a la contraseña1
    if (constraseña2 === "") {
        mensaje = mensaje.concat("- Contraseña2 \n");
        validado = false;
    } else if (constraseña1 != constraseña2) {
        mensajeError = mensajeError.concat("- Las contraseñas no coinciden \n");
        validado = false;
    }
    //Validación del telefono
    if (telefono === "") {
        mensaje = mensaje.concat("- Telefono \n");
        validado = false;
    } else if (!(/^\d{9}$/.test(telefono))) {
        mensajeError = mensajeError.concat("- El telefono insertado no es valido \n");
        validado = false;
    }
    //Validación de la fecha
    if (fecha === "") {
        mensaje = mensaje.concat("- Fecha \n");
        validado = false;
    }
    //Asignamos los mensajes de error al mensaje general
    if (mensajeError != "Errores: \n") {
        mensaje = mensaje.concat("\n" + mensajeError);
    }
    //Sacamos el mensaje general si algun campo falla
    if (validado === false) {
        alert(mensaje);
    }
    //Devulve si esta correctamente validado o no
    return validado;
}
//Desde la pag inicioSesion vamos a la pag principal
function iniciarSesion() {
    window.open("pagPrincipal.html");
}
//Desde la pag formulario vamos a la pag inicioSesion
function validacionCompletada() {
    if (validar() === true) {
        window.open("inicio.html");
    }
}