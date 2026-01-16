const div_js = document.getElementById('caja');
const resultado = document.getElementById('resultado');

div_js.addEventListener('mouseover', contar); 
let contador = 0;

resultado.innerHTML = `Has pulsado ${contador} veces`;

function contar() {
  contador++;
  resultado.innerHTML = "Has pulsado " + contador + " veces";
  if (contador % 10 === 0) {
    alert("has llegado a" + contador + " clicks");
  }
}

div_js.addEventListener('mouseout', colorAleatorio); 

function colorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  div_js.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"; 
  resultado.innerHTML += "<br>Color cambiado a rgb(" + r + "," + g + "," + b + ")";
}