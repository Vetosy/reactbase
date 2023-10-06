import MyBtn from './UI/btn/MyBtn'

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <h2 className="post__title">
          {props.number}.{props.post.title}
        </h2>
        <p className="post__descr">{props.post.descr}</p>
        <MyBtn className="post__btn" onClick={() => props.remove(props.post)}>
          Удалить
        </MyBtn>
      </div>
    </div>
  )
}

export default PostItem
