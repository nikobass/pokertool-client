import React from 'react';
import PropTypes from 'prop-types';

//components

import Cards from 'src/components/Cards';
import Signup from 'src/components/Signup';
import { signUpForm} from 'src/actions/user';
import { connect } from 'react-redux';

import './home.scss';



const Home = ({handleSignUpForm, isLogged}) => {

  return (
    <div className='main'>
      <h1 className="main__title">Gérez facilement vos tournois de poker entre amis</h1>
      < Cards />
      <div className="signup">
       { !isLogged && <button 
        className="signup__button"
        onClick={handleSignUpForm}
        >
          S'inscrire
        </button>
       }
      </div>
      <Signup/>
    </div>
  );
};

Home.propTypes = {
  openFormSignup: PropTypes.bool,
  handleSignUpForm: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged
})
const mapDispatchToProps = (dispatch) => ({
  handleSignUpForm: () => {
     dispatch(signUpForm())
   }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);
