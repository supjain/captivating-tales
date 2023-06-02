import { useParams } from 'react-router-dom';
import './BlogDetails.css'
import BlogData from '../../utils/BlogData';
const BlogDetails = () => {
  const { id } = useParams();

  const blogData=BlogData.filter((blog)=>(blog.id).toString()===id)
    return (
    <div className="blog-details-page">
    <h3>{blogData[0].title}</h3>
    <hr />
    <h5>Authored By: {blogData[0].author}</h5>
    <h5>Published on: {blogData[0].date}</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    );
  }
  
  export default BlogDetails;