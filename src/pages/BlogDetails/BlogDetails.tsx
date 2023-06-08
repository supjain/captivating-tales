import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { fetchCommentsByPostID } from "../../utils/apis/api";
import { Blog, Comment } from "./BlogDetails.types";
import { GET_URI } from "../../utils/Constants";

import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      const jsonData = await fetchCommentsByPostID(id);
      setComments(jsonData.comments);
    };

    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`${GET_URI}/${id}`);
        const data: Blog = await response.json();
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComments();
    fetchBlogDetails();
  }, [id]);

  const formattedTags = blog?.tags.join(" ");

  return (
    <div className="blog-details-page">
      {blog ? (
        <>
          <h3>{blog.title}</h3>
          <hr />
          <h5>Genre: {formattedTags ? formattedTags : <p>Loading...</p>}</h5>
          <h5>Reactions: {blog.reactions}</h5>
          <p>
            <i>{blog.body}</i>
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <div className="comments">
        <h4>Comments</h4>
        {comments.length ? (
          comments.map((comment: Comment) => {
            return (
              <div className="comment">
                <h6>{comment?.user?.username}</h6>
                <p>{comment?.body}</p>
              </div>
            );
          })
        ) : (
          <p>Loading comments...</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
