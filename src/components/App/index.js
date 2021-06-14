// == Import npm
import React from 'react';

// == Import
import './styles.css';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import About from '../About';

const App = () => (
  <div className="app">
    <Header/>
    <Footer/>
  </div>
);

// == Export
export default App;
