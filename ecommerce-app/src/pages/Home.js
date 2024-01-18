import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import FamousCard from "../components/FamousCard";
import Meta from "../components/Meta";
const Home = () => {
  return (
    <>
    <Meta title={"Digitech"}/>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4 className="text-uppercase">super charged for pros</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.0 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-uppercase">super charged for pros</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.0 or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-uppercase">new arrival</h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From $999.0
                      <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-uppercase">super charged for pros</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.0 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-uppercase">new arrival</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.0 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-15">
                    <img src="images/service.png" alt="services" />
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From All order over $5</p>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center gap-15">
                    <img src="images/service-02.png" alt="services" />
                    <h6>Daily surprice Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center gap-15">
                    <img src="images/service-03.png" alt="services" />
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an Expert</p>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center gap-15">
                    <img src="images/service-04.png" alt="services" />
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center gap-15">
                    <img src="images/service-05.png" alt="services" />
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Head Phones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphone" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Head Phones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <div className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <FamousCard
              images="images/famous-1.jpg"
              heading5="Big Screen"
              heading6="Smart watch Series 7"
              paragraph="From $399 or $16.62/mo for 24 months"
              theme='dark'
            />
              <FamousCard
              images="images/famous-2.jpg"
              heading5="studio display"
              heading6="600 nits of Brightness"
              paragraph="27 inch Display"
              theme='light'
            />
              <FamousCard
              images="images/famous-3.jpg"
              heading5="smart phones"
              heading6="Smart Phone 13 Pro"
              paragraph="Now in Green From $999 or $41.62/mo for 24 months"
              theme='light'
            />
                <FamousCard
              images="images/famous-4.jpg"
              heading5="Home Speakers"
              heading6="Room-filling Sound"
              paragraph="From $699 or $116/mo for 12 months"
              theme='light'
            />
        
          </div>
        </div>
      </div>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <div className="row">
              <div className="col-2">
                <div className="card"></div>
              </div>
              <div className="col-2">
                <div className="card"></div>
              </div>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper ">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brands" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
