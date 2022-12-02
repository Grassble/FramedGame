import React from "react"

function MovieCard ({movie, totalMovie}) {

    return (
        <div>
            <h1>{totalMovie}</h1>
            <h1>{movie.title}</h1>
        </div>
    )
}

export default MovieCard