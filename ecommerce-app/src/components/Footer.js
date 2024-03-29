import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin,BsGithub,BsYoutube,BsInstagram } from "react-icons/bs";
import { newsletter } from '../images';


const Footer = () => {
  return (
    <>
  <footer className='py-4'>
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col-5">
          <div className="footer-top-data d-flex gap-15 align-items-center">
            <img src={newsletter} alt="newsletter" />
            <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
          </div>
        </div>
        <div className="col-7">
        <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  Subscribe
                </span>
              </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className='py-4'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <h4 className='text-white mb-4'>Contact Us</h4>
          <div>
            <address className='text-white fs-6'>770 Williamson Mission, West Sophiefurt, VT 80639-6187</address>
            <a href="tel:+91 9988778766" className='mt-4 d-block mb-2 text-white'>+91 9988778766</a>
            <a href="mailto:sample@gmail.com" className='mt-4 d-block mb-2 text-white'>sample@gmail.com</a>
            <div className="social_icons d-flex align-items-center gap-15">
              <a href="/"> <BsLinkedin className='text-white fs-5'/></a>
              <a href="/"> <BsInstagram className='text-white fs-5'/> </a>
              <a href="/"> <BsYoutube className='text-white fs-5'/> </a>
              <a href="/"> <BsGithub className='text-white fs-5'/></a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <h4 className='text-white mb-4'>Information</h4>
          <div className='footer-links d-flex flex-column'>
            <Link className="text-white py-2 mb-1" to={"/privacy-policy"}>Privacy Policy</Link>
            <Link className="text-white py-2 mb-1" to={"/refund-policy"}>Refund Policy</Link>
            <Link className="text-white py-2 mb-1" to={"/shipping-policy"}>Shipping Policy</Link>
            <Link className="text-white py-2 mb-1" to={"/terms-condition"}>Terms & Conditions</Link>
            <Link className="text-white py-2 mb-1" to={"/blogs"}>Blogs</Link>
          </div>
        </div>
        <div className="col-3">
          <h4 className='text-white mb-4'>Account</h4>
          <div className='footer-links d-flex flex-column'>
            <Link className="text-white py-2 mb-1">About Us</Link>
            <Link className="text-white py-2 mb-1">FAQ</Link>
            <Link className="text-white py-2 mb-1">Contact</Link>
          </div>
        </div>
        <div className="col-2">
          <h4 className='text-white mb-4'>Quick Links</h4>
          <div className='footer-links d-flex flex-column'>
            <Link className="text-white py-2 mb-1">Laptops</Link>
            <Link className="text-white py-2 mb-1">Headphones</Link>
            <Link className="text-white py-2 mb-1">Tablets</Link>
            <Link className="text-white py-2 mb-1">Watch</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className='py-4'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <p className="text-center mb-0 text-white"> &copy; {new Date().getFullYear()}: Powered by Developers</p>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer