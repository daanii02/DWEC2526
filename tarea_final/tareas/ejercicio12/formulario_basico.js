function muestraDatos() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const aficiones = document.getElementById('aficiones').value;
    const color = document.getElementById('color').value;
    const tematica = document.getElementById('tematica').value;

    let imagen = "";
    switch(tematica) {
        case "tecnologia":
            imagen = '<img id="imagen-tema" src="tecnologia.png">';
            break;
        case "deporte":
            imagen = '<img id="imagen-tema" src="deporte.jpg" >';
            break;
        case "carreras":
            imagen = '<img id="imagen-tema" src="carreras.png">';
            break;
        case "espacio":
            imagen = '<img id="imagen-tema" src="espacio.png" >';
            break;
        case "cine":
            imagen = '<img id="imagen-tema" src="cineyseries.jpg">';
            break;
        default:
            imagen = "";
    }

    document.getElementById('resultado').style.backgroundColor = color;
    document.getElementById('resultado').innerHTML = 
    `<b>Nombre:</b> ${nombre} ${apellidos}<br>
        <b>Correo:</b> ${correo}<br>          
        <b>Aficiones:</b> ${aficiones}<br>
          ${imagen}`;
}
