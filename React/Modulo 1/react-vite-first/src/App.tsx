// import { Container, Button } from "./AppStyles"

import * as C from './AppStyles'

const App = () => {
  return (
    <div className='bg-blue-300 p-5'>
      <input
        className='outline-none border border-transparent bg-white p-3 rounded focus:ring-1 focus:ring-blue-700'
        type="text"
        placeholder='Digite alguma coisa'
      />
      <button className='mx-3 bg-blue-500 p-3 rounded text-white font-bold hover:bg-blue-700'>Clique aqui</button>
    </div>

    // <C.Container bg="grey">
    //   <span>Texto do componente</span>

    //   <a href="" className='link'>Clique aqui</a>
    //   <C.Button bg="#ff0000" small>Clique aqui</C.Button>
    //   <C.Button bg="#00ff00" small>Clique aqui</C.Button>
    // </C.Container>
  )
}

export default App