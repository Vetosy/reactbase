import { useState } from 'react'
import ClassCounter from './components/ClassCounter'
import Counter from './components/Counter'
import Input from './components/Input'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', descr: 'asdasdasd asdasdas' },
    { id: 2, title: 'JS2', descr: 'asdasdasd asdasdas' },
    { id: 3, title: 'JS3', descr: 'asdasdasd asdasdas' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <Counter ariaLabelPlus={'Btn plus'} ariaLabelMinus={'Btn minus'} />
      <ClassCounter />
      <Input />
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList
          remove={removePost}
          posts={posts}
          title={'Список постов про JS'}
        />
      ) : (
        <div style={{ textAlign: 'center' }}>Посты не найдены</div>
      )}
    </div>
  )
}

export default App
