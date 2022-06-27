import Header from './components/Header'
import Calc from './components/Calc'
import Photo from './components/Photo'
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  // const [number, setNumber] = useState(0);

  // const add = () => {
  //   setNumber(number + 1)
  // }

  // const remove = () => {
  //   if(number >= 1) {
  //     setNumber(number - 1)
  //   }
  // }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <div>
      <Header title="Título da Página" />
      <Calc />

      <Photo legend="Google">
        <img src="https://www.google.com.br/google.jpg" alt="" />
      </Photo>

      {/* <button onClick={remove}>Remover</button>
      <div>Valor: {number}</div>
      <button onClick={add}>Adicionar</button> */}

      Nome:
      <input type="text" value={name} onChange={handleInput}/>
      <hr />
      Seu nome é: {name}
    </div>
  )
}

export default App