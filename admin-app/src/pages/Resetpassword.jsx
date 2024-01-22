import React from "react";
import CustomInput from "../components/CustomInput";

const Resetpassword = () => {
  return (
    <div
      className="py-5 d-flex align-items-center justify-content-center"
      style={{ background: "#FFD151", minHeight: "100vh" }}
    >
       <div className="my-5 w-50 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Reset Password</h3>
        <p className="text-center">Login to your account to continue</p>
        <form action="">
          <CustomInput type="password" label="New Password" id="pass" />
          <CustomInput
            type="password"
            label="Confirm Password"
            id="confirmpass"
          />
          <button
            type="submit"
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
