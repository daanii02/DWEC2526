function edad() {
    var asdf = document.getElementById("uno");
    asdf.style.backgroundColor = "blue";

    var edad = prompt("dime tu edad");
    console.log(edad);

    if (edad >= 18) {
        asdf.style.backgroundImage = "url('adulto.jpg')";
        asdf.style.backgroundSize = "cover";
    } else if (edad > 12) {
        asdf.style.backgroundImage = "url('adolescente.jpg')";
        asdf.style.backgroundSize = "cover";
    } else {
        asdf.style.backgroundImage = "url('niños.jpg')";
        asdf.style.backgroundSize = "cover";
    }
}
