import { Link } from "react-router-dom"


const Blog = () => {

    return(
        <div className='blog-link'>
      <Link className="profile-link" to={`/blogdetails`}>
       Blog 1
      </Link>
      </div>
    );
}

export default Blog;