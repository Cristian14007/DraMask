
document.addEventListener('DOMContentLoaded', function() {
    cargarEstrenos();
  });
  
  function cargarEstrenos() {
    fetch('http://localhost:3000/api/estrenos')
    .then(response => response.json())
    .then(estrenos => {
        const contenedor = document.getElementById('estrenos-container');
        estrenos.forEach(estreno => {
            const estrenoElemento = crearElementoEstreno(estreno);
            contenedor.appendChild(estrenoElemento);
        });
    })
    .catch(error => console.error('Error al cargar estrenos:', error));
  }
  
  function crearElementoEstreno(estreno) {
    const div = document.createElement('div');
    div.className = 'coolcard coolcard--2';
    div.innerHTML = `
        <img src="${estreno.imagen}" class="coolcard__img" alt="${estreno.titulo}" />
        <div class="coolcard__body">
            <h1 class="coolcard__title">${estreno.titulo}</h1>
            <div class="coolcard__text">
            <a  class="btn">Proximamente</a>
            </div>
        </div>
    `;
    return div;
  }