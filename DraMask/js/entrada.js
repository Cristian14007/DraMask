document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const obraId = urlParams.get('id');
    
    if (obraId) {
        fetch(`http://localhost:3000/api/obras/${obraId}`)
        .then(response => response.json())
        .then(obra => {
            //document.querySelector('#about .heading span').textContent = obra.titulo;
            document.querySelector('#about .image img').src = obra.imagen;
            document.getElementById('obra-fecha').textContent = obra.fecha;
            document.getElementById('obra-sala').textContent = obra.sala;
            //document.getElementById('obra-importe').textContent = obra.precio;
            actualizarPrecio(obra);
            document.getElementById('obra-titulo').textContent = obra.titulo;
           
        })
        .catch(error => console.error('Error al cargar obra:', error));
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    const totalSeats = localStorage.getItem('totalSeats');

    // Obtener el elemento para mostrar los asientos seleccionados
    const seatsElement = document.getElementById('obra-asientos');

    // Verificar si hay asientos seleccionados y actualizar el elemento
    if (selectedSeats && selectedSeats.length > 0) {
        seatsElement.textContent = `${selectedSeats.join(', ')}`;
    } else {
        seatsElement.textContent = 'No hay asientos seleccionados';
    }
});

function actualizarPrecio(obra) {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    const totalSeats = selectedSeats ? selectedSeats.length : 0;

    // Calcular el precio total
    const precioTotal = obra.precio * totalSeats;
    
    // Actualizar el elemento con el precio total
    document.getElementById('obra-importe').textContent = `${precioTotal}€`;
}