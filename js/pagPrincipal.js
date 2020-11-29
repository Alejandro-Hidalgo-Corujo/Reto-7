function Mostrar() {
    document.getElementById('bloqueGeneral').style.display = 'block';
    document.getElementById('gracias').style.display = 'none';
}

function Ocultar() {
    document.getElementById('bloqueGeneral').style.display = 'none';
    document.getElementById('gracias').style.display = 'block';
}

function Mostrar_Ocultar() {
    if (document.getElementById('bloqueGeneral').style.display == 'none') {
        Mostrar();
        document.getElementById("boton").textContent = "Ocultar";
    } else {
        Ocultar();
        document.getElementById("boton").textContent = "Mostrar";
    }
}