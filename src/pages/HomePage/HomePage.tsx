import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import { POST_URI, USER_URI } from "../../utils/Constants";

import "./HomePage.css";

interface Blog {
  id: string;
  title: string;
  userId: string;
  body: string;
}

const HomePage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

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

  const fetchMorePosts = async () => {
    setIsLoading(true);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !isLoading &&
      hasMore
    ) {
      fetchMorePosts();
    }
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
      {isLoading && (
        <p className="a">
          <img src="https://i.stack.imgur.com/hzk6C.gif"></img>
        </p>
      )}
    </div>
  );
};

export default HomePage;
