import Header from './components/Header'
import Calc from './components/Calc'
import Photo from './components/Photo'

const App = () => {

  const handleButtonClick = () => {
    alert("O botão foi clicado!");
  }

  return (
    <div>
      <Header title = "Título da Página"/>
      <Calc/>

      <Photo legend="Google">
        <img src="https://www.google.com.br/google.jpg" alt="" />
      </Photo>

      <button onClick={handleButtonClick}>Clique aqui</button>
    </div>
  )
}

export default App