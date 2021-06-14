import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from 'src/actions/user';

import './modal.scss';

const Modal = ({
    isOpen, 
    title, 
    content,
    handleHideModal
}) => {
    
    if(!isOpen){
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
                <span onClick={handleHideModal} className="modal__content__header__close">X</span>
            </div>
            <div className="modal__content__body">
                {content}
            </div>
        </div>
    </div>
)}

const mapDispatchToProps = (dispatch) => ({
    handleHideModal: () => {
        dispatch(hideModal());
    }
})

export default connect(null, mapDispatchToProps)(Modal);