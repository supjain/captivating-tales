import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import BlogDetails from '../pages/BlogDetails/BlogDetails';
import About from '../pages/About/About';
import Contacts from '../pages/Contacts/Contacts';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';
import AddModel from '../components/AddModel/AddModel';
import CustomeAlert from '../components/Alert/CustomeAlert';

const RouteBlogs = () =>{
  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
    return(
        <div className='app-routes'> 
         {modalOpen?<AddModel setOpenModal={setModalOpen} setOpen={setOpen}/>: <Router>
        <Header setOpenModal={setModalOpen}/>
          <Routes>
           <Route path="/"  element={<HomePage/>}/>
           <Route path="/blogdetails/:id" element={<BlogDetails/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contacts" element={<Contacts/>}/>
         </Routes>
         <Footer/>
     </Router>}
         {open && <CustomeAlert setOpen={setOpen} open={open}/>}
        
     </div>
    );

}

export default RouteBlogs;