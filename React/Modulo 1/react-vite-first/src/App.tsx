import Header from './components/Header'
import Calc from './components/Calc'
import Photo from './components/Photo'
import { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);
  // const [name, setName] = useState('Felipe');

  // const handleButtonClick = () => {
  //   setName('Saadi');
  // }

  const add = () => {
    setNumber(number + 1)
  }

  const remove = () => {
    if(number >= 1) {
      setNumber(number - 1)
    }
  }

  return (
    <div>
      <Header title="Título da Página" />
      <Calc />

      <Photo legend="Google">
        <img src="https://www.google.com.br/google.jpg" alt="" />
      </Photo>
      <button onClick={remove}>Remover</button>
      <div>Valor: {number}</div>
      <button onClick={add}>Adicionar</button>
    </div>
  )
}

export default App