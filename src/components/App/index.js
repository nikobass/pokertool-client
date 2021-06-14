// == Import npm
import React from 'react';

// == Import
import './styles.css';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Faq from 'src/components/Faq';

const App = () => (
  <div className="app">
    <Header/>
    <Faq />
    <Footer/>
  </div>
);

// == Export
export default App;
