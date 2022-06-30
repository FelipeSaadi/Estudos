import { useReducer } from 'react';

type reducerState = {
  count: number;
}
type reducerAction = {
  type: string;
}

const initialState = { count: 15 };

const reducer = (state: reducerState, action: reducerAction) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, count: state.count + 1 };
      break;
    case 'DEL':
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      }
      break;
    case 'RESET':
      return initialState;
      break;
  }
  return state
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='p-5'>
      Contagem: {state.count}
      <hr />
      <button className='bg-green-500 m-2 p-2 rounded' onClick={() => dispatch({ type: "ADD" })}>Adicionar</button>
      <button className='bg-red-500 m-2 p-2 rounded' onClick={() => dispatch({ type: "DEL" })}>Remover</button>
      <button className='bg-yellow-500 m-2 p-2 rounded' onClick={() => dispatch({ type: "RESET" })}>Resetar</button>
    </div>
  )
}

export default App
