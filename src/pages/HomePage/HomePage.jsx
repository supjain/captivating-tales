import BlogCard from "../../components/BlogCard/BlogCard";
import BasicPagination from "../../components/Pagination/BasicPagination";
import blogs from "../../utils/BlogData";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page blog">
        {blogs &&
          blogs.map((blog) => (
            <BlogCard
              title={blog.title}
              author={blog.author}
              date={blog.date}
            />
          ))}
      </div>
      <div className="pagination">
        <BasicPagination />
      </div>
    </div>
  );
};

export default HomePage;
