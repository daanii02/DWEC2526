const numeroInput = document.getElementById('numeroInput');
const generarBtn = document.getElementById('generarBtn');
const resultadoDiv = document.getElementById('resultadoDiv');

generarBtn.addEventListener('click', () => {
    
    resultadoDiv.innerHTML = '';
    console.clear();

    const cantidad = parseInt(numeroInput.value);

    for (let i = 0; i < cantidad; i++) {
        
        const numeroAleatorio = Math.floor(Math.random() * 101);

        console.log(`Número aleatorio ${i + 1}: ${numeroAleatorio}`);

        const nuevoParrafo = document.createElement('p');
        nuevoParrafo.textContent = `Número ${i + 1}: ${numeroAleatorio}`;
        
        resultadoDiv.appendChild(nuevoParrafo);
    }
});
