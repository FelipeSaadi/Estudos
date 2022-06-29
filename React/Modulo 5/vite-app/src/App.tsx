import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [name, setName] = useState('Saadi');

  useEffect(() => {
    alert("Executou");
  }, [name]);

  const handleClick = () => {
    setName('Rafael');
  }

  return (
    <div>
      Nome: {name}
      <button onClick={handleClick}>Clique Aqui</button>
    </div>
  )
}

export default App
