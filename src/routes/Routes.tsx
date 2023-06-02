import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import BlogDetails from '../pages/BlogDetails/BlogDetails';
import About from '../pages/About/About';
import Contacts from '../pages/Contacts/Contacts';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const routes = () =>{

    return(
        <div className='app-routes'> 
         <Router>
        <Header/>
          <Routes>
           <Route path="/"  element={<HomePage/>}/>
           <Route path="/blogdetails/:id" element={<BlogDetails/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contacts" element={<Contacts/>}/>
         </Routes>
         <Footer/>
     </Router>
     </div>
    );

}

export default routes;