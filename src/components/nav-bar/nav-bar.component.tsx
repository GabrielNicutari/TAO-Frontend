import {Link, useLocation} from 'react-router-dom';
import './nav-bar.styles.scss'
import { AppBar, Tab, Tabs } from "@material-ui/core";
import Logo from '../../assets/enapter_dark.png';
import { Words } from "../../Words";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import {useStore} from "../../stores/store";
import Select from 'react-select';

export default function NavBar() {
    const [value, setValue] = useState(0);

    const {userStore: {user, logout}} = useStore();

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    }

    const history = useHistory();

    const onChangeLanguage = async (event: any) => {
        alert(`Are you sure you want to change the language to ${event.value}?`);
        await Words.translate(event.value);
        history.push(window.location.pathname); //fake route to the same page
    };

    const options = [
        { value: 'en', label:
                <div>
                    <img src={"/english_language.png"} className="language-icon" alt={'flag'} />
                    <span>English</span>
                </div> },
        { value: 'da', label:
                <div>
                    <img src={"/danish_language.png"} className="language-icon" alt={'flag'} />
                    <span>Dansk</span>
                </div> },
        { value: 'de', label:
                <div>
                    <img src={"/german_language.png"} className="language-icon" alt={'flag'} />
                    <span>Deutsch</span>
                </div> },
        { value: 'fr', label:
                <div>
                    <img src={"/french_language.png"} className="language-icon" alt={'flag'} />
                    <span>Français</span>
                </div> },
        { value: 'ar', label:
                <div>
                    <img src={"/arabic_language.png"} className="language-icon" alt={'flag'} />
                    <span>عربي</span>
                </div> },
    ];

    const location = useLocation();

    return (
        <AppBar className='nav'>
            <div className='nav-container'>
                <div className='nav-left'>
                    <div className='logo'>
                        <img src={Logo} alt='logo' />
                    </div>

                    <div className='tabs'>
                        <Tabs variant='fullWidth' value={location.pathname} onChange={handleChange} aria-label='tabs'>
                            <Tab to={'/'} component={Link} className='menu-item' label={Words.home} value='/'/>

                            <Tab to={'/energy'} className='menu-item' component={Link} label={Words.energy} value={'/energy'} />

                            <Tab to={'/saveEnergy'} className='menu-item' component={Link} label={Words.saveEnergy} value={'/saveEnergy'} />

                            <Tab to={'/contact'} className='menu-item' component={Link} label={Words.contact} value={'/contact'} />
                        </Tabs>
                    </div>
                </div>

                <div className='nav-right'>
                    <div className="language-tab" >
                        <Select
                            placeholder='Language'
                            onChange={onChangeLanguage}
                            options={options}
                            defaultValue={options[0]}
                        />
                    </div>
                    <div style={{margin:'auto',marginLeft:'10px'}}>
                        <button onClick={logout} >Logout</button>
                    </div>
                </div>
            </div>
        </AppBar>
    )
}
