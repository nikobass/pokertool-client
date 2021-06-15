import React, { useEffect, setState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {toggleModifyProfil, changeInputValue} from 'src/actions/user';

import './profil.scss';

const Profil = ({
    // fonction qui ouvre les inputs lorsqu'on clique sur le bouton "modifier mon profil"
    handleModifyProfil,
    //Fonction qui gère la modification des inputs: pseudo, email et password (champs controlés)
    handleInputChange,
    //Booléen qui modifie le state pour savoir si le profil est en train d'être édité. Il conditionne l'ouverture des inputs.
    modifying,
    // La valeur des 3 inputs pour les champs controlés.
    nicknameValue,
    emailValue,
    passwordValue
}) => (
    <main className="profil">
        
        <form className="profil__form">
            <h2 className="profil__form__subtitle">Mon profil</h2>

            <label htmlFor="username" className="profil__form__label">Pseudo</label>
            <input onChange={handleInputChange} type="text" name="nickname" className="profil__form__input" value={nicknameValue} disabled={modifying ? "" : "disabled"}></input>

            <label htmlFor="email" className="profil__form__label">Email</label>
            <input onChange={handleInputChange} type="email" name="email"className="profil__form__input" value={emailValue} disabled={modifying ? "" : "disabled"}></input>

            <label htmlFor="password" className="profil__form__label">Mot de passe</label>
            <input onChange={handleInputChange} type="password" name="password" className="profil__form__input" value={passwordValue} disabled={modifying ? "" : "disabled"}></input>

            {/* Ici les ternaires gèrent l'affiche du bouton pour modifier le profil ou du bouton pour valider la saisie selon si l'utilisateur est en train de consulter ou modifier son profil*/}
            <button type="submit" className={modifying ? "profil__form__button" : "profil__form__button invisible"}>Valider</button>
            <button onClick={handleModifyProfil} className={!modifying ? "profil__form__button" : "profil__form__button invisible"}>Modifier mon profil</button>
            <button className="profil__form__delete">Supprimer mon compte</button>
        </form>

    </main>
)

Profil.propTypes = {
    handleModifyProfil: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    modifying: PropTypes.bool.isRequired,
    nicknameValue: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    modifying: state.user.profil.modifying,
    nicknameValue: state.user.nickname,
    emailValue: state.user.email,
    passwordValue: state.user.password,
})

const mapDispatchToProps = (dispatch) => ({
    // fonction qui ouvre les inputs si l'utilisateur clique sur le bouton "modifier mon profil"
    handleModifyProfil: (event) => {
        event.preventDefault();
        dispatch(toggleModifyProfil());
    },
    handleInputChange: (event) => {
        // fonction qui gère la modification des inputs.
        // event.target.value c'est la valeur saisie par l'utilisateur (champ controlé)
        // event.target.name c'est le nom de l'input afin que la fonction sache quelle donnée modifier dans le state (nickname, email ou password).
        dispatch(changeInputValue(event.target.value, event.target.name))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Profil);