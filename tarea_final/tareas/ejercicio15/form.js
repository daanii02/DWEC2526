function aleatorio() {
  const elementos = document.querySelectorAll('#escena > div');
  const escena = document.getElementById('escena');
  const anchoContenedor = escena.offsetWidth;
  const altoContenedor = escena.offsetHeight;

  elementos.forEach(elemento => {
    const maxLeft = anchoContenedor - elemento.offsetWidth;
    const maxTop = altoContenedor - elemento.offsetHeight;
    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);
    elemento.style.left = randomLeft + 'px';
    elemento.style.top = randomTop + 'px';
  });
}

function muestraDatos() {
  const ejey = document.getElementById('ejey').value;
  const ejex = document.getElementById('ejex').value;
  console.log("Eje Y:", ejey, "Eje X:", ejex);
}
