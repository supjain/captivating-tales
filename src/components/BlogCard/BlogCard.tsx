
import { Link } from "react-router-dom";
import React from 'react';
import { FaTrash} from 'react-icons/fa';

import { IBlogCardProps } from "../../Types/BlogCardType.types";
import { Tooltip } from "@mui/material";

import "./BlogCard.css";

const BlogCard : React.FC<IBlogCardProps> = ({
  title,
  id,
  body,
  handleDeleteClick
}) => {

  return (
    <div className="blog-card">
            <div className="blog-author-with-delete-icon">
            <Tooltip title="Deletes the post" placement="top">
        <button onClick={()=>{
          handleDeleteClick(id)}}>
          <FaTrash />
        </button>
      </Tooltip>
     
            </div>
            <div className="blog-title">
            <Link className="blog-link" to={`/blogdetails/${id}`}>
            <h1>{title}</h1>
            </Link>
            </div>
            <div className="blog-description">{body}</div>
           
    </div>
  );
};
export default BlogCard;
