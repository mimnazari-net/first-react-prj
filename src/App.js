import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';

//pages
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Blog from './components/pages/Blogs/Blog/Blog';
import SignUp from './components/pages/SignUp/SignUp';
import Celebrities from './components/pages/Celebirites/Celebrities';
import ContactUs from './components/pages/ContactUs/Contact'
import NotFound from './components/pages/NotFound/NotFound';
import Blogs from './components//pages/Blogs/Blogs'

//components
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';



function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element = {<Home /> } />
          <Route path='/services' element={<Services /> } />
          <Route path='/blogs' element= {<Blogs />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/celebrities' element={<Celebrities />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>  
      <Footer />
    </Router>
  );
}

export default App;
