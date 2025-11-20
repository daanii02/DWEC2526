function lanzarDados() {
    const numDadosInput = document.getElementById('numDados');
    const contenedorDados = document.getElementById('contenedorDados');
    const sumaTotalEl = document.getElementById('sumaTotal');
    const cantidadDados = parseInt(numDadosInput.value);

    if (cantidadDados < 1 || cantidadDados > 6) {
        alert("Por favor, introduce un número de dados entre 1 y 6.");
        return;
    }

    contenedorDados.innerHTML = '';
    sumaTotalEl.innerHTML = '';

    let suma = 0;
    
    for (let i = 0; i < cantidadDados; i++) {
        const resultadoDado = Math.floor(Math.random() * 6) + 1;
        suma += resultadoDado;
        contenedorDados.innerHTML += `<span>🎲 ${resultadoDado}</span>`;
    }

    sumaTotalEl.innerHTML = `Suma total: ${suma}`;
}

function limpiarResultados() {
    document.getElementById('contenedorDados').innerHTML = '';
    document.getElementById('sumaTotal').innerHTML = '';
}
