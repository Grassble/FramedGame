import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import GameScreen from './Components/GameScreen';

function App() {
  
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then((r) => r.json())
    .then((data) => setMovies(data))
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/game">
            <GameScreen movies={movies} />
          </Route>
          <Route path="/">
            <h1>Page Count:</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
