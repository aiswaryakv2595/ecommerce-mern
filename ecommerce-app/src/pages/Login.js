import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <div className="login-wrapper home-wrapper-2 py-5">
       <div className="container-xxl">
       <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-10">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={" "}
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
       </div>
      </div>
    </>
  );
};

export default Login;
