import React from 'react';
import './resetPassword.scss';

const ResetPassword = () => (
    <main className="resetPassword">

        <form className="resetPassword__form">
            <h2 className="resetPassword__form__subtitle">Mot de passe oublié</h2>

            <p className="resetPassword__form__instructions">Veuillez saisir l'adresse email associée à votre compte. Un email contenant un lien vous permettant de redéfinir votre mot de passe vous sera envoyé.</p>

            <label htmlFor="email" className="resetPassword__form__label">Email</label>
            <input type="email" name="email" className="resetPassword__form__input"></input>

            <button type="submit" className="resetPassword__form__button">Valider</button>

        </form>

    </main>
)

export default ResetPassword;