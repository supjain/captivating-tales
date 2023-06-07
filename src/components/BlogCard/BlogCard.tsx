import { IBlogCardProps } from "../../Types/BlogCardType.types";
import { Link } from "react-router-dom";

import "./BlogCard.css";
import { useEffect, useState } from "react";
import { USER_URI } from "../../utils/Constants";

const BlogCard : React.FC<IBlogCardProps> = ({
  userId,
  title,
  id,
  body
}) => {
  const [author,setAuthor] = useState('');

  useEffect(()=>{
      fetchUsers();  
  },[])

  const fetchUsers = async () => {
    try {
      const data = await fetch(USER_URI.concat(userId));
      const userDetails= await data.json();
      const name= userDetails?userDetails.firstName.concat(' ').concat(userDetails.maidenName).concat(' ').concat(userDetails.lastName):userId;
       setAuthor(name);
    } catch (error) {
      setAuthor(userId);
    }
  
  }
  return (
    <div className="blog-card">
            <Link className="blog-link" to={`/blogdetails/${id}`}>
            <h4>{author}</h4>
            <div className="blog-title">
            <h1>{title}</h1>
            </div>
            <div className="blog-description">{body}</div>
            </Link>
    </div>
  );
};
export default BlogCard;
