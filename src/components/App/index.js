// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { resetProfilModif, hideModal } from 'src/actions/user';

// == Import
import './styles.css';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Faq from 'src/components/Faq';
import Profil from 'src/components/Profil';
import About from 'src/components/About';
import Cgu from 'src/components/Cgu';
import Tournaments from 'src/components/Tournaments'
import { useDispatch } from 'react-redux';
import ResetPassword from 'src/components/ResetPasswordHome';


const App = () => {

  const currentLocation = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentLocation === '/profil') {
      dispatch(resetProfilModif());
    }
    dispatch(hideModal());
  })

  return (
    <div className="app">

      {/* Le switch est provisoire. Il va falloir qu'on gère ça plus tard. Pour le moment, il sert à afficher la chaque page pour pouvoir tester nos composants */}
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/tournaments">
          <Header />
          <Tournaments />
          <Footer />
        </Route>
        <Route exact path="/chip">
          <Header />
          <Footer />
        </Route>
        <Route exact path="/distributor">
          <Header />
          <Footer />
        </Route>
        <Route exact path="/faq">
          <Header />
          <Faq />
          <Footer />
        </Route>
        <Route path="/profil">
          <Header />
          <Profil />
          <Footer />
        </Route>
        <Route path="/resetPassword">
          <Header />
          <ResetPassword />
          <Footer />
        </Route>
        <Route path="/cgu">
          <Header />
          <Cgu />
          <Footer />
        </Route>
        <Route path="/about">
          <Header />
          <About />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
};

// == Export

export default App;
