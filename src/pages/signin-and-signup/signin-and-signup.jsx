import React from "react";
import Signin from "../../components/sign-in/signin";
import SignUp from "../../components/signup/signup";
import "./signin-and-signup.scss";

const SigninAndSignupPage = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <SignUp />
  </div>
);

export default SigninAndSignupPage;
