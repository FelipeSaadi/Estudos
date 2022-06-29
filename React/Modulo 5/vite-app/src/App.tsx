import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import { Post } from './types/Posts';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();
    setPosts(json);
    setLoading(false);
  }

  return (
    <div className='p-5'>
      {loading &&
        <div>Carregando...</div>
      }
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
