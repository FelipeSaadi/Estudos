import React, { useState } from 'react';
import Button from './components/Button';

const App = () => {
  let [textButton, setTextButton] = useState('Clique aqui');

  const handleClick = (txt: string) => {
    alert(txt);
}

  return (
    <div>
        <Button text={textButton} clickFn={handleClick}/>
    </div>
  )
}

export default App