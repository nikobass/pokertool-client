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
    <Switch>
      <Route exact path="/">
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
