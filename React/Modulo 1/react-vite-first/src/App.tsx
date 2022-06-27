import Header from './components/Header'
import Calc from './components/Calc'
import Photo from './components/Photo'
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  // const [number, setNumber] = useState(0);

  // const add = () => {
  //   setNumber(number + 1)
  // }

  // const remove = () => {
  //   if(number >= 1) {
  //     setNumber(number - 1)
  //   }
  // }

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleInputLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }
  const handleInputAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value)
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

      <div>
        Nome:
        <input type="text" value={name} onChange={handleInputName} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={lastName} onChange={handleInputLastName} />
      </div>

      <div>
        Idade:
        <input type="number" value={age} onChange={handleInputAge} />
      </div>

      <hr />

      <div>
        Olá {`${name} ${lastName}`}, tudo bem?
      </div>
      <div>
        Você tem {age} anos.
      </div>
    </div>
  )
}

export default App