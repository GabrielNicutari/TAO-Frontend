import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import './nav-bar.styles.scss'

export default function NavBar() {
    return (
        <Menu className='nav' fixed='top'>
            <Container>
                <Menu.Item className='menu-item' as={NavLink} exact to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{ marginRight: '10px' }} />
                    Home
                </Menu.Item>
                <Menu.Item className='menu-item' as={NavLink} to='/activities' name='Energy' />
                <Menu.Item className='menu-item'>
                    <Button as={NavLink} to='/spar' primary content='Sparenergi' />
                </Menu.Item>
                <Menu.Item className='menu-item'>
                    <Button as={NavLink} to='/contact' primary content='Contact' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}
