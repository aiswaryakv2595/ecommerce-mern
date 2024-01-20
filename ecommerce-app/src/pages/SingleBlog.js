import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to={"/blogs"} className="d-flex align-items-center gap-10">
                <HiOutlineArrowNarrowLeft className="fs-4" />
                    Go Back</Link>
                <h3 className="title">Morning renaisance</h3>
                <img src="/images/blog-1.jpg" className="img-fluid w-100 my-4" alt="blog" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, nisi exercitationem? Provident labore nulla rem
                  sit ex asperiores? Assumenda molestias deserunt molestiae, sit
                  enim adipisci mollitia animi id voluptate vel?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
