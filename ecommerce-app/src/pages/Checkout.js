import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { watch } from "../images";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Digitech</h3>
                <nav
                  className="--bs-breadcrumb-divider"
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={"/cart"} className="text-dark total-price">Cart</Link>
                    </li>
                    <li className="breadcrumb-item active total-price" aria-current="page">
                      Information
                    </li>
                    <li className="breadcrumb-item">
                      <Link to={"/cart"} className="text-dark total-price" >Payment</Link>
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">User details</p>
                <h4 className="mb-3">Shipping Form</h4>
                <form
                  action=""
                  className="d-flex justify-content-between gap-15 flex-wrap"
                >
                  <div className="w-100">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="w-100">
                    <input type="text" className="form-control" placeholder="Address" />
                  </div>
                  <div className="w-100">
                    <input type="text" className="form-control" placeholder="Apartment" />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" className="form-control" placeholder="City" />
                  </div>
                  <div className="flex-grow-1">
                    <select
                      name=""
                      id=""
                      className="form-control form-select"
                    >
                        <option value="" selected disabled>Select State</option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" className="form-control" placeholder="Zip Code" />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to={"/cart"} className="text-dark">
                            <IoIosArrowBack className="me-2"/>
                            Return to Cart</Link>
                        <Link to={""} className="button">Continue to Shipping</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
                <div className="border-bottom py-4">
                    <div className="d-flex gap-10 align-items-center">
                    <div className="w-75 d-flex gap-10 mb-2">
                        <div className="w-25 position-relative">
                            <span className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                            style={{top:"-10px",right:"2px"}}>1</span>
                            <img src={watch} className="img-fluid" alt="product" />
                        </div>
                        <div>
                            <h5 className="total-price">dfsv</h5>
                            <p className="total-price">s/#osvdok</p>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <h5 className="total">$100</h5>
                    </div>
                    </div>
                </div>
                <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="total">Subtotal</p>
                    <p className="total-price">$1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="total">Shipping</p>
                    <p className="total-price">$1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center py-4">
                    <h4 className="total">Total</h4>
                    <h5 className="total-price">$1000</h5>
                </div>
                </div>
                
            </div>
          </div>
      
      </Container>
    </>
  );
};

export default Checkout;
