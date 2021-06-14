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

    //Donc au contraire, si open est à true elle affiche le contenu qui est retourné ci-dessous
    return (
        <div className={isOpen ? 'modal show' : 'modal'} onClick={handleHideModal}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>

                <div className="modal__content__header">
                    <span onClick={handleHideModal} className="modal__content__header__close">X</span>
                    <h2 className="modal__content__header__title">{title}</h2>
                </div>

                <div className="modal__content__body">
                    {content}
                </div>

            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    handleHideModal: () => {
        dispatch(hideModal());
    }
})

export default connect(null, mapDispatchToProps)(Modal);
