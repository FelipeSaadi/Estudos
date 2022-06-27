import React, { useState } from 'react';

const App = () => {
  let [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  let buttonStyle = {
    backgroundColor: "red",
    color: "white"
  }

  return (
    <div>
      {show ? (
        <>
          <p>Meu nome é Felipe Saadi.</p>
          <button style={ buttonStyle } onClick={handleClick}>Não mostrar</button>
        </>
      ) : (
        <>
          <p>Nada a mostrar.</p>
          <button style={ buttonStyle } onClick={handleClick}>Mostrar</button>
        </>
      )}
    </div>
  )
}

export default App