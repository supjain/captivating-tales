import React, { useEffect, useRef, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import BlogCard from "../../components/BlogCard/BlogCard";
import { POST_URI } from "../../utils/Constants";
import { deletePostByID } from "../../utils/apis/api";
import { Blog } from "../../Types/BlogCardType.types";
import Search from "../../components/Search/Search";

import "../../components/CircularProgress/CircularProgress";
import "./HomePage.css";


const HomePage = () => {

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isHomeFetch,setIsHomeFetch]=useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);//For Toast message

  const divRef = useRef(null);
  
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  //For Toast message
  useEffect(() => {
    try {
      if(isHomeFetch)
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  }, [isHomeFetch]);

  const fetchPosts = async () => {
    const data = await fetch(POST_URI.concat("&select=title,body,userId"));
    const postDetails = await data.json();
    setBlogs(postDetails.posts);
  };

  const handleDeleteClick = async (id: string) => {
    const response = await deletePostByID(id);
    if (response?.ok) {
      setBlogs((prevBlogs: any[]) =>
        prevBlogs.filter((blog) => blog.id !== id)
      );
      setOpen(true);
    }
  };

  const fetchMorePosts = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    try {
      const data = await fetch(
        `${POST_URI}&page=${page}&select=title,body,userId`
      );
      const postDetails = await data.json();
      const newBlogs = postDetails.posts;
      if (newBlogs.length === 0) {
        setHasMore(false);
      } else {
        setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };


  const handleScroll = () => {
    const container = divRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if ((scrollTop + clientHeight >= scrollHeight) && !isLoading && hasMore && isHomeFetch) {
        fetchMorePosts();
      }
    }
  };

  return (
    <div className="home-page">
      <div className="home-page-search">
      <Search setBlogs={setBlogs} setIsHomeFetch={setIsHomeFetch}/>
      </div>
      <div ref={divRef} className="home-page-blogs" onScroll={handleScroll}>
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
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Post Deleted Successfully!
          </Alert>
        </Snackbar>
      </div>
      {isLoading && (
        <p className="loader">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </p>
      )}
    </div>
  );
};
export default HomePage;
