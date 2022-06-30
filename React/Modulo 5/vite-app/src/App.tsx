import { useEffect, useState } from 'react'
import { PostItem } from './Components/PostItem';
import { Postform } from './Components/Postform';
import { Post } from './types/Posts';
import { api } from './api';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, [])

  const loadPosts = async () => {
    setLoading(true);
    let json = await api.getAllPosts();
    setPosts(json);
    setLoading(false);
  }

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1)

    if(json.id) {
      alert("Post adicionado com sucesso!");
    } else {
      alert("Ocorreu algum erro.");
    }
  }

  return (
    <div className='p-5'>
      {loading &&
        <div>Carregando...</div>
      }

      <Postform onAdd={handleAddPost} />

      {!loading && posts.length > 0 &&
        <>
          Total de Posts: {posts.length}
          <div>
            {posts.map((post, index) => (
              < PostItem data={post} key={index}/>
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
