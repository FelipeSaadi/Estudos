import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import { Movie } from './types/Movies';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies();
  }, [])

  const loadMovies = async () => {
    setLoading(true);
    let response = await fetch("https://api.b7web.com.br/cinema/");
    let json = await response.json();
    setLoading(false);
    setMovies(json);
  }

  return (
    <div>
      {loading &&
        <div>Carregando...</div>
      }
      {!loading &&
        <>
          Total de Filmes: {movies.length}
          <div className="grid grid-cols-6 gap-3">
            {movies.map((movie, index) => (
              <div key={index}>
                <img src={movie.avatar} alt="" width={150} />
                {movie.titulo}
              </div>
            ))}
          </div>
        </>
      }
    </div>
  )
}

export default App
