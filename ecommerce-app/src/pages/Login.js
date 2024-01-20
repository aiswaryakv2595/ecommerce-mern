import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
       
       <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-10">
                <CustomInput
                 type="email"
                 name="email"
                 placeholder="Email" />
                <div className="mt-1">
                 <CustomInput type="password"
                    name="password"
                    placeholder="Password" />
                </div>
                <div>
                  <Link to={"/forgot-password"}>Forgot Password</Link>
                  <div className="d-flex justify-content-center gap-10 align-items-center mt-3">
                    <button className="button border-0">Login</button>
                    <Link className="button signup" to={"/signup"}>SignUp</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
       
      </Container>
    </>
  );
};

export default Login;
