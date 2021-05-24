import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './nav-bar.styles.scss'
import {AppBar, Button, Tab, Tabs, Box, Typography} from "@material-ui/core";

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
            // onClick={(event: { preventDefault: () => void; }) => {
            //     event.preventDefault();
            // }}
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
            <Tabs variant='fullWidth' value={value} onChange={handleChange} aria-label='tabs'>
                {/*<Container className='nav-container' maxWidth="md">*/}

                <LinkTab className='menu-item' label="Home" to="/" {...a11yProps(0)} />

                <LinkTab className='menu-item' label="Energy" to="/energy" {...a11yProps(1)} />

                <LinkTab className='menu-item' label="Sparenergi" to="/spar" {...a11yProps(2)} />

                <LinkTab className='menu-item' label="Contact" to="/contact" {...a11yProps(3)} />

                    {/*<NavLink to='/' className='menu-item'>*/}
                    {/*    <Button>*/}

                    {/*    </Button>*/}
                    {/*</NavLink>*/}

                    {/*<NavLink to='/energy' className='menu-item'>*/}
                    {/*    <Button>Energy</Button>*/}
                    {/*</NavLink>*/}


                    {/*<NavLink to='/spar' className='menu-item'>*/}
                    {/*    <Button>Sparenergy</Button>*/}
                    {/*</NavLink>*/}

                    {/*<NavLink to='/contact'className='menu-item'>*/}
                    {/*    <Button>Contact</Button>*/}
                    {/*</NavLink>*/}
            </Tabs>
        </AppBar>
    )
}
