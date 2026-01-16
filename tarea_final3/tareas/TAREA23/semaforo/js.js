const rojo = document.getElementById("rojo");
const ambar = document.getElementById("ambar");
const verde = document.getElementById("verde");

const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

let color = "rojo";
let timerId = null;

function apagarTodo() {
  rojo.style.backgroundColor = "#ff00002a";
  ambar.style.backgroundColor = "#ffcc003c";
  verde.style.backgroundColor = "#0fba0040";
}

function encenderActual() {
  apagarTodo();
  if (color === "rojo") rojo.style.backgroundColor = "red";
  else if (color === "verde") verde.style.backgroundColor = "limegreen";
  else ambar.style.backgroundColor = "orange";
}

function paso() {
  encenderActual();

  let tiempo = 2000;
  if (color === "ambar") tiempo = 1000;

  timerId = setTimeout(() => {   
    if (color === "rojo") color = "verde";
    else if (color === "verde") color = "ambar";
    else color = "rojo";

    paso(); 
  }, tiempo);
}

function play() {
  if (timerId !== null) return;
  paso();
}

function pause() {
  if (timerId === null) return;
  clearTimeout(timerId);       
  timerId = null;
}

function reset() {
  pause();
  color = "rojo";
  encenderActual();
}

playBtn.onclick = play;
pauseBtn.onclick = pause;
resetBtn.onclick = reset;

encenderActual();
