import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { commentActions } from "../store/commentSlice";

const Comment = () => {  
  const commentSlice =  useSelector(Store=> Store.commentSlice)
  // const dispatch = useDispatch();
  
  const nameVal = useRef();
  const emailVal = useRef();
   const commentVal = useRef();

 const handleSubmit = (event) => {
    event.preventDefault();
    const name  =    nameVal.current.value;
    const email =   emailVal.current.value;
    const comment = commentVal.current.value;
   
    nameVal.current.value='';
    emailVal.current.value='';
    commentVal.current.value='';
    // dispatch(commentActions.addComment(name,email,comment))
 }
 
  return <>
  <h1 className="latestComment">Latest Comment :</h1>
   {commentSlice.map((comments)=> 
  <div className="card w-75 mb-3"key={comments.name} >
  <div className="card-body">
  <h5>{new Date().toLocaleString()}</h5>
    <h1>{comments.name}</h1>
    <p>{comments.comment}</p>
    <h3>{comments.email}</h3>
    <a href="/
    ">Reply</a>
  </div>
</div>
)}
   
  <div className="contact-form comment">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameVal} name="name" placeholder="Your Name" required/>
        <input type="email" ref={emailVal} name="email" placeholder="Your Email" required/>
        <textarea name="comment" ref={commentVal} placeholder="Your Comment" required></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
     
  </>
}

export default Comment