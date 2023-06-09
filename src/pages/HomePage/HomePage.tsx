import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert/Alert";

import BlogCard from "../../components/BlogCard/BlogCard";
import { POST_URI} from "../../utils/Constants";
import { deletePostByID } from "../../utils/apis/api";
import { Blog } from "../../Types/BlogCardType.types";

import "./HomePage.css";

const HomePage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  //For Toast mesage
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  //For Toast message

  useEffect(() => {
    try {
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchPosts = async () => {
    const data = await fetch(POST_URI.concat("&select=title,body,userId"));
    const postDetails = await data.json();
    setBlogs(postDetails.posts);
  };

  const handleDeleteClick = async(id:string) => {
  
    const response = await deletePostByID(id);
    if(response?.ok){
     setBlogs((prevBlogs: any[]) => prevBlogs.filter((blog) => blog.id !== id));
     setOpen(true);
      }
    }

  return (
    
    <div className="home-page">
      <div className="home-page-blogs">
        {blogs ? (
          blogs.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                title={blog.title}
                userId={blog.userId}
                body={blog.body}
                id={blog.id}
                handleDeleteClick={handleDeleteClick}
              />
            );
          })
        ) : (
          <div className="home-page-eror">
            Request limit exceeded, try again after 60 sec{" "}
          </div>
        )}

        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Post Deleted Successfully!
         </Alert>
        </Snackbar>

      </div>
    </div>
  );
};

export default HomePage;
