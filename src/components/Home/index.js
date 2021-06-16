import React from 'react';
import PropTypes from 'prop-types';

//components

import Cards from 'src/components/Cards';
import Modal from 'src/components/Modal';

import './home.scss'


const Home = ({openFormSignup, handleOpenForm, showUnauthorizedModal}) => {

  return (
    <div className='main'>
      <h1 className="main__title">Gérez facilement vos tournois de poker entre amis</h1>
      < Cards />
      <div className="signup">
        <button 
        className="signup__button"
        onClick={handleOpenForm}
        >
          S'inscrire
        </button>
      </div>
      {!openFormSignup //todo component signup  
    }
    
    <Modal 
    isOpen={showUnauthorizedModal}
    title="Contenu inaccessible"
    content={(
      <div className="modalUnauthorized">
      <p className="modalUnauthorized__paragraph">Vous devez être connecté pour accéder à ce contenu.</p>
      <p className="modalUnauthorized__paragraph">Déjà inscrit ? <button className="modalUnauthorized__button">Me connecter</button></p>
      <p className="modalUnauthorized__paragraph">Pas encore inscrit ? <button className="modalUnauthorized__button">Créer un compte</button></p>
      </div>
    )}
    />
    </div>
  );
};

Home.propTypes = {
  openFormSignup: PropTypes.bool,
  handleOpenForm: PropTypes.func.isRequired,
  showUnauthorizedModal: PropTypes.bool.isRequired
}


import {changeOpenForm} from 'src/actions/user';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  showUnauthorizedModal: state.user.showUnauthorizedModal
})

const mapDispatchToProps = (dispatch) => ({
  handleOpenForm: () => {
     dispatch(changeOpenForm())
   }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);
