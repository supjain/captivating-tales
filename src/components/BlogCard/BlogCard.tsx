import { IBlogCardProps } from "../../Types/BlogCardType.types";
import { Link } from "react-router-dom";

import "./BlogCard.css";

const BlogCard : React.FC<IBlogCardProps> = ({
  author,
  title,
  id,
  body
}) => {
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
