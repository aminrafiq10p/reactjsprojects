import { useState } from 'react';
import { Link } from 'react-router-dom';

import InputField from "../components/InputField";

const Login = () => {

    const [enteredLogin, setLogin] = useState({
        fullname: '',
        password: ''
    });

    const handleChange = (e) => {
        setLogin({ ...enteredLogin, [e.target.name]: e.target.value });
    }

    const submitForm = (e) => {
        e.preventDefault();
        setLogin({ fullname: '', password: '' });
    }

    return (
        <form onSubmit={submitForm}>
            <InputField onChange={handleChange} input={{ id: 'fullname', name: 'fullname', value: enteredLogin.fullname }} />
            <InputField onChange={handleChange} input={{ id: 'password', name: 'password', value: enteredLogin.password }} />
            <input type="submit" />
            <Link to='/register'>Register</Link>
            <Link to='/forgotpassword'>Forgot Password</Link>
        </form>
    );
}

export default Login
