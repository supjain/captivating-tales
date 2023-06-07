import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import { POST_URI, USER_URI } from "../../utils/Constants";

import "./HomePage.css";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

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
              />
            );
          })
        ) : (
          <div className="home-page-eror">
            Request limit exceeded, try again after 60 sec{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
