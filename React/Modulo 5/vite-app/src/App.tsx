import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import { Post } from './types/Posts';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const [addTitleText, setAddTitleText] = useState('');
  const [addBodyText, setAddBodyText] = useState('');

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    setLoading(true);
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();
    setPosts(json);
    setLoading(false);
  }

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
  }

  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value);
  }

  const handleAddClick = () => {
    alert(addTitleText+ ' - ' + addBodyText);
  }

  return (
    <div className='p-5'>
      {loading &&
        <div>Carregando...</div>
      }

      <fieldset className='border-2 md-3 p-3'>
        <legend>Adicionar Novo Post</legend>

        <input
          value={addTitleText}
          onChange={handleAddTitleChange}
          className="block border"
          type="text"
          placeholder="Digite um Título"
        />

        <textarea
          className="block border"
          value={addBodyText}
          onChange={handleAddBodyChange}
        >
        </textarea>
        <button className="block border" onClick={handleAddClick}>Adicionar</button>
      </fieldset>

      {!loading && posts.length > 0 &&
        <>
          Total de Posts: {posts.length}
          <div>
            {posts.map((post, index) => (
              <div key={index} className="my-4">
                <h4 className='font-bold'>{post.title}</h4>
                <small>#{post.id} - Usuário: {post.userId}</small>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        </>
      }
      {!loading && posts.length === 0 &&
        <div>Não há posts para exibir.</div>
      }
    </div>
  )
}

export default App
