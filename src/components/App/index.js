// == Import npm
import React, { useEffect, setState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { resetProfilModif, hideModal } from 'src/actions/user';

// == Import
import './styles.css';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Faq from 'src/components/Faq';
import Profil from 'src/components/Profil';
import { useDispatch } from 'react-redux';
import ResetPassword from 'src/components/ResetPassword';


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
          <Footer />
        </Route>
        <Route exact path="/tournaments">
          <Header />
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
      </Switch>
    </div>
  );
};

// == Export

export default App;
