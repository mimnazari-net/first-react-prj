import React , { useState } from 'react';
import NotFound from '../NotFound/NotFound'
import { blogList } from './Data.js'
import BlogList from './BlogLists/BlogList';

function Blog() {
  const [blogs, setBlogs] = useState(blogList);

  return (
    <div>

      {/* Blog List & Empty View */}
      {!blogs.length ? <NotFound /> : <BlogList blogs={blogs} />}
    </div>
  );
}

export default Blog;
