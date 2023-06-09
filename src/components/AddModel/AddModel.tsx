import { useState } from "react";
import { IAddModelProps } from "../../Types/AddModelType.types";
import { ADD_POST_URI, POST_REQ } from "../../utils/Constants";

import './AddModel.css'

const AddModel: React.FC<IAddModelProps> = (
  props : IAddModelProps
  ) => {

    const [post, setPost] = useState({ title: '', body: '', tags: '' });


    const addBlogRequest= async () => {
      const postReq={
        method: POST_REQ,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: post.title,
          body:post.body,
          userId: '5',
          tags:post.tags
        })
      }
    
      try {
        const data=await fetch(ADD_POST_URI, postReq);
        const addedBlog=await data.json();
        props.setOpen(true)
        if(addedBlog?.ok){
          console.log(addedBlog)
          props.setOpen(true)
        }
        return addedBlog;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
      addBlogRequest()
      // Reset the form fields
      setPost({ title: '', body: '', tags: '' })
      props.setOpenModal(false);
    };

  function handleReset() {
     // Reset the form fields
     setPost({ title: '', body: '', tags: '' })
  }

    return (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  props.setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              <h1>Add Post</h1>
            </div>
      <div className="body">
      <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e?.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e?.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="tags">Tags:</label>
        <input
          type="text"
          id="tags"
          value={post.tags}
          onChange={(e) => setPost({ ...post, tags: e?.target.value })}
          required
        />
      </div>
      <div className="footer">
              <button
                onClick={() => {
                 handleReset();
                }}
                id="cancelBtn"
              >
                Reset
              </button>
              <button type="submit">Save</button>
            </div>
    </form>
  </div>
          </div>
        </div>
      );
   
}
    
export default  AddModel;