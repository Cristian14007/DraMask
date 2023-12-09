document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const obraId = urlParams.get('id');
  
  if (obraId) {
      fetch(`http://localhost:3000/api/obras/${obraId}`)
      .then(response => response.json())
      .then(obra => {
          //document.querySelector('#about .heading span').textContent = obra.titulo;
          document.querySelector('#about .image img').src = obra.imagen;
          document.getElementById('obra-titulo').textContent = obra.titulo;
          document.getElementById('obra-fecha').textContent = obra.fecha;
          document.getElementById('obra-sala').textContent = obra.sala;
          document.getElementById('movieName').textContent = obra.titulo;
          document.getElementById('moviePrice').textContent = obra.precio;
          document.getElementById('dateOn').textContent = obra.fecha;
          document.getElementById('proceedBtn').href = `Compra.html?id=${obraId}`;
      })
      .catch(error => console.error('Error al cargar obra:', error));
  }
});

/*********Obtener asientos ocupados por obra */
//var obraId = urlParams.get('id');
const butacas = [
  {
    id: 0,
    selectedSeat: "1"
  },
  {
    id: 1,
    selectedSeat: "1,2,3,4"
  },
  {
    id: 2,
    selectedSeat: "1,5,6"
  },
  {
    id: 3,
    selectedSeat: "1,2"
  },
  {
    id: 4,
    selectedSeat: "1,2"
  },
  {
    id: 5,
    selectedSeat: "1,2"
  },
  {
    id: 6,
    selectedSeat: "1,2"
  },
  {
    id: 7,
    selectedSeat: "1,2"
  },
  {
    id: 8,
    selectedSeat: "1,2"
  },
  {
    id: 9,
    selectedSeat: "1,2"
  }

];

const urlParams = new URLSearchParams(window.location.search);
  const obraId = urlParams.get('id');

// Obtén el elemento que contiene los asientos
var seatContainer = document.getElementById('seatCont');

// Separa los asientos seleccionados en un array
var asientosSeleccionados = butacas[obraId].selectedSeat.split(',');

// Itera sobre los asientos y cambia la clase según el id
asientosSeleccionados.forEach(function (idAsiento) {
  var asiento = document.getElementById(idAsiento);
  if (asiento) {
    // Cambia la clase del asiento a 'occupied'
    asiento.classList.add('occupied');
  }
});
/* const butacas = [
  {
    id: 0,
    selectedSeat: "1"
  },
  {
    id: 1,
    selectedSeat: "1,2,3,4"
  },
  {
    id: 2,
    selectedSeat: "1,5,6"
  },
  {
    id: 3,
    selectedSeat: "1,2"
  },
  {
    id: 4,
    selectedSeat: "1,2"
  },
  {
    id: 5,
    selectedSeat: "1,2"
  },
  {
    id: 6,
    selectedSeat: "1,2"
  },
  {
    id: 7,
    selectedSeat: "1,2"
  },
  {
    id: 8,
    selectedSeat: "1,2"
  },
  {
    id: 9,
    selectedSeat: "1,2"
  }

];
document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const obraId = urlParams.get('id');

  if (obraId) {
    fetch(`http://localhost:3000/api/obras/${obraId}`)
      .then(response => response.json())
      .then(obra => {
        //document.querySelector('#about .heading span').textContent = obra.titulo;
        var seatContainer = document.getElementById('seatCont');

// Separa los asientos seleccionados en un array
var asientosSeleccionados = butacas[obraId].selectedSeat.split(',');

// Itera sobre los asientos y cambia la clase según el id
asientosSeleccionados.forEach(function (idAsiento) {
  var asiento = document.getElementById(idAsiento);
  if (asiento) {
    // Cambia la clase del asiento a 'occupied'
    asiento.classList.add('occupied');
  }
});
      })
      .catch(error => console.error('Error al cargar obra:', error));
  }
}); */
/*********Obtener asientos ocupados por obra */

