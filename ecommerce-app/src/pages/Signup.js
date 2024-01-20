import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Signup = () => {
  return (
    <>
    <Meta title={"Sign Up"} />
    <BreadCrumb title="Sign Up" />
    <div className="login-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Create Account</h3>
            <form action="" className="d-flex flex-column gap-10">
              <div>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="form-control"
                  
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
             
              <div className="mt-1">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  />
              </div>
              <div>
                
                <div className="d-flex justify-content-center gap-10 align-items-center mt-3">
                  <button className="button border-0">Sign Up</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default Signup