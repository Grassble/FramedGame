import React from "react";

function Search ({searchTerm, setSearchTerm, movies, specificMovie}) {

    let tries = 0

    
    const onSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value)
    }
    
    const onClick = (e) => {
        if(specificMovie.title == searchTerm)
            console.log("correct")
        if (specificMovie.title != searchTerm && tries < 6)
            console.log("incorrect")
            tries = tries + 1
            console.log(tries)
        if (specificMovie.title != searchTerm && tries >= 6)
            console.log("failed")
    }

    return(
        <div className="search-container">
            <input type="text" placeholder="Search movie..." onChange={(e) => onSearch(e)}/>
            <button onClick={onClick}>Submit</button>
        </div>
    );
}

export default Search;