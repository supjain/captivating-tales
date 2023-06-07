import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import fetchCommentsByPostID from '../../utils/apis/api';
import BlogData from '../../utils/BlogData';
import { Comment } from './BlogDetails.types';

import './BlogDetails.css'

const BlogDetails = () => {
  const { id } = useParams();
  const [comments,setComments]=useState([])
  
  useEffect(() => {
    const fetchComments = async () => {
        const jsonData = await fetchCommentsByPostID(id);
        setComments(jsonData.comments);
    };
    fetchComments();
  }, [id]);

  const blogData=BlogData.filter((blog)=>(blog.id).toString()===id)
    return (
    <div className="blog-details-page">
    <h3>{blogData[0].title}</h3>
    <hr />
    <h5>Authored By: {blogData[0].author}</h5>
    <h5>Published on: {blogData[0].date}</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <div className="comments">
      <h4>Comments</h4>
      {comments.length?comments.map((comment:Comment)=>{
        return ( <div className="comment">
        <h6>{comment?.user?.username}</h6>
        <p>{comment?.body}</p>
      </div>
      )
      }):
      <p>Loading comments...</p>}
    </div>
    </div>
    );
  }
  
  export default BlogDetails;


