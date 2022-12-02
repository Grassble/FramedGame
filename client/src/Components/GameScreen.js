import React from "react"
import MovieCard from "./MovieCard"
import { useState, useEffect } from 'react';

function GameScreen ({movies, totalMovie}) {

    const [specificMovie, setSpecificMovie] = useState([]);
    let [randomNum, setRandomNum] = useState(1);

    

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
            <h1>{specificMovie.title}</h1>
            <h2>#{specificMovie.id}</h2>
            <img className="guessImage" src={specificMovie.image1} alt="Image1" /><br />
            <button onClick={backNumber}>Back</button><button onClick={nextNumber}>Next</button>
        </div>
    )
}

export default GameScreen