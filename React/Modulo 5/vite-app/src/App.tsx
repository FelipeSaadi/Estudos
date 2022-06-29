import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import { Movie } from './types/Movies';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = () => {
    fetch("https://api.b7web.com.br/cinema/").then((response) => {
      return response.json();
    }).then((json) => {
      setMovies(json);
    })
  }

  return (
    <div>
      <button className="block bg-blue-400 p-2 rounded" onClick={loadMovies}>Carregar Filmes</button>
      Total de Filmes: {movies.length}

      <div className="grid grid-cols-6 gap-3">
        {movies.map((movie, index) => (
          <div key={index}>
            <img src={movie.avatar} alt="" width={150} />
            {movie.titulo}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
