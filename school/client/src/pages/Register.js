import { Link } from 'react-router-dom';
import { useState } from 'react';

import InputField from "../components/InputField";

const Register = () => {

    const state = useState({
        fullname: "",
        email: "",
        password: ""
    });

    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target.fullname.value)

    }


    return (
        <form onSubmit={submitForm}>
            <InputField input={{ type: 'text', id: 'fullname', name: 'fullname', defaultValue: state.fullname }} />
            <InputField input={{ type: 'email', id: 'email', name: 'email', defaultValue: state.email }} />
            <InputField input={{ type: 'password', id: 'password', name: 'password', defaultValue: state.password }} />
            <Link to='/'>Login</Link>
            <input type="submit" />
        </form>
    );
}

export default Register
