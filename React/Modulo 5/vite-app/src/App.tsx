import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([]);

  const loadMovies = () => {
    fetch("https://api.b7web.com.br/cinema/").then((response) => {
        return response.json();
      }).then((json) => {
        setMovies(json);
      })
  }

  return (
    <div>
      <button onClick={loadMovies}>Carregar Filmes</button>
      Total de Filmes: {movies.length}
    </div>
  )
}

export default App
