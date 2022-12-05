import React from "react";

function Search ({searchTerm, setSearchTerm, movies}) {

    const onSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value)
    }

    return(
        <div className="search-container">
            <input type="text" placeholder="Search movie..." onChange={(e) => onSearch(e)}>
                {/* {movies.map(movie=><option value={movie.title}>{movie.title}</option>)} */}
            </input>
        </div>
    );
}

export default Search;