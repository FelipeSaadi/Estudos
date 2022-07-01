import { ChangeEvent, useState } from 'react';
import { usePeopleList } from './hooks/peopleList';
function App() {
  const [list, dispatch] = usePeopleList();
  const [name, setName] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const addPerson = () => {
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

  const deletePerson = (id: string) => {
    if(list) {
      dispatch({
        type: "DEL",
        payload: {
          id
        }
      })
    }
  }

  const sortPersons = () => {
    dispatch({
      type: "ORDER"
    })
  }

  return (
    <div className="p-5">
      <input className='border m-2' type="text" value={name} onChange={handleNameChange} />
      <button className='border bg-yellow-500 m-2 p-2 rounded' onClick={addPerson}>Adicionar Nome</button>

      <hr />

      <button className='border bg-grey-400 m-2 p-2 rounded block' onClick={sortPersons}>Ordenar Nomes</button>

      Lista de Pessoas:
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
            <button className='border m-2 p-2 bg-red-400 rounded' onClick={() => deletePerson(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App