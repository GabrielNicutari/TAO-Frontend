import {Link, useLocation} from 'react-router-dom';
import './nav-bar.styles.scss'
import {AppBar, Button, Tab, Tabs} from "@material-ui/core";
import Logo from '../../assets/newnewlogo.png';
import { Words } from "../../Words";
import { useHistory } from "react-router-dom";
import React from "react";
import {useStore} from "../../stores/store";
import Select from 'react-select';
import LoginForm from '../login-form/login-form.component';
import {observer} from "mobx-react-lite";

export default observer(function NavBar() {

    const {userStore: { logout, isLoggedIn, user}, modalStore} = useStore();

    console.log("user", user);

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

    const styles = {
        control: (css: any) => ({ ...css, cursor: 'pointer' }),
        option: (css: any) => ({ ...css, cursor: 'pointer' }),
    }

    const location = useLocation();

    const handleClick = (event: any) => {
        if(!user) {
            event.preventDefault();
            modalStore.openModal(<LoginForm />);
        }
    }

    return (
        <AppBar className='nav'>
            <div className='nav-container'>
                <div className='nav-left'>
                    <div className='logo'>
                        <img src={Logo} alt='logo' />
                    </div>

                    <div className='tabs'>
                        <Tabs variant='fullWidth' value={location.pathname} aria-label='tabs'>
                            <Tab to={'/'} component={Link} className='menu-item' label={Words.home} value='/'/>

                            <Tab onClick={handleClick} to={'/energy'} className='menu-item' component={Link} label={Words.energy} value={'/energy'} />

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
                            styles={styles}/>
                    </div>
                    <div style={{margin:'auto',marginLeft:'10px'}}>
                        {
                            user ?
                            <Button
                                onClick={logout}
                                className='button button-login'
                                variant='contained'
                                color='primary'>Logout
                            </Button>
                            :
                            <Button
                                onClick={() => modalStore.openModal(<LoginForm />)}
                                className='button button-login'
                                variant='contained'
                                color='primary'>Login
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </AppBar>
    )
});
