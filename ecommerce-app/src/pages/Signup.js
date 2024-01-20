import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Signup = () => {
  return (
    <>
    <Meta title={"Sign Up"} />
    <BreadCrumb title="Sign Up" />
    <Container class1="login-wrapper home-wrapper-2 py-5">
      
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Create Account</h3>
            <form action="" className="d-flex flex-column gap-10">
              
              <CustomInput type="text"
                  name="firstname"
                  placeholder="First Name" />
                  <CustomInput type="text"
                  name="lastname"
                  placeholder="Last Name" />
              <CustomInput type="tel"
                  name="mobile"
                  placeholder="Mobile Number" />
                  
                   <CustomInput  type="email"
                  name="email"
                  placeholder="Email" />
             
           
             
              <div className="mt-1">
               <CustomInput type="password"
                  name="password"
                  placeholder="Password" />
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
      
    </Container>
  </>
  )
}

export default Signup