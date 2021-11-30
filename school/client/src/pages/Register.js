import { Link } from "react-router-dom";
import { useState } from "react";

import InputField from "../components/InputField";

const Register = () => {
  const [enteredRegister, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [errorState, setLoginErrors] = useState({
    fullnameError: "Please enter fullname",
    emailError: "Please enter email",
    passwordError: "",
    repasswordError: "",
  });

  const handleChange = (e) => {
    setRegister({ ...enteredRegister, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const fullname = enteredRegister.fullname;
    const email = enteredRegister.email;
    const password = enteredRegister.password;
    const repassword = enteredRegister.repassword;

    if (
      fullname !== "" &&
      email !== "" &&
      password !== "" &&
      repassword !== ""
    ) {
      console.log("form posted");
      setRegister({ fullname: "", email: "", password: "", repassword: "" });
    } else {
    }
  };

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
            <form onSubmit={submitForm} autoComplete="off">
              <div className="formInputBlock">
                <div className="input-group">
                  <InputField
                    onChange={handleChange}
                    input={{
                      type: "text",
                      id: "fullname",
                      name: "fullname",
                      defaultValue: enteredRegister.fullname,
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
                      defaultValue: enteredRegister.email,
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
                      defaultValue: enteredRegister.password,
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
              </div>

              <div className="input-group mb-3">
                <InputField
                  onChange={handleChange}
                  input={{
                    type: "password",
                    id: "repassword",
                    name: "repassword",
                    defaultValue: enteredRegister.repassword,
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
