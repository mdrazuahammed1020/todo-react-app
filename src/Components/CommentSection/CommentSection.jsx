import "./CommentSection.css"
export default function CommentSection({environmentalComments, comments}) {
  return (
    <div className="grid-container">
      <div className="single-comment">
       <div>  
        {
            environmentalComments.map(comment => (
              <div>
              <h3>{comment.author}</h3>
              <p>{comment.comment}</p>
            </div>
                
            ))
        }
        </div>
        <div>
        {
            comments.map(comment => (
              <div>
              <h3>{comment.author}</h3>
              <p>{comment.comment}</p>
            </div> 
            ))
        }
        </div>
        </div>

    </div>
  )
}
