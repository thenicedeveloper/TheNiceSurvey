import React, { Fragment, useState } from "react";
import "./register.css";
import axios from "axios";


const Register = () => {
  //State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errName, setErrName] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errPassword2, setErrPassword2] = useState("");
  const [userStatus, setUserStatus] = useState(null);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleFullName = (e) => {
    e.preventDefault();
       
    if(e.target.value.length < 5){
      setErrName("Full name must be 5 characters long!");
    } else {
      setErrName("");
    }
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    if(e.target.value.length < 8){
      setErrPassword("Password must be 8 characters long!");
    } else {
      setErrPassword("");
    }
    setPassword(e.target.value);
  };
  const handlePassword2 = (e) => {
    e.preventDefault();

    if(e.target.value !== password){
      setErrPassword2("Passwords must match!");
    } else {
      setErrPassword2("");
    }

    setPassword2(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(`Values => ${fullName} - ${email} - ${password} - ${password2}`);
    // ToDo: Do form validation before postion

    try {
      const response = await axios.post("/api/register", {
        name: this.state.fullName,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      });
      console.log(`returned data: ${response.data}`);
    } catch (err) {
      console.log(`Axios post failed: ${err.response.data}`);
    }

  }


  return (
    <Fragment>
      <form className="form-container">
        <h1 className="form-title">Register</h1>
        <div className="input-container">
          <i className="fa fa-user icon"></i>
          <input
            className="input-field"
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={handleFullName}
            noValidate
          />
            {errName.length > 0 && (
                <span className="error error-msg" style={{ color: "red" }}>
                  {errName}
                </span>
              )}
        </div>

        <div className="input-container">
          <i className="fa fa-envelope icon"></i>
          <input
            className="input-field"
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleEmail}
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
            onChange={handlePassword}
            noValidate
          />
           {errPassword.length > 0 && (
                <span className="error error-msg" style={{ color: "red" }}>
                  {errPassword}
                </span>
              )}
        </div>
        <div className="input-container">
          <i className="fa fa-key icon"></i>
          <input
            className="input-field"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            onChange={handlePassword2}
            noValidate
          />
           {errPassword2.length > 0 && (
                <span className="error error-msg" style={{ color: "red" }}>
                  {errPassword2}
                </span>
              )}
        </div>

        <div className="input-container">
          <button type="button" onClick={handleSubmit} >
            Register
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
