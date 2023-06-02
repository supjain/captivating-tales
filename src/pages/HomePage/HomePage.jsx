import BlogCard from "../../components/BlogCard/BlogCard";
import BasicPagination from "../../components/Pagination/BasicPagination";
import blogs from "../../utils/BlogData";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="pagination">
        <BasicPagination />
      </div>
    </div>
  );
};

export default HomePage;
