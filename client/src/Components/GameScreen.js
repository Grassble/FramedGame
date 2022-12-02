import React from "react"
import MovieCard from "./MovieCard"
import { useState, useEffect } from 'react';

function GameScreen ({movies}) {

    const [specificMovie, setSpecificMovie] = useState([]);
    let [randomNum, setRandomNum] = useState(1);

    let totalMovie = movies.length

    const randomNumber = () => {
        setRandomNum(Math.floor(Math.random() * (totalMovie - 1 + 1)) + 1)
        // window.location.reload();
        console.log(randomNum)
    }

    useEffect(() => {
        fetch(`http://localhost:4000/movies/${randomNum}`)
        .then((r) => r.json())
        .then((data) => setSpecificMovie(data))
      }, []);

    return (
        <div>
            <h1>Guess the Movie</h1>
            <button onClick={randomNumber}>Random</button>
            <h1>{specificMovie.title}</h1>
            {/* {movies.map(movie => (<MovieCard movie={movie} totalMovie={totalMovie} key={movie.id} />))} */}
        </div>
    )
}

export default GameScreen