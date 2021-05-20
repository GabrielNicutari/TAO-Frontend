import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './components/nav-bar/nav-bar.component';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './pages/home-page/home-page.component';
import { ToastContainer } from 'react-toastify';
import ContactForm from "./components/contact-form/contact-form.component";

function App() {
  const location = useLocation();

  return (
    <>
        <NavBar />
        <Container style={{ marginTop: '7em' }}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/activities'  />
            <Route path='/activities/:id'  />
            <Route key={location.key} path={['/createActivity', '/manage/:id']}  />
            <Route path='/contactForm' component={ContactForm} />
          </Switch>
        </Container>
    </>
  );
}

export default observer(App);
