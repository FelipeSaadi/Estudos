import Header from './components/Header'
import Calc from './components/Calc'
import Photo from './components/Photo'
import { useState } from 'react';

const App = () => {
  // const [number, setNumber] = useState(0);
  const [name, setName] = useState('Felipe');

  const handleButtonClick = () => {
    setName('Saadi');
  }

  return (
    <div>
      <Header title="Título da Página" />
      <Calc />

      <Photo legend="Google">
        <img src="https://www.google.com.br/google.jpg" alt="" />
      </Photo>
      Me chamo {name}.
      <button onClick={handleButtonClick}>Clique aqui</button>
    </div>
  )
}

export default App