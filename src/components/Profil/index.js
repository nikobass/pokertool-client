import React from 'react';
import { connect } from 'react-redux';

import {toggleModifyProfil, changeInputValue} from 'src/actions/user';

import './profil.scss';

const Profil = ({
    handleModifyProfil,
    handleInputChange,
    modifying, 
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

            <button type="submit" className={modifying ? "profil__form__button" : "profil__form__button invisible"}>Valider</button>
            <button onClick={handleModifyProfil} className={!modifying ? "profil__form__button" : "profil__form__button invisible"}>Modifier mon profil</button>
        </form>

    </main>
)

const mapStateToProps = (state) => ({
    modifying: state.user.profil.modifying,
    nicknameValue: state.user.nickname,
    emailValue: state.user.email,
    passwordValue: state.user.password
})

const mapDispatchToProps = (dispatch) => ({
    handleModifyProfil: (event) => {
        event.preventDefault();
        dispatch(toggleModifyProfil());
    },
    handleInputChange: (event) => {
        dispatch(changeInputValue(event.target.value, event.target.name))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Profil);