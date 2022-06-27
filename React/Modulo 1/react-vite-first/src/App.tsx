import React, { useState } from 'react';

const App = () => {
  let [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div>
      {show ? (
        <>
          <p>Meu nome é Felipe Saadi.</p>
          <button onClick={handleClick}>Não mostrar</button>
        </>
      ) : (
        <>
          <p>Nada a mostrar.</p>
          <button onClick={handleClick}>Mostrar</button>
        </>
      )}
    </div>
  )
}

export default App