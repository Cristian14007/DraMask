

function removeFilter(){
    var filter = document.getElementById('select');
    var filter2 = document.getElementById('select2');

    filter.value = "";
    filter2.value = "";

    cargarObras();
}


document.addEventListener('DOMContentLoaded', function() {
    cargarObras();

    const selectFilter = document.getElementById('select');
    const selectCategory = document.getElementById('select2');

    selectFilter.addEventListener('change', cargarObras);
    selectCategory.addEventListener('change', cargarObras);
  });
  
  function cargarObras() {
    fetch('http://localhost:3000/api/obras')
    .then(response => response.json())
    .then(obras => {
        aplicarFiltros(obras);
    })
    .catch(error => console.error('Error al cargar obras:', error));
}

function aplicarFiltros(obras) {
    const filtro = document.getElementById('select').value;
    const categoria = document.getElementById('select2').value;

    // Filtrar por categoría
    if (categoria) {
        obras = obras.filter(obra => obra.genero === categoria);
    }

    // Ordenar según el filtro seleccionado
    if (filtro) {
        const ordenDescendente = filtro.startsWith('-');
        const propiedad = filtro.replace('-', '');
        obras.sort((a, b) => {
            const valorA = a[propiedad];
            const valorB = b[propiedad];
            if (ordenDescendente) {
                return valorB - valorA;
            }
            return valorA - valorB;
        });
    }

    mostrarObras(obras);
}

function mostrarObras(obras) {
    const contenedor = document.getElementById('obras-container');
    contenedor.innerHTML = ''; // Limpiar obras existentes antes de mostrar nuevas
    obras.forEach(obra => {
        const obraElemento = crearElementoObra(obra);
        contenedor.appendChild(obraElemento);
    });
}

  
  function crearElementoObra(obra) {
    const div = document.createElement('div');
    div.className = 'coolcard coolcard--2';
    div.innerHTML = `
        <img src="${obra.imagen}" class="coolcard__img" alt="${obra.titulo}" />
        <div class="coolcard__body">
            <h1 class="coolcard__title">${obra.titulo}</h1>
            <div class="coolcard__text">
            <a href="Horario.html?id=${obra.id}" class="btn">Comprar entradas</a>
            </div>
        </div>
    `;
    return div;
  }
  