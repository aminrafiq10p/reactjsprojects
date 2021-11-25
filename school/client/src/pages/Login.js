import { useState } from 'react';
import { Link } from 'react-router-dom';

import InputField from "../components/InputField";

const Login = () => {

    const state = useState({
        fullname: "",
        password: ""
    });

    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target.fullname.value)

    }

    return (
        <form onSubmit={submitForm}>
            <InputField input={{ id: 'fullname', name: 'fullname', defaultValue: state.fullname }} />
            <InputField input={{ id: 'password', name: 'password', defaultValue: state.password }} />
            <input type="submit" />
            <Link to='/register'>Register</Link>
            <Link to='/forgotpassword'>Forgot Password</Link>
        </form>
    );
}

export default Login
