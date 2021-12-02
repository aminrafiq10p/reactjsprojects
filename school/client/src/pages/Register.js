import { Link } from "react-router-dom";
import { useState } from "react";
import validator from 'validator';
import axios from 'axios';

import InputField from "../components/InputField";

const Register = () => {
  const [enteredRegister, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [errorState, setRegisterErrors] = useState({
    fullnameError: "",
    emailError: "",
    passwordError: "",
    repasswordError: "",
  });

  const handleChange = (e) => {
    setRegister({ ...enteredRegister, [e.target.name]: e.target.value });
  };

  async function submitForm(e) {
    e.preventDefault();
    const fullname = enteredRegister.fullname.trim();
    const email = enteredRegister.email.trim();
    const password = enteredRegister.password;
    const repassword = enteredRegister.repassword;

    if (fullname === "") {
      errorState.fullnameError = "Please enter fullname";
    } else {
      errorState.fullnameError = "";
    }

    if (email === "") {
      errorState.emailError = "Please enter email";
    } else {
      if (!validator.isEmail(email)) {
        errorState.emailError = "Incorrect email";
      } else {
        errorState.emailError = "";
      }
    }

    if (password === "") {
      errorState.passwordError = "Please enter password";
    } else {
      errorState.passwordError = "";
    }

    if (repassword === "") {
      errorState.repasswordError = "Please enter password again";
    } else {
      if (repassword !== password) {
        errorState.repasswordError = "Passwords do not match";
      } else {
        errorState.repasswordError = "";
      }
    }
    setRegisterErrors({ ...errorState });

    if (errorState.fullnameError === "" && errorState.emailError === "" && errorState.passwordError === "" && errorState.repasswordError === "") {

      try {
        const { data } = await axios.post('http://localhost:4000/register', { fullname: fullname, email: email }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        console.log('form posted');
        console.log(data);
      } catch (error) {
        console.error('There was an error!', error);
      }
      //setRegister({ fullname: "", email: "", password: "", repassword: "" });
    }
    /*
 
    if ( ) {
      console.log('form posted');
      setRegister({ fullname: "", email: "", password: "", repassword: "" });
      setRegisterErrors({ fullnameError: "", emailError: "", passwordError: "", repasswordError: "" })
    }
    */
  }

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1>
              <b>My</b>School
            </h1>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Register a new membership</p>
            <form onSubmit={submitForm} autoComplete="off" noValidate>
              <div className="formInputBlock">
                <div className="input-group">
                  <InputField
                    onChange={handleChange}
                    input={{
                      type: "text",
                      id: "fullname",
                      name: "fullname",
                      value: enteredRegister.fullname,
                      className: "form-control",
                      placeholder: "Full name",
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                {errorState.fullnameError && (
                  <div
                    style={{
                      fontSize: 14,
                      color: "red",
                      paddingLeft: "4px",
                    }}
                  >
                    {errorState.fullnameError}
                  </div>
                )}
              </div>

              <div className="formInputBlock">
                <div className="input-group">
                  <InputField
                    onChange={handleChange}
                    input={{
                      type: "email",
                      id: "email",
                      name: "email",
                      value: enteredRegister.email,
                      className: "form-control",
                      placeholder: "Email",
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                {errorState.emailError && (
                  <div
                    style={{
                      fontSize: 14,
                      color: "red",
                      paddingLeft: "4px",
                    }}
                  >
                    {errorState.emailError}
                  </div>
                )}
              </div>

              <div className="formInputBlock">
                <div className="input-group">
                  <InputField
                    onChange={handleChange}
                    input={{
                      type: "password",
                      id: "password",
                      name: "password",
                      value: enteredRegister.password,
                      className: "form-control",
                      placeholder: "Password",
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                {errorState.passwordError && (
                  <div
                    style={{
                      fontSize: 14,
                      color: "red",
                      paddingLeft: "4px",
                    }}
                  >
                    {errorState.passwordError}
                  </div>
                )}
              </div>

              <div className="formInputBlock">
                <div className="input-group">
                  <InputField
                    onChange={handleChange}
                    input={{
                      type: "password",
                      id: "repassword",
                      name: "repassword",
                      value: enteredRegister.repassword,
                      className: "form-control",
                      placeholder: "Retype Password",
                    }}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                {errorState.repasswordError && (
                  <div
                    style={{
                      fontSize: 14,
                      color: "red",
                      paddingLeft: "4px",
                    }}
                  >
                    {errorState.repasswordError}
                  </div>
                )}
              </div>

              <div className="row">
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </div>
            </form>
            <Link to="/" className="text-center">
              I already have a membership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
