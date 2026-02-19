let compra = ["Leche", "Huevos", "Pan", "Arroz"];

function imprimir() {

  let texto = "";

  for (let i = 0; i < compra.length; i++) {
    texto = texto + compra[i] + "<br>";
  }

  document.getElementById("imprimir").innerHTML = texto;
}

function añadir() {
  let texto = document.getElementById("texto").value;
  compra.push(texto);
  imprimir();
}

function quitar() {
  compra.pop();
  imprimir();
}

function añadirPrincipio() {
  let texto = document.getElementById("texto").value;
  compra.unshift(texto);
  imprimir();
}

function quitarPrincipio() {
  compra.shift();
  imprimir();
}

function ordenar() {
  compra.sort();
  imprimir();
}

imprimir();
