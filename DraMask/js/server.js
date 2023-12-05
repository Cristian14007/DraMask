const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const obras = [
    {
        id: 1,
        titulo: "Hamlet",
        descripcion: "Una obra de Shakespeare.",
        imagen: "images/hamlet.jpg",
        genero: "Drama",
        duracion: "120 mins",
        director: "Andres Torres",
        interpretes: "A.Torres, Cristian, Pablo.Pe, Ricardon, Albertos, CR7 & Sofía",
        precio: 20,
        fecha: "2023-12-01",
        fecha1: "2024-02-07",
        fecha2: "2024-04-11",
        hora1: "21:30",
        hora2: "18:30",
        sala: 3,
        star: 4,
        hora: "20:30"
    },
    {
        id: 2,
        titulo: "El Rey León",
        descripcion: "Un musical épico.",
        imagen: "images/leon.png",
        genero: "Musical",
        duracion: "150 mins",
        director: "Mutombo Martinez",
        interpretes: "Marta Soler, Luis Gomez, Ana Páez, Mario Ruiz",
        precio: 30,
        fecha: "2023-12-15",
        fecha1: "2024-01-05",
        fecha2: "2024-03-18",
        hora1: "20:30",
        hora2: "16:30",
        sala: 1,
        star: 5,
        hora: "21:30"
    },
    {
        id: 3,
        titulo: "Romeo y Julieta",
        descripcion: "El clásico de Shakespeare sobre dos amantes desafortunados.",
        imagen: "images/romeo.png",
        genero: "Tragedia",
        duracion: "130 mins",
        director: "Carlos Vidal",
        interpretes: "Elena Nuñez, Jorge Sanz",
        precio: 22,
        fecha: "2023-12-05",
        fecha1: "2024-02-07",
        fecha2: "2024-04-11",
        hora1: "21:30",
        hora2: "18:30",
        sala: 2,
        star: 3,
        hora: "19:00"
    },
    {
        id: 4,
        titulo: "La Casa de Bernarda Alba",
        descripcion: "Una representación intensa de la obra maestra de Federico García Lorca.",
        imagen: "images/casa.png",
        genero: "Drama",
        duracion: "90 mins",
        director: "Irene Moya",
        interpretes: "Carmen Linares, Pilar Tena, Laura Ortega",
        precio: 18,
        fecha: "2023-11-25",
        fecha1: "2024-01-27",
        fecha2: "2024-03-12",
        hora1: "23:30",
        hora2: "19:00",
        sala: 4,
        star: 2,
        hora: "21:00"
    },
    {
        id: 5,
        titulo: "Don Juan Tenorio",
        descripcion: "Una obra clásica española, llena de romance y aventura.",
        imagen: "images/juan.png",
        genero: "Drama",
        duracion: "110 mins",
        director: "Roberto Gómez",
        interpretes: "Juan Martínez, Clara Ros, Miguel Ángel Jiménez",
        precio: 20,
        fecha: "2023-11-30",
        fecha1: "2024-01-07",
        fecha2: "2024-03-21",
        hora1: "20:00",
        hora2: "19:30",
        sala: 5,
        star: 2,
        hora: "20:00"
    },
    {
        id: 6,
        titulo: "Cats",
        descripcion: "El famoso musical de Andrew Lloyd Webber que ha encantado a audiencias de todo el mundo.",
        imagen: "images/cats.png",
        genero: "Musical",
        duracion: "140 mins",
        director: "Mónica García",
        interpretes: "Ana Belén, Luis Fonsi, Rosalía Vila",
        precio: 30,
        fecha: "2023-12-10",
        fecha1: "2024-02-07",
        fecha2: "2024-04-11",
        hora1: "21:30",
        hora2: "18:30",
        sala: 1,
        star: 1,
        hora: "18:30"
    },
    {
        id: 7,
        titulo: "Les Misérables",
        descripcion: "Un épico musical basado en la novela de Victor Hugo.",
        imagen: "images/mise.png",
        genero: "Musical",
        duracion: "165 mins",
        director: "Jaime Costa",
        interpretes: "Pedro Fernández, Diana Navarro, Sergio Dalma",
        precio: 35,
        fecha: "2023-12-20",
        fecha1: "2024-01-13",
        fecha2: "2024-03-05",
        hora1: "21:30",
        hora2: "17:30",
        sala: 3,
        star: 5,
        hora: "19:30"
    },
    {
        id: 8,
        titulo: "La Tempestad",
        descripcion: "Una de las últimas obras maestras de Shakespeare, llena de magia y misterio.",
        imagen: "images/tempes.png",
        genero: "Comedia",
        duracion: "135 mins",
        director: "Lucía Hernández",
        interpretes: "Carlos Sánchez, Marta Rivera, Daniel López",
        precio: 28,
        fecha: "2023-12-28",
        fecha1: "2024-01-05",
        fecha2: "2024-02-21",
        hora1: "23:30",
        hora2: "18:30",
        sala: 2,
        star: 1,
        hora: "21:00"
    },
    {
        id: 9,
        titulo: "West Side Story",
        descripcion: "El clásico musical inspirado en Romeo y Julieta, ambientado en Nueva York de los años 50.",
        imagen: "images/west.png",
        genero: "Musical",
        duracion: "160 mins",
        director: "Roberto Álvarez",
        interpretes: "Ángela Ponce, Miguel Torres, Laura Jiménez",
        precio: 30,
        fecha: "2024-01-05",
        fecha1: "2024-02-27",
        fecha2: "2024-04-15",
        hora1: "20:00",
        hora2: "19:30",
        sala: 1,
        star: 2,
        hora: "19:30"
    },
    {
        id: 10,
        titulo: "Phantom of the Opera",
        descripcion: "Un espectacular musical basado en la novela de Gaston Leroux.",
        imagen: "images/fastas.png",
        genero: "Drama",
        duracion: "150 mins",
        director: "Sofía Martín",
        interpretes: "Javier Gómez, Raquel del Pozo, Mario Casas",
        precio: 35,
        fecha: "2024-01-20",
        fecha1: "2024-01-12",
        fecha2: "2024-02-23",
        hora1: "23:00",
        hora2: "20:30",
        sala: 4,
        star: 3,
        hora: "20:00"
    }
    
];

const estrenos = [
    {
        id: 1,
        titulo: "Mary Poppins",
        imagen: "images/popins.jpg"
    },
    {
        id: 2,
        titulo: "La Celestina",
        imagen: "images/celes.png"
    },
    {
        id: 3,
        titulo: "Bodas de sangre",
        imagen: "images/bodas.png"
    },
    {
        id: 4,
        titulo: "Tributo a coldplay",
        imagen: "images/coldplay.png"
    }
];
// Obtener todas las obras
app.get('/api/obras', (req, res) => {
    res.json(obras);
});

// Obtener una obra por su ID
app.get('/api/obras/:id', (req, res) => {
    const obra = obras.find(o => o.id === parseInt(req.params.id));
    if (!obra) res.status(404).send('La obra no fue encontrada');
    res.json(obra);
});

// Obtener todas las estrenos
app.get('/api/estrenos', (req, res) => {
    res.json(estrenos);
});

// Obtener una estreno por su ID
app.get('/api/estrenos/:id', (req, res) => {
    const estreno = estrenos.find(o => o.id === parseInt(req.params.id));
    if (!estreno) res.status(404).send('El estreno no fue encontrada');
    res.json(estreno);
});
