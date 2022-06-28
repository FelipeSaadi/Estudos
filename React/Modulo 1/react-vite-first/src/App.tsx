// import { Container, Button } from "./AppStyles"

import * as C from './AppStyles'

const App = () => {
  return (
      <C.Container bg="grey">
        <span>Texto do componente</span>

        <a href="" className='link'>Clique aqui</a>
        <C.Button bg="#ff0000" small>Clique aqui</C.Button>
        <C.Button bg="#00ff00" small>Clique aqui</C.Button>
      </C.Container>
  )
}

export default App