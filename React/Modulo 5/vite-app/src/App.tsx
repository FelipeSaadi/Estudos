import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import { Movie } from './types/Movies';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies();
  }, [])

  // const loadMovies = () => {
  //   fetch("https://api.b7web.com.br/cinema/").then((response) => {
  //     return response.json();
  //   }).then((json) => {
  //     setMovies(json);
  //     setLoading(false)
  //   }).catch(err => {
  //     setLoading(false);
  //   })
  // }

  const loadMovies = async () => {
    try {
      setLoading(true);
    let response = await fetch("https://api.b7web.com.br/cinema/");
    let json = await response.json();
    setLoading(false);
    setMovies(json);
    } catch(err) {
      setLoading(false);
    }
  }

return (
  <div>
    {loading &&
      <div>Carregando...</div>
    }
    {!loading && movies.length > 0 &&
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
    {!loading && movies.length === 0 &&
      <div>Tente novamente mais tarde.</div>
    }
  </div>
)
}

export default App
