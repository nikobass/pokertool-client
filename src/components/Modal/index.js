import React from 'react';
import './modal.scss';

const Modal = ({open, title, content}) => {
    
    if(!open){
        //si open est false alors la modal ne retourne rien.
        // c'est à dire que rien n'est affiché à l'écran
        
        return null
    }
        //Donc au contraire, si open est à true elle affiche le contenu qui est retourné ci-dessous
    return (
    <div className="modal">
        <div className="modal__content">
            <div className="modal__content__header">
                <h2 className="modal__content__header__title">{title}</h2>
            </div>
            <div className="modal__content__body">
                {content}
            </div>
            <div className="modal__content__footer">
                <button className="modal__content__footer__button">Close</button>
            </div>
        </div>
    </div>
)}

export default Modal;