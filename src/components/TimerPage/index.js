import React, { useEffect } from 'react';

import Timer from './Timer';
import TimerBlinds from './TimerBlinds';
import TimerHeader from './TimerHeader';
import TimerChips from './TimerChips';
import TimerCashPrice from './TimerCashPrice';

import { showQuitTimerModal, closeQuitTimerModal } from 'src/actions/timer';
import Modal from 'src/components/Modal';
import { Link } from 'react-router-dom';

import sound from 'src/assets/sound/bell.mp3';

const bell = new Audio(sound);

import './timerPage.scss';
import { connect } from 'react-redux';

const TimerPage = ({ 
    handleShowQuitTimerModal,
    isQuitTimerModalOpen,
    handleCloseQuitTimerModal,
    isAudioPlaying,
 }) => {
     
    
    useEffect(() => {
        if(isAudioPlaying){
            bell.play();
        }
    })
    
    return (
    <>
        <div className="timerPage">
            <div className="timerPage__header">
                <TimerHeader />
                <div onClick={handleShowQuitTimerModal} className="timerPage__header__quit">X</div>
            </div>
            <div className="timerPage__infos">
                <div className="timerPage__infos__cashPrice">
                    <TimerCashPrice />
                </div>
                <div className="timerPage__infos__timer">
                    <Timer />
                </div>
                <div className="timerPage__infos__chips">
                    <TimerChips />
                </div>
            </div>
            <div className="timerPage__blinds">
                <TimerBlinds />
            </div>
        </div>
        <Modal
            isOpen={isQuitTimerModalOpen}
            title='Quitter le tournoi'
            content={(
                <div className="timerModal">
                    <p>Voulez-vous vraiment retourner à l'accueil ?</p>
                    <div className="timerModal__buttons">
                    <Link to='/'>
                        <button
                            type="submit"
                            className="timerModal__buttons__button"
                        >
                            OK
                        </button>
                    </Link>
                    <button
                        className="timerModal__buttons__button"
                        onClick={handleCloseQuitTimerModal}
                    >
                        Annuler
                    </button>
                    </div>
                </div>
    )}
  />
  </>

        )}

const mapStateToProps = (state) => ({
    isQuitTimerModalOpen: state.timer.isQuitTimerModalOpen,
    isAudioPlaying: state.timer.isAudioPlaying,
})

const mapDispatchToProps = (dispatch) => ({
            handleShowQuitTimerModal: () => {
            dispatch(showQuitTimerModal())
        },
        handleCloseQuitTimerModal: () => {
            dispatch(closeQuitTimerModal())
        },
})

        export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);