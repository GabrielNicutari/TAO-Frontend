import {Link} from 'react-router-dom';
import './nav-bar.styles.scss'
import {AppBar, Tab, Tabs} from "@material-ui/core";
import Logo from '../../assets/enapter_dark.png';
import {Words} from "../../Words";
import { useHistory } from "react-router-dom";
import React from "react";

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    }

    const history = useHistory();
    const translate = async (toLanguage: string) => {
        alert(`Are you sure you want to change the language to ${toLanguage}?`);
        await Words.translate(toLanguage);
        history.push('/');
    }

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

                    <div className='flags'>
                        <div className="flag-icon">
                            <img src={"/english_language.png"} onClick={() => translate('en')} alt='flag'/>
                        </div>
                        <div className="flag-icon">
                            <img src={"/danish_language.png"} onClick={() => translate('da')} alt='flag' />
                        </div>
                        <div className="flag-icon">
                            <img src={"/french_language.png"} onClick={() => translate('fr')} alt='flag'/>
                        </div>
                        <div className="flag-icon">
                            <img src={"/german_language.png"} onClick={() => translate('de')} alt='flag'/>
                        </div>
                        <div className="flag-icon">
                            <img src={"/arabic_language.png"} onClick={() => translate('ar')} alt='flag'/>
                        </div>
                    </div>
                </div>
            </div>
        </AppBar>
    )
}
