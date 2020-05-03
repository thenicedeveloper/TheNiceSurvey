import React, { Fragment } from "react";
import "./register.css";

const Register = () => {

    return(
        <Fragment>
          <form className="form-container" >
            <h1 className="form-title">Register</h1>
            <div className="input-container">
              <i className="fa fa-user icon"></i>
              <input
                className="input-field"
                type="text"
                placeholder="Full Name"
                name="fullName"
                
                noValidate
              />
              
            </div>

            <div className="input-container">
              <i className="fa fa-envelope icon"></i>
              <input
                className="input-field"
                type="text"
                placeholder="Email"
                name="email"
                
                noValidate
              />
              
              
            </div>

            <div className="input-container">
              <i className="fa fa-key icon"></i>
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="password"
               
                noValidate
              />
              
            </div>
            <div className="input-container">
              <i className="fa fa-key icon"></i>
              <input
                className="input-field"
                type="password"
                placeholder="Confirm Password"
                name="password2"
                
                noValidate
              />
              
            </div>

            <div className="input-container">
              <button
                type="button"
                className="btn-signin"
                
              >
                Register
              </button>
            </div>
          </form>  
        </Fragment>
    );
}

export default Register;