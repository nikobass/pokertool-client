// == Import npm
import React, { useEffect, setState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { withRouter } from 'react-router';

import { resetProfilModif } from 'src/actions/user';

// == Import
import './styles.css';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
<<<<<<< HEAD
import Faq from 'src/components/Faq';
import Profil from 'src/components/Profil';
import { useDispatch } from 'react-redux';


const App = () => {

  const currentLocation = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentLocation === '/profil') {
      dispatch(resetProfilModif());
    }
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
      </Switch>
    </div>
  );
};
=======
import Profil from 'src/components/Profil';
import { useDispatch } from 'react-redux';

const App = () => {

  const currentLocation = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if(currentLocation === '/profil'){
      dispatch(resetProfilModif());
    }
  })
  
  return (
  <div className="app">
    <Header/>
    <Footer/>
  </div>
);
>>>>>>> dac395b0a35f7a672c1c5aa5397dc2824864b3f6

// == Export

export default App;
