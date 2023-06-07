import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BlogDetails.css";
import { GET_URI } from "../../utils/Constants";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlogDetails();
  }, []);

  const fetchBlogDetails = async () => {
    try {
      const response = await fetch(`${GET_URI}/${id}`);
      const data = await response.json();
      setBlog(data);
      console.log(blog);
    } catch (error) {
      console.log(error);
      console.log(blog);
    }
  };
  const formattedTags = blog?.tags?.join(" ");
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
    </div>
  );
};
export default BlogDetails;
