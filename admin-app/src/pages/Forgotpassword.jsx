import React from "react";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <div
      className="py-5 d-flex align-items-center justify-content-center"
      style={{ background: "#FFD151", minHeight: "100vh" }}
    >
      <div className="my-5 w-30 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Forgot Password</h3>
        <p className="text-center">
          Please enter your registered mail to get reset password mail
        </p>
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />

          <button
            type="submit"
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
