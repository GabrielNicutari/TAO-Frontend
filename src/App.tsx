import React from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './pages/home-page/home-page.component';
import ContactForm from "./components/contact-form/contact-form.component";
import './index.scss';
import Footer from "./components/footer/footer.component";
import SaveEnergyIframe from "./components/save-energy-iframe/save-energy-iframe";
import {LoginForm} from "./components/login-form/login-form.component";

function App() {
  const location = useLocation();
  const divStyle = {
    marginTop: '3.7em',
    minHeight: 'calc(100vh - 23vh)'
  };

  return (
    <>
        <NavBar />
        <div style={divStyle}>
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/activities'  />
              <Route path='/activities/:id'  />
              <Route key={location.key} path={['/createActivity', '/manage/:id']}  />
              <Route path='/saveEnergy' component={SaveEnergyIframe} />
              <Route path='/contact' component={ContactForm} />
              <Route path='/login' component={LoginForm} />
            </Switch>
        </div>

        <Footer />
    </>
  );
}

export default observer(App);
