import React from 'react';
import {Link} from 'react-router-dom';
import './nav-bar.styles.scss'
import {AppBar, Tab, Tabs} from "@material-ui/core";
import Logo from '../../assets/enapter_dark.png';


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

    return (
        <AppBar className='nav'>
            <div className='nav-container'>
                <div className='logo'>
                    <img src={Logo} alt='logo' />
                </div>

                <div className='tabs'>
                    <Tabs variant='fullWidth' value={value} onChange={handleChange} aria-label='tabs'>
                        <LinkTab className='menu-item' label="Home" to="/" {...a11yProps(0)} />

                        <LinkTab className='menu-item' label="Energy" to="/energy" {...a11yProps(1)} />

                        <LinkTab className='menu-item' label="Sparenergi" to="/spar" {...a11yProps(2)} />

                        <LinkTab className='menu-item' label="Contact" to="/contact" {...a11yProps(3)} />
                    </Tabs>
                </div>
            </div>
        </AppBar>
    )
}
