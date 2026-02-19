const tareas = [];

const cajaTarea = document.getElementById("tarea_txt");
const cajaDescripcion = document.getElementById("descripcion_txt");
const listaTareas = document.getElementById("ListaTareas");
const botonAgregar = document.getElementById("botonAgregar");
const botonBorrarTodo = document.getElementById("botonBorrarTodo");

botonAgregar.addEventListener("click", () => {
  const texto = cajaTarea.value;
  const descripcion = cajaDescripcion.value;
  const creada = new Date().toLocaleString();

  tareas.push(texto, descripcion, creada);

  const li = document.createElement("li");
  listaTareas.appendChild(li);

  const p = document.createElement("p");
  p.innerHTML =
    "Tarea: " + texto + "<br>" +
    "Descripción: " + descripcion + "<br>" +
    "Creada: " + creada;
  li.appendChild(p);

  const botonEliminar = document.createElement("button");
  botonEliminar.className = "botoneliminar";
  botonEliminar.innerHTML = "";
  li.appendChild(botonEliminar);

  botonEliminar.addEventListener("click", () => {
    listaTareas.removeChild(li);
  });

  cajaTarea.value = "";
  cajaDescripcion.value = "";
});

botonBorrarTodo.addEventListener("click", () => {
  tareas.length = 0;
  listaTareas.innerHTML = "";
});
