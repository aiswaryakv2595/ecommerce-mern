import React from "react";
import { Link } from "react-router-dom";
import { blog_01 } from "../images";

const BlogCard = () => {
  return (
    
      <div className="blog-card">
        <div className="card-image">
          <img src={blog_01} className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">17 Dec 2024</p>
          <h5 className="title">A beautiful Wednesday</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            odit rerum officia perferendis ducimus nostrum!
          </p>
          <Link className="button" to="/blog/:id">
            Read More
          </Link>
        </div>
      </div>
    
  );
};

export default BlogCard;
