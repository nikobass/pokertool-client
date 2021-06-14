// == Import npm
import React from 'react';

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
        <Profil />
        <Footer />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
