import { useState } from 'react'
import './PostList.css'
export default function PostList({post}) {
  const [comments, setComments] = useState([])
  const [input, setInput] = useState('')
  const [showDetails, setshowDetails] = useState(false)
  const addItem = () => {
    setComments([...comments, input])
    setInput('')
  }

  const generate = () => {
    setshowDetails(!showDetails)
    console.log(showDetails)
  }
  return (
    <div className="single-post">
       <div className="post-bx">
            <h3 style={{textTransform: "uppercase"}}>{post.title}</h3>
            <p>{post.body}</p>
            <div className='details-post'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio asperiores molestias nobis cupiditate, aliquid quas dicta recusandae unde voluptate ullam perferendis fugit saepe quod repellat adipisci aut odio culpa doloremque blanditiis voluptates vero nostrum. Dolore, distinctio! Velit quis praesentium expedita molestias perferendis? Totam laboriosam ab adipisci ullam autem fuga? Obcaecati inventore aliquid perferendis rerum. Sed ullam quia error incidunt, impedit voluptatem praesentium cumque cupiditate, ab tempore consequatur laboriosam nam quaerat provident quibusdam, eos voluptatum? Eum amet magnam iste vel autem dolore quo reprehenderit et eius ex voluptates ipsum, cum illum dolores sint libero nisi. Culpa, quaerat. Tempora eos obcaecati quaerat?</p>
              <div style={ showDetails ? {display: "block"} :{display: "none"}} className="comment-section">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptates laborum quas vel esse, itaque soluta, perferendis reiciendis ducimus alias blanditiis ipsam iure quaerat omnis aut? Magnam odio assumenda nobis mollitia architecto natus itaque consequatur similique officia aut minus voluptatum autem dolor excepturi id illum provident, ea animi eum a reprehenderit totam asperiores sed! Mollitia numquam, quo excepturi recusandae molestias incidunt dolores corporis culpa eos doloremque voluptate voluptates explicabo, laboriosam illum in tenetur accusamus dolorem maiores? Itaque ex eligendi nemo omnis cum ipsam tenetur corrupti repellendus praesentium, cupiditate qui enim a perspiciatis ipsa alias delectus ullam quia sit tempore accusantium.</p>
                <ul>
                {
                  comments.map((comment, index)=> (<li key={index}>{comment}</li>))
                }
                </ul>
                <h3>Leave a Comment..</h3>
                <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" name="" id="" /> <button onClick={addItem}>Add Comment</button>
              </div>
            </div>
            <button onClick={generate}>{showDetails ? "Show less" : "Show Details"}</button>
       </div>
    </div>
  )
}
