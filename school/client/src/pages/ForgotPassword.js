import { Link } from 'react-router-dom';
import { useState } from 'react';

import InputField from "../components/InputField";

const ForgotPassword = () => {
    const [enteredForgotPassword, setForgotPassword] = useState({
        email: ""
    });

    const handleChange = (e) => {
        setForgotPassword({ ...enteredForgotPassword, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        setForgotPassword({ email: "" });
    };

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <h1>
                            <b>My</b>School
            </h1>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Forgot Password</p>
                        <form onSubmit={submitForm}>
                            <div className="input-group mb-3">
                                <InputField
                                    onChange={handleChange}
                                    input={{
                                        id: "email",
                                        name: "email",
                                        type: "email",
                                        placeholder: "Email",
                                        value: enteredForgotPassword.email,
                                        className: "form-control",
                                    }}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <button type="submit" className="btn btn-primary btn-block">
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <p className="mb-1">
                            <Link to="/forgotpassword">I forgot my password</Link>
                        </p>
                        <p className="mb-0">
                            <Link to="/register" className="text-center">Register a new membership</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
