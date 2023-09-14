import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <div id="wrapper">
          <Header />
          <div className="mt-3">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/blog/" element={<Blog/>} />
              <Route path="/blog/:slug" element={<BlogSingle/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>
         
        </div>
      </>
    </BrowserRouter>
    
  );
}

export default App;