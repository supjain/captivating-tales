import React, { useState } from "react";
import BlogData from "../../utils/BlogData";
import { Link } from 'react-router-dom';
import "./BasicPagination.css";

const BasicPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 8;

  const indexOfLastBlog = currentPage * blogsPerPage;

  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const currentBlogs = BlogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="a">
        {currentBlogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <Link to={`/blogdetails/${blog.id}`}>{blog.title}</Link>
            <h2>{blog.title}</h2>

            <p>{blog.author}</p>

            <p>{blog.date}</p>
          </div>
        ))}
        <div>
          <ul className="pagination">
            {Array.from({
              length: Math.ceil(BlogData.length / blogsPerPage),
            }).map((_, index) => (
              <li
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => paginate(index + 1)}
              >
                <a href="#">{index + 1}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BasicPagination;
