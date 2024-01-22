import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="py-5 d-flex align-items-center justify-content-center"
      style={{ background: "#FFD151", minHeight: "100vh" }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />
          <CustomInput type="password" label="Password" id="password" />
          <div className="mb-3 text-end">
          <Link to={"/forgot-password"} className="text-decoration-none text-dark">Forgot Password?</Link>
          </div>
          <Link
            to="/admin"
            className="border-0 px-3 py-2 text-white w-100 fw-bold text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
