import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import {Image} from "semantic-ui-react";
import { Words  } from '../../Words';
import './contact-form.styles.scss'
import axios from "axios";
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const notify = () => {
        toast.info('Email sent', {position: toast.POSITION.TOP_CENTER, autoClose: 10000});
    };
    const success = () => {
        toast.success('Email received successfully', {position: toast.POSITION.TOP_CENTER, autoClose: 10000});
    };
    const errorNotification = () => {
        toast.error('Error. Try again later or call us at +45 29 39 11 29', {position: toast.POSITION.TOP_CENTER, autoClose: 10000});
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        notify();
        if (emailIsValid(email)) {
            setError('');
            const contactFormData = {name, email, message}
            console.log(contactFormData);
            axios.post("http://localhost:5001/api/ContactForm", contactFormData)
                .then(res => {
                    if (res.data === true) {
                        success();
                    } else {
                        errorNotification();
                    }
                });
        } else {
            setError(Words.invalidEmailErrorMessage);
        }
    };
    const emailIsValid = (input: string) => {
        setEmail(input);
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(input);
    };
    return (
        <div className="contact-form-card">
            <div className="contact-form-card-title-container">
                <h2>{Words.contactFormTitle}</h2>
                <div className="line-under-title"/>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="left-container">
                    <h3>{Words.leaveUsMessage}</h3>
                    <TextField id="outlined-basic1" value={name} label={Words.nameForm} variant="outlined" onChange={e => setName(e.target.value)} fullWidth={true} /><br/><br/>
                    <TextField id="outlined-basic2" value={email} label={Words.email} variant="outlined" onChange={e => setEmail(e.target.value)} fullWidth={true} />
                    {error === '' ? <div><br/></div> : <div>{error}<br/><br/></div> }
                    <TextField
                        id="outlined-multiline-static"
                        value={message}
                        label={Words.message}
                        variant="outlined"
                        onChange={e => setMessage(e.target.value)}
                        fullWidth={true}
                        multiline
                        rows={8} /><br/><br/>
                    {/*<Button*/}
                    {/*    onClick={handleSubmit}*/}
                    {/*    variant="contained"*/}
                    {/*   >*/}
                    {/*</Button>*/}

                    <Button
                        onClick={handleSubmit}
                        className='button'
                        variant='contained'
                        color='primary'
                        type='submit'
                        style={{width: '100%', fontSize: '15px', }}
                    >
                        {Words.send}
                    </Button>
                </div>
            </form>
            <div className="right-container">
                <div className='line'>
                    <RoomOutlinedIcon />
                    <div style={{marginLeft:'5px'}}>Nordmarks Allé 2620 Albertslund Denmark</div>
                </div>
                <div className='line'>
                    <PhoneOutlinedIcon />
                    <div style={{marginLeft:'5px'}}>+45 43 68 68 68</div>
                </div>
                <div className='line'>
                    <EmailOutlinedIcon />
                    <div style={{marginLeft:'5px'}}>albertslund@albertslund.dk</div>
                </div>
                <div className='line'>
                    <div className="icon">
                        <Image src={"/youtube_logo.png"} />
                    </div>
                    <div className="icon">
                        <Image src={"/instagram_logo.png"} />
                    </div>
                    <div className="icon">
                        <Image src={"/facebook_logo.png"} />
                    </div>
                    <div className="icon">
                        <Image src={"/twitter_logo.png"} />
                    </div>
                </div>
                <div className='image-map'>
                    <Image src={"/albertslund_city_hall_map.png"} />
                </div>
            </div>
        </div>
    );
}
export default ContactForm;
