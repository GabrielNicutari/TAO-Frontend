import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button, Container, Image, Menu} from 'semantic-ui-react';
import {Words} from "../../Words";
import { useHistory } from "react-router-dom";

export default function NavBar() {
    const history = useHistory();
    const translate = async (toLanguage: string) => {
        alert(`Are you sure you want to change the language to ${toLanguage}?`);
        await Words.translate(toLanguage);
        history.push('/contactForm');
    }
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{ marginRight: '10px' }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities' />
                <Menu.Item as={NavLink} to='/errors' name='Errors' />
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Create Activity' />
                </Menu.Item>
                <Menu.Item>
                    <Button as={NavLink} to='/contactForm' positive content='Contact Form' />
                </Menu.Item>
                <Menu.Item>
                    <div className="flag-icon">
                        <Image src={"/english_language.png"} onClick={() => translate('en')} />
                    </div>
                    <div className="flag-icon">
                        <Image src={"/danish_language.png"} onClick={() => translate('da')} />
                    </div>
                    <div className="flag-icon">
                        <Image src={"/romanian_language.png"} onClick={() => translate('ro')} />
                    </div>
                    <div className="flag-icon">
                        <Image src={"/greek_language.png"} onClick={() => translate('el')} />
                    </div>
                    <div className="flag-icon">
                        <Image src={"/french_language.png"} onClick={() => translate('fr')} />
                    </div>
                    <div className="flag-icon">
                        <Image src={"/german_language.png"} onClick={() => translate('de')} />
                    </div>
                    <div className="flag-icon">
                        <Image src={"/arabic_language.png"} onClick={() => translate('ar')} />
                    </div>
                    <div className="flag-icon">
                        <Image src={"/chinese_language.png"} onClick={() => translate('zh')} />
                    </div>
                </Menu.Item>
            </Container>
        </Menu>
    )
}
