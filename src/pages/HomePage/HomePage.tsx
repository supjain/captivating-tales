import Blog from '../../components/Blog/Blog';
import './HomePage.css'

const HomePage = () => {
  return (
  <div className="home-page">
    <p>HomePage</p>
    <div className="home-page blog">
      <Blog/>
    </div>
  </div>
  );
}

export default HomePage;