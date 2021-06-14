// == Import npm
import React from 'react';

// == Import
import './styles.css';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
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

// == Export
export default App;
