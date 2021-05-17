import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import { ToastContainer } from 'react-toastify';
import ContactForm from "./components/ContactForm";

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                <Route exact path='/activities'  />
                <Route path='/activities/:id'  />
                <Route key={location.key} path={['/createActivity', '/manage/:id']}  />
                <Route path='/contactForm' component={ContactForm} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
