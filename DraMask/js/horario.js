document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const obraId = urlParams.get('id');
    
    if (obraId) {
        fetch(`http://localhost:3000/api/obras/${obraId}`)
        .then(response => response.json())
        .then(obra => {
            //document.querySelector('#about .heading span').textContent = obra.titulo;
            document.querySelector('#about .image img').src = obra.imagen;
            document.getElementById('obra-genero').textContent = obra.genero;
            document.getElementById('obra-descripcion').textContent = obra.descripcion;
            document.getElementById('obra-duracion').textContent = obra.duracion;
            document.getElementById('obra-director').textContent = obra.director;
            document.getElementById('obra-interpretes').textContent = obra.interpretes;
            document.getElementById('obra-fecha').textContent = obra.fecha;
            document.getElementById('obra-hora').textContent = obra.hora;
            document.getElementById('obra-fecha1').textContent = obra.fecha1;
            document.getElementById('obra-hora1').textContent = obra.hora1;
            document.getElementById('obra-fecha2').textContent = obra.fecha2;
            document.getElementById('obra-hora2').textContent = obra.hora2;
            document.getElementById('reserva-btn').href = `Reserva.html?id=${obraId}`;
        })
        .catch(error => console.error('Error al cargar obra:', error));
    }
});
