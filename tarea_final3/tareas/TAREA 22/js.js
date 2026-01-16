const folio = document.getElementById('folio');
const borrarBtn = document.getElementById('borrar');

document.addEventListener('keydown', (event) => {
  folio.innerHTML += event.key;
});

borrarBtn.addEventListener('click', () => {
  folio.innerHTML = '';
});
