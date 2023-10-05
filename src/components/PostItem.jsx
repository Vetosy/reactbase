const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <h2 className="post__title">{props.post.title}</h2>
        <p className="post__descr">{props.post.descr}</p>
        <button className="post__btn">Delete</button>
      </div>
    </div>
  )
}

export default PostItem
