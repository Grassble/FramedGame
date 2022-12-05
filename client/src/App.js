import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import GameScreen from './Components/GameScreen';

function App() {
  
  const [movies, setMovies] = useState([])
  let totalMovie = movies.length

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then((r) => r.json())
    .then((data) => setMovies(data))
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/">
            <GameScreen movies={movies} totalMovie={totalMovie} />
          </Route>
          <Route path="/game">
            <h1>Page Count:</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
