import PostItem from './PostItem'

const PostList = ({ posts, title, remove }) => {
  return (
    <div className="postlist">
      <h2 className="postlist__title" style={{ textAlign: 'center' }}>
        {title}
      </h2>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        /> //number={index + 1} это мы указываем чтобы наш массив из объектов и его индекс начинался не с 0,а c 1
      ))}
    </div>
  )
}

export default PostList
