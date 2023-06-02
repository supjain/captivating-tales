import "./BlogCard.css";

const BlogCard = ({ title, author, date }) => {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{date}</p>
    </div>
  );
};
export default BlogCard;