//asientos
const moviesList = [
    { movieName: "Hamlet", price: 35 },
    /*{ movieName: "Master", price: 5 },
    { movieName: "Justice League", price: 4 },*/
  ];
  
 // const selectMovieEl = document.getElementById("selectMovie");
  
  const allSeatCont = document.querySelectorAll("#seatCont .seat");
  
  const selectedSeatsHolderEl = document.getElementById("selectedSeatsHolder");
  
  const moviePriceEl = document.getElementById("moviePrice");
  
  const cancelBtnEL = document.getElementById("cancelBtn");
  
 //const proceedBtnEl = document.getElementById("proceedBtn");
  
 /* moviesList.forEach((movie) => {
    const optionEl = document.createElement("option");
    optionEl.innerHTML = `${movie.movieName} $${movie.price}`;
    selectMovieEl.appendChild(optionEl);
  });*/
  
  let moviePrice = 35;
  let currentMovieName = `Hamlet`;
  
  /*selectMovieEl.addEventListener("input", (e) => {
    let movieName = e.target.value.split("");
    let dollarIndex = movieName.indexOf("$");
    let movie = movieName.splice(0, dollarIndex - 1).join("");
    currentMovieName = movie;
    moviePrice = JSON.parse(movieName.splice(2, dollarIndex).join(""));
  
    updatMovieName(movie, moviePrice);
    updatePrice(moviePrice, takenSeats.length);
  });*/
  
  let initialSeatValue = 0;
  allSeatCont.forEach((seat) => {
    const attr = document.createAttribute("data-seatid");
    attr.value = ++initialSeatValue;
    seat.setAttributeNode(attr);
  });
  
  const seatContEl = document.querySelectorAll("#seatCont .seat:not(.occupied)");
  
  let takenSeats = [];
  
  seatContEl.forEach((seat) => {
    seat.addEventListener("click", (e) => {
      let isSelected = seat.classList.contains("selected");
  
      let seatId = JSON.parse(seat.dataset.seatid);
  
      if (!isSelected) {
        seat.classList.add("selected");
        takenSeats.push(seatId);
        takenSeats = [...new Set(takenSeats)];
      } else if (isSelected) {
        seat.classList.remove("selected");
  
        takenSeats = takenSeats.filter((seat) => {
          if (seat !== seatId) {
            return seat;
          }
        });
      }
      updateSeats();
      updatePrice(moviePrice, takenSeats.length);
    });
  });
  
  function updateSeats() {
    selectedSeatsHolderEl.innerHTML = ``;
  
    takenSeats.forEach((seat) => {
      const seatHolder = document.createElement("div");
      seatHolder.classList.add("selectedSeat");
      selectedSeatsHolderEl.appendChild(seatHolder);
  
      seatHolder.innerHTML = seat;
    });
  
    if (!takenSeats.length) {
      const spanEl = document.createElement("span");
      spanEl.classList.add("noSelected");
      spanEl.innerHTML = `NO SEAT SELECTED`;
      selectedSeatsHolderEl.appendChild(spanEl);
    }
  
    seatCount();
  }
  
  function seatCount() {
    const numberOfSeatEl = document.getElementById("numberOfSeat");
    numberOfSeatEl.innerHTML = takenSeats.length;
  }
  
  function updatMovieName(movieName, price) {
    const movieNameEl = document.getElementById("movieName");
    const moviePriceEl = document.getElementById("moviePrice");
    movieNameEl.innerHTML = movieName;
    moviePriceEl.innerHTML = `$ ${price}`;
  }
  
  function updatePrice(price, seats) {
    const totalPriceEl = document.getElementById("totalPrice");
    let total = seats * price;
    totalPriceEl.innerHTML = `$ ${total}`;
  }
  
  cancelBtn.addEventListener("click", (e) => {
    cancelSeats();
  });
  
  function cancelSeats() {
    takenSeats = [];
    seatContEl.forEach((seat) => {
      seat.classList.remove("selected");
    });
    updatePrice(0, 0);
    updateSeats();
  }
  
  function successModal(movieNameIn, totalPrice, successTrue) {
    const bodyEl = document.querySelector("body");
  
    const sectionEl = document.getElementById("section");
  
    const overlay = document.createElement("div");
  
    overlay.classList.add("overlay");
  
    sectionEl.appendChild(overlay);
  
    const successModal = document.createElement("div");
    successModal.classList.add("successModal");
    const modalTop = document.createElement("div");
    modalTop.classList.add("modalTop");
    const popImg = document.createElement("img");
    popImg.src = "https://github.com/Dinesh1042/Vanilla-JavaScript-Projects/blob/main/Movie%20Booking/asset/pop.png?raw=true";
    modalTop.appendChild(popImg);
  
    successModal.appendChild(modalTop);
  
    // Modal Center
  
    const modalCenter = document.createElement("div");
    const modalHeading = document.createElement("h1");
    modalCenter.classList.add("modalCenter");
    modalHeading.innerHTML = `Ticked Booked Successfully`;
    modalCenter.appendChild(modalHeading);
    const modalPara = document.createElement("p");
    modalCenter.appendChild(modalPara);
    modalPara.innerHTML = `${movieNameIn} movie ticket have been booked successfully.`;
    successModal.appendChild(modalCenter);
  
    // modal Bottom
  
    const modalBottom = document.createElement("div");
    modalBottom.classList.add("modalBottom");
    const successBtn = document.createElement("button");
  
    successBtn.innerHTML = `Ok Got It!`;
    modalBottom.appendChild(successBtn);
    successModal.appendChild(modalBottom);
  
    successBtn.addEventListener("click", (e) => {
      removeModal();
    });
  
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("overlay")) {
        removeModal();
      }
    });
  
    function removeModal() {
      overlay.remove();
      successModal.remove();
      bodyEl.classList.remove("modal-active");
      cancelSeats();
    }
  
    sectionEl.appendChild(successModal);
  }
  const proceedBtnEl = document.getElementById("proceedBtn");

proceedBtnEl.addEventListener("click", (e) => {
    // Guardar los datos en localStorage antes de redirigir
    localStorage.setItem('selectedSeats', JSON.stringify(takenSeats));
    localStorage.setItem('totalSeats', takenSeats.length.toString());

    // Redirigir a Compra.html
    const urlParams = new URLSearchParams(window.location.search);
    const obraId = urlParams.get('id');
    if (obraId) {
        window.location.href = `Compra.html?id=${obraId}`;
    }
});

 /* 
 proceedBtnEl.addEventListener("click", (e) => {
    if (takenSeats.length) {
      const bodyEl = document.querySelector("body");
      bodyEl.classList.add("modal-active");
      successModal(currentMovieName, moviePrice * takenSeats.length);
    } else {
      alert("Oops no seat Selected");
    }
  });
  document.getElementById('proceedBtn').addEventListener('click', function() {
    window.location.href = `Compra.html?id=${obraId}`;
});*/
