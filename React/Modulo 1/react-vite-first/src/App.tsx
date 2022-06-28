// import { Container, Button } from "./AppStyles"

import * as C from './AppStyles'

const App = () => {
  return (
      <C.Container bg="grey">
        Texto do componente
        <C.Button bg="#ff0000" small>Clique aqui</C.Button>
        <C.Button bg="#00ff00" small>Clique aqui</C.Button>
      </C.Container>
  )
}

export default App