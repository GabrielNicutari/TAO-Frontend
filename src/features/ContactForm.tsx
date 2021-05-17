import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import {Image} from "semantic-ui-react";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = () => {
        if (emailIsValid(email)) {
            setError('');
            const contactFormData = {name, email, message}
            console.log(contactFormData);
            // call the api here...
        } else {
            setError('Please enter a valid email address.')
        }
    };

    const emailIsValid = (input: string) => {
        setEmail(input);
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input)) {
            return false;
        }
        return true;
    };

    return (
        <div className="contact-form-card">
            <div className="contact-form-card-title-container">
                <h2>Get in touch</h2>
                <div className="line-under-title"/>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="left-container">
                    <h3>Leave us a message</h3>
                    <TextField id="outlined-basic" value={name} label="Name" variant="outlined" onChange={e => setName(e.target.value)} fullWidth={true} /><br/><br/>
                    <TextField id="outlined-basic" value={email} label="Email" variant="outlined" onChange={e => setEmail(e.target.value)} fullWidth={true} />
                    {error === '' ? <div><br/></div> : <div>{error}<br/><br/></div> }
                    <TextField
                        id="outlined-multiline-static"
                        value={message}
                        label="Message"
                        variant="outlined"
                        onChange={e => setMessage(e.target.value)}
                        fullWidth={true}
                        multiline
                        rows={8} /><br/><br/>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        style={{width: '100%', background:'black', color: 'white', fontSize: '15px', }}>
                        SEND
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
