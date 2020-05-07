import React, { Fragment, useState } from "react";
import "./register.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Register = (props) => {
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

  const handleFullName = (e) => {
    e.preventDefault();

    if (e.target.value.length < 5) {
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
    if (e.target.value.length < 8) {
      setErrPassword("Password must be 8 characters long!");
    } else {
      setErrPassword("");
    }
    setPassword(e.target.value);
  };
  const handlePassword2 = (e) => {
    e.preventDefault();

    if (e.target.value !== password) {
      setErrPassword2("Passwords must match!");
    } else {
      setErrPassword2("");
    }

    setPassword2(e.target.value);
  };

  const handleShow = () => setShow(true);    
  const handleClose = () => {
    setShow(false);
    props.history.push("/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      `Values => ${fullName} - ${email} - ${password} - ${password2}`
    );
    // ToDo: Do form validation before posting

    try {
      const response = await axios.post("/api/register", {
        name: fullName,
        email: email,
        password: password,
        password2: password2,
      });
      console.log(
        `returned data: ${response.data} - ${response.status} - ${response.statusText}`
      );
      setUserStatus(response.data);
      handleShow();  
    } catch (error) {
      console.log(`Axios post failed: ${error}`);
      //setUserStatus(error.response.data)
      //handleShow();
    }
  };

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
          <button type="button" onClick={handleSubmit}>
            Register
          </button>
        </div>
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Information</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{userStatus}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Register;
