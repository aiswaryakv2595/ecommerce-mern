import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {useDispatch,useSelector}  from 'react-redux'
import { login } from "../features/auth/authSlice";


let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values))
      alert(JSON.stringify(values, null, 2));
    },
  });
  const {user,isLoading,isError,isSuccess,message} = useSelector(
    (state) => state.auth
  )
  useEffect(()=>{
      if(!user==null || isSuccess){
        navigate('admin')
      }
      else{
        alert("not")
      }
  },[user,isLoading,isError,isSuccess,message])
  return (
    <div
      className="py-5 d-flex align-items-center justify-content-center"
      style={{ background: "#FFD151", minHeight: "100vh" }}
    >
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="email"
            label="Email Address"
            onCh={formik.handleChange("email")}
            val={formik.values.email}
            id="email"
          />
          <div className="error">
          {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
          </div>
          <CustomInput
            type="password"
            name="password"
            label="Password"
            onCh={formik.handleChange("password")}
            val={formik.values.password}
            id="password"
          />
          <div className="error">
          {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
          </div>
          <div className="mb-3 text-end">
            <Link
              to={"/forgot-password"}
              className="text-decoration-none text-dark"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 text-white w-100 fw-bold text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
