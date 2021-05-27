import * as React from 'react';
import {Words} from "../../Words";
import TextField from "@material-ui/core/TextField";
import './login-form.styles.scss'
import {Button} from "@material-ui/core";

export function LoginForm() {
    return (
        <div className='login-form'>
            <div className="contact-form-card-title-container">
                <h2>{Words.loginFormTitle}</h2>
                <div className="line-under-title"/>
            </div>

            <form className='form-content'>
                <TextField
                    id="outlined-basic"
                    className='text-field'
                    value=''
                    label={Words.email}
                    variant="outlined"
                    fullWidth={true}
                />

                <TextField
                    id="outlined-basic"
                    className='text-field'
                    value=''
                    label={Words.password}
                    variant="outlined"
                    fullWidth={true}
                />

                <Button className='button button-login' variant='contained' color='primary'>{Words.login}</Button>
            </form>
        </div>
    );
};
