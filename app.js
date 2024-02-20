const express = require("express");
const app = express();

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

// ROOTS

// PAGE ACCEUIL

const welcome = (req, res) => {
    res.send("Welcome to my favorite movie list");
  };
  
app.get("/", welcome);

// API MOVIES

const apiMovies = (req, res) => {
    res.status(200).json(movies);
};

app.get("/api/movies", apiMovies);

// ID

const idMovies = (req, res) => {
    let data = null;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].id === parseInt(req.params.id)) {
            data = movies[i];
        }
        // if (data) {
        //     break;
        // }
    };
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).send('Not Found');
    }
};

app.get("/api/movies/:id", idMovies);

module.exports = app;