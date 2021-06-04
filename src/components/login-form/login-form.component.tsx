import * as React from 'react';
import {Words} from "../../Words";
import TextField from "@material-ui/core/TextField";
import './login-form.styles.scss'
import {Button} from "@material-ui/core";
import {useState} from "react";
import {useStore} from "../../stores/store";
import {UserFormValues} from "../../models/user";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    console.log(email, password);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let creds: UserFormValues = {email, password};
        userStore.login(creds)
            .then(() => setError(''))
            .catch(() => setError('Invalid email or password'));
    }

    const { userStore } = useStore();

    return (
        <div className='login-form' >
            <div className="contact-form-card-title-container">
                <h2>{Words.loginFormTitle}</h2>
                <div className="line-under-title"/>
            </div>

            <form className='form-content' method='post' onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic1"
                    className='text-field'
                    value={email}
                    label={Words.email}
                    onChange={e => setEmail(e.target.value)}
                    variant="outlined"
                    fullWidth={true}
                />

                <TextField
                    id="outlined-basic2"
                    className='text-field'
                    value={password}
                    label={Words.password}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    variant="outlined"
                    fullWidth={true}
                />

                <label style={{color: "red"}}>{error}</label>

                <Button className='button button-login' variant='contained' color='primary' type='submit'>{Words.login}</Button>
            </form>
        </div>
    );
};

export default LoginForm;
