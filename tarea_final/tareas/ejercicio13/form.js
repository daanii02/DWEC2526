function muestraDatos() {
  
  const ejesY = document.getElementById('ejey').value;
  const ejesX = document.getElementById('ejex').value;
  const escena = document.getElementById('escena');

  
  escena.style.top = ejesY + 'px';
  escena.style.left = ejesX + 'px';
}

