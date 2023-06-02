// import React from "react";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

// const BasicPagination = () => {
//   return (
//     <div>
//       <Stack spacing={2}>
//         <Pagination count={10} color="primary" />
//       </Stack>
//     </div>
//   );
// };

// export default BasicPagination;

import React, { useState } from "react";
import BlogData from "../../utils/BlogData";
import "./BasicPagination.css";

const BasicPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 8;
  // Calculate the index of the first and last blog on the current page

  const indexOfLastBlog = currentPage * blogsPerPage;

  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  //const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const currentBlogs = BlogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="a">
        {currentBlogs.map((blog, index) => (
          <div key={index} className="blog-card">
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
