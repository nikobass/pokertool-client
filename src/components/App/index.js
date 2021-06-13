// == Import npm
import React from 'react';

// == Import
import './styles.css';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Profil from 'src/components/Profil';

const App = () => (
  <div className="app">
    <Header/>
    <Profil/>
    <Footer/>
  </div>
);

// == Export
export default App;
