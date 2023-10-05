import { useState } from 'react'
import ClassCounter from './components/ClassCounter'
import Counter from './components/Counter'
import Input from './components/Input'
import PostList from './components/PostList'
import MyBtn from './components/UI/btn/MyBtn'
import MyInput from './components/UI/input/MyInput'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', descr: 'asdasdasd asdasdas' },
    { id: 2, title: 'JS2', descr: 'asdasdasd asdasdas' },
    { id: 3, title: 'JS3', descr: 'asdasdasd asdasdas' },
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      title,
      body,
    }

    setPosts([...posts, newPost]) /// созданный объект добавляем в массив постов,мы не изменяем массив постов,мы развернули старый массив объектов через ...posts, и в конец добавили новый массив newPost
  }

  return (
    <div className="App">
      <div className="site-container">
        <main className="main">
          <Counter ariaLabelPlus={'Btn plus'} ariaLabelMinus={'Btn minus'} />
          <ClassCounter />
          <Input />
          <form>
            <MyInput
              type="text"
              placeholder="Название поста"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <MyInput
              type="text"
              placeholder="Описание поста"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <MyBtn onClick={addNewPost}>Создать пост</MyBtn>
          </form>
          <PostList posts={posts} title={'Список постов про JS'} />
        </main>
      </div>
    </div>
  )
}

export default App
