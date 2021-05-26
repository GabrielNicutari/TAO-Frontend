import { Link } from 'react-router-dom';
import './nav-bar.styles.scss'
import { AppBar, Tab, Tabs } from "@material-ui/core";
import Logo from '../../assets/enapter_dark.png';
import { Words } from "../../Words";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

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
    const [language, setLanguage] = useState('en');

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    }

    const translate = async (toLanguage: string) => {
        alert(`Are you sure you want to change the language to ${toLanguage}?`);
        await Words.translate(toLanguage);
        history.push('/');
    }

    const onChangeLanguage = (event: any) => {
        setLanguage(event.target.value);
        translate(event.target.value);
    };

    const history = useHistory();

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

                    <FormControl style={{margin:'auto',marginLeft:'10px'}}>
                        <NativeSelect
                            value={language}
                            onChange={onChangeLanguage}
                            name="Language"
                        >
                            <option value="en">English</option>
                            <option value="da">Dansk</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsch</option>
                            <option value="ar">عربي</option>
                        </NativeSelect>
                    </FormControl>
                </div>
            </div>
        </AppBar>
    )
}
