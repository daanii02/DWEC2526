// ===== ELEMENTOS DEL DOM =====
const nombreHeroe = document.getElementById("nombreHeroe");
const nombreVillano = document.getElementById("nombreVillano");
const vidaHeroe = document.getElementById("vidaHeroe");
const vidaVillano = document.getElementById("vidaVillano");
const imgHeroe = document.getElementById("imgHeroe");
const imgVillano = document.getElementById("imgVillano");
const botonBasico = document.getElementById("botonBasico");
const botonEspecial = document.getElementById("botonEspecial");
const botonEsquivar = document.getElementById("botonEsquivar");
const logBody = document.getElementById("logBody");


// ===== CLASE PERSONAJE =====
class Personaje {
    constructor(nombre, img) {
        this.nombre = nombre;
        this.vida = 100;
        this.contador = 0;
        this.especial = false;
        this.esquivar = false;
        this.img = img;
    }

    recibirDanio(dano) {
        this.vida -= dano;
        if (this.vida < 0) this.vida = 0;
    }

    sumarAtaque() {
        this.contador++;
        if (this.contador >= 3) this.especial = true;
    }

    reiniciarEspecial() {
        this.contador = 0;
        this.especial = false;
    }
}


// ===== PERSONAJES =====
const heroes = [
    new Personaje("SPIDERMAN", "spiderman.png"),
    new Personaje("SONIC", "ssonic.png"),
    new Personaje("PIKACHU", "pikachu.png")
];

const villanos = [
    new Personaje("VENOM", "venom.png"),
    new Personaje("HULK", "hulk.png"),
    new Personaje("Dr. Eggman", "sonic.png")
];


// ===== SELECCIÓN ALEATORIA =====
let heroeActual = heroes[Math.floor(Math.random() * heroes.length)];
let villanoActual = villanos[Math.floor(Math.random() * villanos.length)];


// ===== MOSTRAR DATOS =====
nombreHeroe.innerHTML = heroeActual.nombre;
nombreVillano.innerHTML = villanoActual.nombre;
vidaHeroe.innerHTML = heroeActual.vida;
vidaVillano.innerHTML = villanoActual.vida;
imgHeroe.src = heroeActual.img;
imgVillano.src = villanoActual.img;

logBody.innerHTML = `¡Combate iniciado! ${heroeActual.nombre} vs ${villanoActual.nombre}<br>`;


// ===== ACCIONES DEL HÉROE =====
function ataqueBasico() {
    villanoActual.recibirDanio(10);
    vidaVillano.innerHTML = villanoActual.vida;
    logBody.innerHTML += `${heroeActual.nombre} ataca<br>`;

    heroeActual.sumarAtaque();
    turnoVillano();
    revisarFin();
}

function ataqueEspecial() {
    if (!heroeActual.especial) {
        logBody.innerHTML += "Ataque especial no disponible<br>";
        return;
    }

    villanoActual.recibirDanio(30);
    vidaVillano.innerHTML = villanoActual.vida;
    logBody.innerHTML += `${heroeActual.nombre} usa ATAQUE ESPECIAL<br>`;

    heroeActual.reiniciarEspecial();
    turnoVillano();
    revisarFin();
}

function esquivar() {
    heroeActual.esquivar = true;
    logBody.innerHTML += `${heroeActual.nombre} se prepara para esquivar<br>`;
    turnoVillano();
}


// ===== TURNO DEL VILLANO =====
function turnoVillano() {
    if (heroeActual.vida <= 0 || villanoActual.vida <= 0) return;

    const dano = Math.random() < 0.7 ? 10 : 30;

    if (heroeActual.esquivar) {
        logBody.innerHTML += `${villanoActual.nombre} falla el ataque<br>`;
    } else {
        heroeActual.recibirDanio(dano);
        vidaHeroe.innerHTML = heroeActual.vida;
        logBody.innerHTML += `${villanoActual.nombre} ataca (${dano} daño)<br>`;
    }

    heroeActual.esquivar = false;
}


// ===== FIN DEL JUEGO =====
function revisarFin() {
    if (heroeActual.vida <= 0 || villanoActual.vida <= 0) {
        logBody.innerHTML += "¡Combate terminado!<br>";
        botonBasico.disabled = true;
        botonEspecial.disabled = true;
        botonEsquivar.disabled = true;
    }
}


// ===== EVENTOS =====
botonBasico.addEventListener("click", ataqueBasico);
botonEspecial.addEventListener("click", ataqueEspecial);
botonEsquivar.addEventListener("click", esquivar);