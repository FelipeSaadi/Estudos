import React, { useState } from 'react';

const App = () => {
  let [show, setShow] = useState(false);
  let [clicked, setClicked] = useState(false);
  let [padding, setPadding] = useState(0);

  const handleClick = () => {
    setShow(!show);
    setClicked(!clicked);
    setPadding(padding + 1)
  }

  let buttonStyle;

  clicked ? buttonStyle = {
    backgroundColor: "grey",
    color: "white",
    padding
  } : buttonStyle = {
    backgroundColor: "red",
    color: "white",
    padding
  }

  return (
    <div>
      {show ? (
        <>
          <p>Meu nome é Felipe Saadi.</p>
          <button style={buttonStyle} onClick={handleClick}>Não mostrar</button>
        </>
      ) : (
        <>
          <p>Nada a mostrar.</p>
          <button style={buttonStyle} onClick={handleClick}>Mostrar</button>
        </>
      )}
    </div>
  )
}

export default App