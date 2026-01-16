const pantalla = document.getElementById('pantalla');
const boton = document.getElementById('btn-start');

let cuenta = 5;
let intervalo;

setTimeout(() => {
    boton.disabled = false;
    boton.classList.add('activo');
}, 3000);

function iniciarCuentaAtras() {
    boton.disabled = true;
    boton.classList.remove('activo');

    intervalo = setInterval(() => {
        cuenta--;
        pantalla.textContent = cuenta;

        if (cuenta <= 0) {
            finalizarCuenta();
        }
    }, 1000);
}

function finalizarCuenta() {
    clearInterval(intervalo);
}

boton.addEventListener('click', iniciarCuentaAtras);
