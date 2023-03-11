import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../Data.js';
import './Blog.css';
import { Link } from 'react-router-dom';
import NotFound from '../../NotFound/NotFound';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/blogs'>
        <span> &#8592;</span> <span>بازگشت</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>تهیه شده {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
            </div>
          </header>
          <img src={blog.cover}  alt='عکس مقاله ' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Blog;
