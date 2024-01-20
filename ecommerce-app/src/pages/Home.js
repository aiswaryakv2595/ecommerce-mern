import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import FamousCard from "../components/FamousCard";
import Meta from "../components/Meta";

import { main_banner_1,catbanner_01,
  catbanner_02,
  catbanner_03,
  catbanner_04,
  service,
  service2,
  service3,
  service4,
  service5,
  camera,
  headphone,
  tv,
  famous_1,
  famous_2,
  famous_3,
  famous_4, 
  brand_01,
  brand_02,
  brand_03,
  brand_04,
  brand_05,
  brand_06,
  brand_07,
  brand_08 } from "../images";
import Container from "../components/Container";
import {services} from "../utils/Data"
const Home = () => {
  return (
    <>
    <Meta title={"Digitech"}/>
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src={main_banner_1}
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
                    src={catbanner_01}
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
                    src={catbanner_02}
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
                    src={catbanner_03}
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
                    src={catbanner_04}
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
    </Container>
   <Container class1="home-wrapper-2 py-5">
   <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {
                  services?.map((i,j)=>{
                    return(
                    <div className="d-flex-align-items-center gap-15" key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                    )
})
                }
                
              </div>
            </div>
          </div>
   </Container>
     <Container class1="home-wrapper-2 py-5">
     <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="tv" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Head Phones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphone} alt="headphone" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="tv" />
                </div>
                <div className="col-md-3 d-flex gap align-items-center">
                  <div>
                    <h6>Head Phones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={headphone} alt="headphone" />
                </div>
              </div>
            </div>
          </div>
     </Container>
   <Container class1="featured-wrapper py-5 home-wrapper-2">
   <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
   </Container>
    <Container class1="famous-wrapper py-5 home-wrapper-2">
    <div className="row">
            <FamousCard
              images={famous_1}
              heading5="Big Screen"
              heading6="Smart watch Series 7"
              paragraph="From $399 or $16.62/mo for 24 months"
              theme='dark'
            />
              <FamousCard
              images={famous_2}
              heading5="studio display"
              heading6="600 nits of Brightness"
              paragraph="27 inch Display"
              theme='light'
            />
              <FamousCard
              images={famous_3}
              heading5="smart phones"
              heading6="Smart Phone 13 Pro"
              paragraph="Now in Green From $999 or $41.62/mo for 24 months"
              theme='light'
            />
                <FamousCard
              images={famous_4}
              heading5="Home Speakers"
              heading6="Room-filling Sound"
              paragraph="From $699 or $116/mo for 12 months"
              theme='light'
            />
        
          </div>
    </Container>
     <Container class1="special-wrapper py-5 home-wrapper-2">
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
     </Container>
     <Container class1="popular-wrapper py-5 home-wrapper-2">
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
     </Container>
     <Container class1="marque-wrapper py-5">
     <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper ">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand_01} alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_02} alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_03} alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_04} alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_05} alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_06} alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_07} alt="brands" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand_08} alt="brands" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
     </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
          </div>
      </Container>
      
    </>
  );
};

export default Home;
