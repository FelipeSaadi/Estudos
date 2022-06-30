import { useReducer } from 'react';
import { useCount } from './hooks/counts';

function App() {
  const [count, dispatch] = useCount()

  return (
    <div className='p-5'>
      Contagem: {count.value}
      <hr />
      <button className='bg-green-500 m-2 p-2 rounded' onClick={() => dispatch({ type: "ADD" })}>Adicionar</button>
      <button className='bg-red-500 m-2 p-2 rounded' onClick={() => dispatch({ type: "DEL" })}>Remover</button>
      <button className='bg-yellow-500 m-2 p-2 rounded' onClick={() => dispatch({ type: "RESET" })}>Resetar</button>
    </div>
  )
}

export default App
