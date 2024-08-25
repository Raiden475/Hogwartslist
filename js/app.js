const url = '/js/data.json';

function cargarEstudiante() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const estudiantes = data.estudiantes;
      const idInput = document.getElementById('id-input');
      const resultsContainer = document.querySelector('.results-container');
      
      const id = parseInt(idInput.value);
      resultsContainer.innerHTML = ''; // Limpiar resultados previos

      const estudiante = estudiantes.find(est => est.id === id);

      if (estudiante) {
        resultsContainer.innerHTML = `
          <p class="result nombre-result">Nombre: ${estudiante.nombre}</p>
          <p class="result casa-result">Casa: ${estudiante.casa}</p>
        `;
      } else if (idInput.value.trim() !== '') {
        resultsContainer.innerHTML = `<p>No se encontró ningún estudiante con el ID ${id}.</p>`;
      }
    })
    .catch(error => console.error('Error al cargar los datos:', error));
}

