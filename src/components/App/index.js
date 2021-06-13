// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import
import './styles.css';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Profil from 'src/components/Profil';

const App = () => (
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

// == Export
export default App;
