import { ChangeEvent, useState } from 'react';
import { usePeopleList } from './hooks/peopleList';
function App() {
  const [list, dispatch] = usePeopleList();
  const [name, setName] = useState('');

  
  const handleAddName = () => {
    if(name) {
      dispatch({
        type: "ADD",
        payload: {
          name
        }
      });
      setName('');
    }
  }
  
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <div className="p-5">
      <input className='border m-2' type="text" value={name} onChange={handleNameChange} />
      <button className='border bg-yellow-500 m-2 p-2 rounded' onClick={handleAddName}>Adicionar Nome</button>

      <hr />

      Lista de Pessoas
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App