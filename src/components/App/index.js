// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { hideModal, checkIsLogged } from 'src/actions/user';

// == Import
import './styles.css';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Faq from 'src/components/Faq';
import Profil from 'src/components/Profil';
import About from 'src/components/About';
import Cgu from 'src/components/Cgu';
import Tournaments from 'src/components/Tournaments';
import ResetPassword from 'src/components/ResetPasswordHome';
import Distributor from 'src/components/Distributor';
import TimerPage from 'src/components/TimerPage';
import ChipCaseForm from 'src/components/ChipCaseForm';



const App = ({ isLogged }) => {

  const currentLocation = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideModal());
    dispatch(checkIsLogged());
  })

  return (
    <div className="app">

      {/* Le switch est provisoire. Il va falloir qu'on gère ça plus tard. Pour le moment, il sert à afficher la chaque page pour pouvoir tester nos composants */}
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/cgu">
          <Header />
          <Cgu />
          <Footer />
        </Route>
        <Route path="/about">
          <Header />
          <About />
          <Footer />
        </Route>
        <Route exact path="/faq">
          <Header />
          <Faq />
          <Footer />
        </Route>
        <Route exact path="/distributor">
            <Header />
            <Distributor />
            <Footer />
        </Route>
        <Route path="/resetPassword">
              <Header />
              <ResetPassword />
              <Footer />
        </Route>    

        {isLogged ?
          <>
            <Route exact path="/distributor">
              <Header />
              <Distributor />
              <Footer />
            </Route>
            <Route exact path="/tournaments">
              <Header />
              <Tournaments />
              <Footer />
            </Route>
            <Route exact path="/chip">
              <Header />
              <ChipCaseForm />
              <Footer />
            </Route>
            <Route path="/profil">
              <Header />
              <Profil />
              <Footer />
            </Route>
            <Route path="/timer">
              <TimerPage />
            </Route>
          </>
          :
          <>      
            <Route exact path="/tournaments">
              <Header />
              <Home />
              <Footer />
            </Route>
            <Route exact path="/chip">
              <Header />
              <ChipCaseForm />
              <Footer />
            </Route>          
            <Route path="/profil">
              <Header />
              <Home />
              <Footer />
            </Route>
            <Route path="/resetPassword">
              <Header />
              <Home />
              <Footer />
            </Route>
          </>}
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged
})

export default connect(mapStateToProps)(App);
