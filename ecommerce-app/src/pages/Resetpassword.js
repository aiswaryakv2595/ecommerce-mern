import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Resetpassword = () => {
  return (
    <>
    <Meta title={"Reset Password"} />
    <BreadCrumb title="Reset Password" />
    <Container class1="login-wrapper home-wrapper-2 py-5">
        
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-10">
               <CustomInput
                type="text"
                name="password"
                placeholder="New Password" />
                <div className="mt-1">
                  <CustomInput type="password"
                    name="confpassword"
                    placeholder="Confirm Password" />
                </div>
                <div>
                  
                  <div className="d-flex justify-content-center gap-10 align-items-center mt-3">
                    <button className="button border-0">Reset</button>
                   
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

export default Resetpassword