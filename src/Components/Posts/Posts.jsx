import { useEffect, useState } from "react";
import PostList from "../PostList/PostList";
import './Posts.css'
export default function Posts() {

    const [posts, setPosts] = useState([])
    const url = "https://jsonplaceholder.typicode.com/posts"
    useEffect(() => {
    fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    // console.log(posts)

    
  return (
    <div>
       <div className="postContainer">
        {
        posts.map((post, index) => <PostList post = {post} index = {index}/>)
        }
       </div>
    </div>
  )
}
