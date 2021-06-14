// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom'

// == Import
import './styles.css';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';

const App = () => (
  <div className="app">
   <Switch>
      <Route exact path="/">
        <Header />
        <Home />
        <Footer />
      </Route>
      <Route path="/profil">
        <Header />
        
        <Footer />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
