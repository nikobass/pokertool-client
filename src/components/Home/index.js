import React from 'react';
import PropTypes from 'prop-types';

//components

import Cards from 'src/components/Cards';

import './home.scss'


const Home = ({openFormSignup, handleOpenForm}) => {

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
    </div>

  );
};

Home.propTypes = {
  openFormSignup: PropTypes.bool,
  handleOpenForm: PropTypes.func.isRequired,
}


import {changeOpenForm} from 'src/actions/user';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  handleOpenForm: () => {
     dispatch(changeOpenForm())
   }
})


export default connect(null, mapDispatchToProps)(Home);
