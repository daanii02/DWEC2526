const aguja = document.getElementById('aguja');
const resultadoEl = document.getElementById('resultado');

const colores = ["Rojo", "Amarillo", "Verde", "Azul"];
const partesCuerpo = ["Mano Izquierda", "Mano Derecha", "Pie Izquierdo", "Pie Derecho"];

let rotacionActual = 0;
let puedeGirar = true;

function girarRuleta() {
    if (!puedeGirar) return;
    
    puedeGirar = false;
    resultadoEl.textContent = '';

    const vueltas = 5;
    const gradosExtra = Math.floor(Math.random() * 360);
    rotacionActual += (vueltas * 360) + gradosExtra;

    aguja.style.transform = `rotate(${rotacionActual}deg)`;

    const parteCuerpoElegida = partesCuerpo[Math.floor(Math.random() * partesCuerpo.length)];
    const colorElegido = colores[Math.floor(Math.random() * colores.length)];
    
    setTimeout(() => {
        resultadoEl.textContent = `${parteCuerpoElegida}, ${colorElegido}`;
        puedeGirar = true;
    }, 4000);
}
