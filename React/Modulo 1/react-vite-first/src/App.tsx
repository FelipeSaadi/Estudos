// import { Container, Button } from "./AppStyles"

import * as C from './AppStyles'

const App = () => {
  return (
    <div className='bg-blue-900 text-white px-10 py-5 text-2xl font-bold flex flex-col text-center md:flex-row md:items-center md:text-green-400 lg:text-red-400 md:justify-between'>
      Texto da DIV
      <button className='bg-green-500 rounded-xl p-2 mt-3 md:ml-5 md:mt-0 lg:text-white'>Clique aqui</button>
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