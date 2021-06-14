import React from 'react';
<<<<<<< HEAD
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
=======
import './modal.scss';

const Modal = ({open, title, content}) => {
    
    if(!open){
>>>>>>> dac395b0a35f7a672c1c5aa5397dc2824864b3f6
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
<<<<<<< HEAD
                <span onClick={handleHideModal} className="modal__content__header__close">X</span>
=======
>>>>>>> dac395b0a35f7a672c1c5aa5397dc2824864b3f6
            </div>
            <div className="modal__content__body">
                {content}
            </div>
<<<<<<< HEAD
=======
            <div className="modal__content__footer">
                <button className="modal__content__footer__button">Close</button>
            </div>
>>>>>>> dac395b0a35f7a672c1c5aa5397dc2824864b3f6
        </div>
    </div>
)}

<<<<<<< HEAD
const mapDispatchToProps = (dispatch) => ({
    handleHideModal: () => {
        dispatch(hideModal());
    }
})

export default connect(null, mapDispatchToProps)(Modal);
=======
export default Modal;
>>>>>>> dac395b0a35f7a672c1c5aa5397dc2824864b3f6
