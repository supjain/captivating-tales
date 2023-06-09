
import { Link } from "react-router-dom";
import React from 'react';
import { useEffect, useState } from "react";
import { FaTrash} from 'react-icons/fa';

import { IBlogCardProps } from "../../Types/BlogCardType.types";
import { USER_URI } from "../../utils/Constants";
import { Tooltip } from "@mui/material";

import "./BlogCard.css";

const BlogCard : React.FC<IBlogCardProps> = ({
  userId,
  title,
  id,
  body,
  handleDeleteClick
}) => {
  const [author,setAuthor] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await fetch(USER_URI.concat(userId));
      const userDetails = await data.json();
      const name = userDetails
        ? userDetails.firstName
            .concat(" ")
            .concat(userDetails.maidenName)
            .concat(" ")
            .concat(userDetails.lastName)
        : userId;
      setAuthor(name);
    } catch (error) {
      setAuthor(userId);
    }
  };
  return (
    <div className="blog-card">
            <div className="blog-author-with-delete-icon">
            <Link className="blog-link" to={`/blogdetails/${id}`}>
            <h4>{author}</h4>
            </Link>
            <Tooltip title="Deletes the post" placement="top">
        <button onClick={()=>{
          handleDeleteClick(id)}}>
          <FaTrash />
        </button>
      </Tooltip>
            </div>
            <div className="blog-title">
            <h1>{title}</h1>
            </div>
            <div className="blog-description">{body}</div>
         
    </div>
  );
};
export default BlogCard;
