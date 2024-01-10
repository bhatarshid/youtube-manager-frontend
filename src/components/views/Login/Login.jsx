import React, { useState } from "react";
import Bottomleftsvg from "../../../assets/svgs/Bottomleftsvg";
import Toprightsvg from "../../../assets/svgs/Toprightsvg";
import Googlesvg from "../../../assets/svgs/Googlesvg";
import { use_user_auth } from "../../../script/authcontext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {logIn, googleSignIn} = use_user_auth()
  const navigate = useNavigate()


  const submit_login_form= async (event) => {
    event.preventDefault();
    const username = event.target.username.value
    const password = event.target.password.value
    if (username.length ==0 || password.length ==0){
      console.log("username / password should not be empty!")
      return
    }
    try {
     await logIn(username, password)

     navigate('/me')
    }
    catch(err){
      console.log(err)
    }
    console.log(username, password)

    event.target.reset()
  }

  const sign_in_with_google = async (event) =>{
    event.preventDefault()
    try{
        await googleSignIn()
        navigate('/me')
    }
    catch(err){
        console.log(err)
    }
  }
  
  return (
    <div className="container-fluid vh-100">
      <div className="mt-2">
        <h3 className="" style={{color:'#FF6666', fontFamily:'sans-serif'}} >YouTube Manager</h3>
      </div>

      <div className="container d-flex justify-content-center align-items-center flex-column h-75 w-75">
        <div>
          <h4 className="text-muted mb-4">Login</h4>
        </div>
        <div className="w-50">
          <form onSubmit={submit_login_form}>
            <div className="mb-4">
              <label htmlFor="username">Username</label>
              <br />
              <input
                className="w-100 form-control form-control-sm"
                id="username"
                name="username"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <br />
              <input
                className="w-100 form-control form-control-sm"
                id="password"
                name="password"
                type="text"
              />
            </div>
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <button
                className="btn btn-danger rounded-pill btn-sm w-25"
                type="submit"
              >
                login
              </button>
                <a className="link-opacity-80 small" href="/forgotpassword">
                  Forgot Password?
                </a>
            </div>
            <div>
              <p>Dont have an Account Yet?  <a className="link-opacity-80 text-center" href="/signup">
                  Create One
                </a></p>
            </div>
          </form>
        </div>
        <div className="d-flex align-items-center w-50 mb-4">
          <hr className="flex-grow-1" />
          <span className="mx-2 text-muted">Or Login with</span>
          <hr className="flex-grow-1" />
        </div>
        <div>
          <button className="btn btn-outline-primary rounded-pill text-center" type="button" onClick={sign_in_with_google}><Googlesvg/> Sign in with Google</button>
        </div>
      </div>

      <Bottomleftsvg />
      <Toprightsvg />
    </div>
  );
};

export default Login;
