import React from 'react';
import { connect } from 'react-redux';

import {toggleModifyProfil} from 'src/actions/user';

import './profil.scss';

const Profil = ({handleModifyProfil, modifying, user}) => (
    <main className="profil">

        <form className="profil__form">
            <h2 className="profil__form__subtitle">Mon profil</h2>

            <label htmlFor="username" className="profil__form__label">Pseudo</label>
            <input type="text" name="username" className="profil__form__input" value={user.nickname} disabled={modifying ? "" : "disabled"}></input>

            <label htmlFor="email" className="profil__form__label">Email</label>
            <input type="email" name="email"className="profil__form__input" value={user.email} disabled={modifying ? "" : "disabled"}></input>

            <label htmlFor="password" className="profil__form__label">Mot de passe</label>
            <input type="password" name="password" className="profil__form__input" value="********" disabled={modifying ? "" : "disabled"}></input>

            <button type="submit" className={modifying ? "profil__form__button" : "profil__form__button invisible"}>Valider</button>
            <button onClick={handleModifyProfil} className={!modifying ? "profil__form__button" : "profil__form__button invisible"}>Modifier mon profil</button>
        </form>

    </main>
)

const mapStateToProps = (state) => ({
    modifying: state.user.profil.modifying,
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    handleModifyProfil: (event) => {
        event.preventDefault();
        dispatch(toggleModifyProfil());
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Profil);