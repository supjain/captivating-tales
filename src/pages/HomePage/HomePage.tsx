import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import { POST_URI, USER_URI } from "../../utils/Constants";

import "./HomePage.css";

const HomePage = () => {
  
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    fetchPosts();
  },[])

  const fetchPosts = async () => {
    const data=await fetch(POST_URI.concat('&select=title,body,userId'));
    const postDetails= await data.json();

    for (let index = 0; index < postDetails.posts.length; index++) {

    const element = postDetails.posts[index];
     const data1 = await fetch(USER_URI.concat(element.userId));
     const userDetails= await data1.json();
     element['name']=userDetails.firstName.concat(' ').concat(userDetails.maidenName).concat(' ').concat(userDetails.lastName);

    }
    setBlogs(postDetails.posts);
  }

  return (
    <div className="home-page">
      <div className="home-page-blogs">
       {blogs && blogs.map((blog :any) =>{
         return <BlogCard key={blog.id} title={blog.title} author={blog.name} body={blog.body} id={blog.id}/>
       })}
      </div>
    </div>
  );
};

export default HomePage;
