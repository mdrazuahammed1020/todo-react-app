import './PostList.css'
export default function PostList({post}) {
  return (
    <div className="single-post">
       <div className="post-bx">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
       </div>
    </div>
  )
}
