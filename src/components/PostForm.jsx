import { useState } from 'react'
import MyBtn from './UI/btn/MyBtn'
import MyInput from './UI/input/MyInput'

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', descr: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({ title: '', descr: '' })
  }

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Название языка программирования"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Описание языка программирования"
        value={post.descr}
        onChange={(e) => setPost({ ...post, descr: e.target.value })}
      />
      <MyBtn onClick={addNewPost}>Создать пост</MyBtn>
    </form>
  )
}

export default PostForm
