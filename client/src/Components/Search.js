import React from "react";
import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";

function Search ({searchTerm, setSearchTerm, movies, specificMovie}) {

    const [tries, setTries] = useState(specificMovie.title);
    useEffect(() => { setTries(specificMovie.tries)}, [specificMovie.tries])

    // const [tries, setTries] = useState(specificMovie.tries)

    const testload = () => {
        console.log("It Loaded")
    }
   

    
    const [answer, setAnswer] = useState(false)

    const addTry = (e) => {
        console.log(tries)
        e.preventDefault()
        if (tries < 6 && specificMovie.title !== searchTerm) {
            setTries(tries + 1)
        };
        if (tries >= 6 && specificMovie.title !== searchTerm) {
            setTries(6)
        };
        if (tries < 6 && specificMovie.title === searchTerm) {
            setTries(tries + 1)
            setAnswer(true)
            console.log("Correct")
        }
    }

    const patchTry = (e) => {
        fetch(`http://localhost:4000/movies/${specificMovie.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                tries: tries
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));

            console.log("Shrimp")
            console.log(specificMovie.tries)
    }

    // const addTries = (e) => {
    //     e.preventDefault()
    //     if (tries < 6 && specificMovie.title !== searchTerm) {
    //         setTries(tries + 1)
    //     };
    //     if (tries >= 6 && specificMovie.title !== searchTerm) {
    //         setTries(6)
    //     };
    //     if (tries < 6 && specificMovie.title === searchTerm) {
    //         setTries(tries + 1)
    //         setAnswer(true)
    //         console.log("Correct")
    //     }
    //     console.log(tries)
    // }

    

    const onSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value)
    }

    
    
    return (
        <div onLoad={testload} className="search-container">
            { tries === 0 && answer === false &&
                <div>
                    <ImageSlider movies={movies} specificMovie={specificMovie} tries={tries}/><br /><br />
                    <input type="text" placeholder="Search movie..." onChange={(e) => onSearch(e)}/>
                    <button onClick={addTry}>Submit</button> 
                    <p>Guess the Movie!</p>
                    <p>Tries: {tries}</p>
                    <p>eye: {specificMovie.tries}</p>
                </div>
            }
            { tries === 1 && answer === false &&
                <div>
                    <ImageSlider movies={movies} specificMovie={specificMovie} tries={tries}/><br /><br />
                    <input type="text" placeholder="Search movie..." onChange={(e) => onSearch(e)}/>
                    <button onClick={addTry}>Submit</button> 
                    <p>Incorrect!</p>
                    <p>Tries: {tries}</p>
                    <p>eye: {specificMovie.tries}</p>
                </div>
            }
            { tries === 2 && answer === false &&
                <div>
                    <ImageSlider movies={movies} specificMovie={specificMovie} tries={tries}/><br /><br />
                    <input type="text" placeholder="Search movie..." onChange={(e) => onSearch(e)}/>
                    <button onClick={addTry}>Submit</button> 
                    <p>Incorrect!</p>
                    <p>Tries: {tries}</p>
                    <p>eye: {specificMovie.tries}</p>
                </div>
            }
            { tries === 3 && answer === false &&
                <div>
                    <ImageSlider movies={movies} specificMovie={specificMovie} tries={tries}/><br /><br />
                    <input type="text" placeholder="Search movie..." onChange={(e) => onSearch(e)}/>
                    <button onClick={addTry}>Submit</button> 
                    <p>Incorrect!</p>
                    <p>Tries: {tries}</p>
                    <p>eye: {specificMovie.tries}</p>
                </div>
            }
            { tries === 4 && answer === false &&
                <div>
                    <ImageSlider movies={movies} specificMovie={specificMovie} tries={tries}/><br /><br />
                    <input type="text" placeholder="Search movie..." onChange={(e) => onSearch(e)}/>
                    <button onClick={addTry}>Submit</button> 
                    <p>Incorrect!</p>
                    <p>Tries: {tries}</p>
                    <p>eye: {specificMovie.tries}</p>
                </div>
            }
            { tries === 5 && answer === false &&
                <div>
                    <ImageSlider movies={movies} specificMovie={specificMovie} tries={tries}/><br /><br />
                    <input type="text" placeholder="Search movie..." onChange={(e) => onSearch(e)}/>
                    <button onClick={addTry}>Submit</button> 
                    <p>Incorrect! Last Guess!</p>
                    <p>Tries: {tries}</p>
                    <p>eye: {specificMovie.tries}</p>
                </div>
            }
            { tries === 6 && answer === false && 
                <div>
                    <ImageSlider movies={movies} specificMovie={specificMovie} tries={tries}/><br /><br />
                    <h1 className="movieWrong">{specificMovie.title}</h1>
                    <p>Better luck next time!</p>
                    <p>Tries: {tries}</p>
                    <p>eye: {specificMovie.tries}</p>
                </div>}
            { answer === true && 
            <div>
                <ImageSlider movies={movies} specificMovie={specificMovie} tries={tries}/><br /><br />
                <h1 className="nameCorrect">{specificMovie.title}</h1>
                <p>Correct!</p>
                <p>Tries: {tries}</p>
            </div>}
        </div>
    )
}

export default Search;