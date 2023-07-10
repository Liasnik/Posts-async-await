import './Post.css'

export default function Post(props) {
  const { title, body, id, userId } = props

  return (
    <div className="post">
      <h5> User ID: {userId}</h5>
      <small>id: {id}</small>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  )
}
