import React from "react"
import Search from "./Search";
import { useState, useEffect } from 'react';

function GameScreen ({movies, totalMovie}) {

    const [specificMovie, setSpecificMovie] = useState([]);
    let [randomNum, setRandomNum] = useState(1);
    const [searchTerm, setSearchTerm] = useState("")
    // const [tries, setTries] = useState(specificMovie.tries);
    

    let filteredMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      })

    const randomNumber = () => {
        setRandomNum(Math.floor(Math.random() * (totalMovie - 1 + 1)) + 1)
    }

    const nextNumber = () => {
        if (randomNum < totalMovie) {
            setRandomNum(randomNum + 1)
        }
    }

    const backNumber = () => {
        if (randomNum > 1) {
            setRandomNum(randomNum - 1)
        }
    }

    useEffect(() => {
        fetch(`http://localhost:4000/movies/${randomNum}`)
        .then((r) => r.json())
        .then((data) => setSpecificMovie(data))
      }, [randomNum]);

    return (
        <div>
            <h1>Guess the Movie</h1>
            <button onClick={randomNumber}>Random</button>
            <h2>#{specificMovie.id}</h2>
            <Search movies={filteredMovies} specificMovie={specificMovie} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/><br />
            <button onClick={backNumber}>Back</button><button onClick={nextNumber}>Next</button>
        </div>
    )
}

export default GameScreen