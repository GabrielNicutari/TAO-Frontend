import { Link } from 'react-router-dom';
import './nav-bar.styles.scss'
import { AppBar, Tab, Tabs } from "@material-ui/core";
import Logo from '../../assets/enapter_dark.png';
import { Words } from "../../Words";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {useStore} from "../../stores/store";
import Select from 'react-select';

function a11yProps(index: number) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props: any) {
    return (
        <Tab
            component={Link}
            {...props}
        />
    );
}

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
        history.push('/');
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

    return (
        <AppBar className='nav'>
            <div className='nav-container'>
                <div className='logo'>
                    <img src={Logo} alt='logo' />
                </div>

                <div className='tabs'>
                    <Tabs variant='fullWidth' value={value} onChange={handleChange} aria-label='tabs'>
                        <LinkTab className='menu-item' label={Words.home} to="/" {...a11yProps(0)} />

                        <LinkTab className='menu-item' label={Words.energy} to="/energy" {...a11yProps(1)} />

                        <LinkTab className='menu-item' label={Words.saveEnergy} to="/saveEnergy" {...a11yProps(2)} />

                        <LinkTab className='menu-item' label={Words.contact} to="/contact" {...a11yProps(3)} />
                    </Tabs>
                    <div className="language-tab" >
                        <Select
                            placeholder='Language'
                            onChange={onChangeLanguage}
                            options={options} />
                    </div>
                    <div style={{margin:'auto',marginLeft:'10px'}}>
                        <button onClick={logout} >Logout</button>
                    </div>
                </div>


            </div>
        </AppBar>
    )
}
