import React, {useEffect} from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage from './pages/home-page/home-page.component';
import ContactForm from "./components/contact-form/contact-form.component";
import './index.scss';
import Footer from "./components/footer/footer.component";
import SaveEnergyIframe from "./components/save-energy-iframe/save-energy-iframe";
import LoginForm from "./components/login-form/login-form.component";
import {EnergyPage} from "./pages/energy-page/energy-page.component";
import {useStore} from "./stores/store";


function App() {
  const location = useLocation();
  const {commonStore, userStore, dailyReadingStore} = useStore();
  const divStyle = {
    marginTop: '3.7em',
    minHeight: 'calc(100vh - 23vh)'
  };

  useEffect(() => {
    dailyReadingStore.getDailyReadings();

    if(commonStore.token) {
        userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
        commonStore.setAppLoaded();
    }
  }, [commonStore, userStore, dailyReadingStore]);

  // Loading functionality here, maybe
    // if(!commonStore.appLoaded) return <Loading></Loading>

  return (
    <>
        <NavBar />
        <div style={divStyle}>
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route key={location.key} path={['/createActivity', '/manage/:id']}  />
              <Route path='/saveEnergy' component={SaveEnergyIframe} />
              <Route path='/energy' component={EnergyPage} />
              <Route path='/contact' component={ContactForm} />
              <Route path='/login' component={LoginForm} />
            </Switch>
        </div>

        <Footer />
        {/* <h2>{dailyReadingStore.energy}</h2>
        <button  onClick={dailyReadingStore.setTitle} >add !</button> */}
    </>
  );
}

export default observer(App);
