import * as React from 'react';
import {Words} from "../../Words";
import TextField from "@material-ui/core/TextField";
import './login-form.styles.scss'
import {Button} from "@material-ui/core";
import {useState} from "react";

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email, password);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("worked");
    }

    return (
        <div className='login-form' onSubmit={handleSubmit}>
            <div className="contact-form-card-title-container">
                <h2>{Words.loginFormTitle}</h2>
                <div className="line-under-title"/>
            </div>

            <form className='form-content' method='post'>
                <TextField
                    id="outlined-basic"
                    className='text-field'
                    value={email}
                    label={Words.email}
                    onChange={e => setEmail(e.target.value)}
                    variant="outlined"
                    fullWidth={true}
                />

                <TextField
                    id="outlined-basic"
                    className='text-field'
                    value={password}
                    label={Words.password}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    variant="outlined"
                    fullWidth={true}
                />

                <Button className='button button-login' variant='contained' color='primary' type='submit'>{Words.login}</Button>
            </form>
        </div>
    );
};
