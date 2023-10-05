import PostItem from './PostItem'

const PostList = ({ posts, title }) => {
  return (
    <div className="postlist">
      <h2 className="postlist__title" style={{ textAlign: 'center' }}>
        {title}
      </h2>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  )
}

export default PostList
