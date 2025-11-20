const n1 = document.getElementById('op1');
const n2 = document.getElementById('op2');
const res = document.getElementById('resultado');
const logBox = document.getElementById('log');
const logList = document.getElementById('contenidoLog');
const resBox = document.getElementById('resultadoBox');

const bSuma  = document.getElementById('btnSuma');
const bResta = document.getElementById('btnResta');
const bMulti = document.getElementById('btnMulti');
const bDiv   = document.getElementById('btnDiv');
const bBorrar= document.getElementById('btnLimpiar');

const VERDE = '#008200';

function color() {
  const n = Math.floor(Math.random() * 16777215);
  let hex = n.toString(16);
  while (hex.length < 6) hex = '0' + hex;
  return '#' + hex;
}

function num(input) {
  const texto = input.value.trim();
  return texto === '' ? 0 : parseFloat(texto);
}

function esPar(x) {
  if (typeof x !== 'number' || !Number.isFinite(x)) return false;
  const entero = Math.trunc(x);
  return entero % 2 === 0;
}

function pintar(total) {
  res.value = total;
  if (resBox) {
    resBox.style.backgroundColor = esPar(total) ? color() : VERDE;
  }
}

function anotar(texto, clase) {
  logList.innerHTML += `<span class="${clase}">${texto}</span><br>`;
  logBox.scrollTop = logBox.scrollHeight;
}

function sumar() {
  const a = num(n1), b = num(n2);
  const total = a + b;
  pintar(total);
  anotar(`<span style="color: red;">:Operación: ${a} + ${b} = ${total}</span>`, 'log-suma');
}

function restar() {
  const a = num(n1), b = num(n2);
  const total = a - b;
  pintar(total);
  anotar(`<span style="color: blue;">:Operación: ${a} - ${b} = ${total}</span>`, 'log-resta');
}

function multiplicar() {
  const a = num(n1), b = num(n2);
  const total = a * b;
  pintar(total);
  anotar(`<span style="color: green;">:Operación: ${a} × ${b} = ${total}`, 'log-multi');
}

function dividir() {
  const a = num(n1), b = num(n2);
  if (b === 0) {
    res.value = 'Error';
    if (resBox) resBox.style.backgroundColor = VERDE;
    anotar(`<span style="color: violet;">:Operación: ${a} ÷ ${b} = Error`, 'log-div');
    return;
  }
  const total = a / b;
  pintar(total);
  anotar(`<span style="color: violet;">:Operación: ${a} ÷ ${b} = ${total}`, 'log-div');
}

bSuma.onclick   = sumar;
bResta.onclick  = restar;
bMulti.onclick  = multiplicar;
bDiv.onclick    = dividir;
bBorrar.onclick = () => { logList.innerHTML = ''; };
