import React from 'react';
import {
    Play,
    Pause,
    RotateCcw,
    Rewind,
    FastForward,
    SkipBack,
    SkipForward,
} from 'react-feather';
import { connect } from 'react-redux';

import './timer.scss';

import {
    launchTimer,
    stopTimer,
    resetTimer,
    goToPreviousStage,
    goToNextStage,
    skipBack,
    skipForward,
} from 'src/actions/timer';

const Timer = ({
    minute,
    seconde,
    stage,
    isLaunch,
    handleLaunchTimer,
    handleResetTimer,
    handlePreviousStage,
    handleNextStage,
    handleSkipBack,
    handleSkipForward,
    handleStopTimer
}) => (
    <div className="firstBorder">
        <div className="secondBorder">
        <div className="timer">
            <div className="timer__reset">
                <RotateCcw onClick={handleResetTimer} size={50} strokeWidth="4px" className="icon" />
            </div>
            <div className="timer__stage">
                <div className="timer__stage__chevronLeft">
                    <SkipBack onClick={handlePreviousStage} size={50} strokeWidth="3px"className="icon" />
                </div>
                <div className="timer__stage__stage">
                    Étape {stage}
                </div>
                <div className="timer__stage__chevronRight">
                    <SkipForward onClick={handleNextStage} size={50} strokeWidth="3px"className="icon" />
                </div>
            </div>
            <div className="timer__timer">
                <div className="timer__timer__minute">
                    {minute < 10 ? "0" + minute : minute}
                </div>
                <div className="timer__timer__separator">
                    :
                </div>
                <div className="timer__timer__seconde">
                    {seconde < 10 && seconde >= 0 ? "0" + seconde : seconde}
                </div>
            </div>
            <div className="timer__controllers">
                <div className={isLaunch ? "invisible" : "timer__controllers__skipBack"}>
                    <Rewind onClick={handleSkipBack} size={50} strokeWidth="3px" className={isLaunch ? ".invisible" : "icon"} />
                </div>
                <div className="timer__controllers__play">
                    {
                        isLaunch ?
                            <Pause onClick={handleStopTimer} size={80} strokeWidth="3px" className="icon" />
                            :
                            <Play onClick={handleLaunchTimer} size={80} strokeWidth="3px" className="icon" />
                    }
                </div>
                <div className={isLaunch ? "invisible" : "timer__controllers__skipForward"}>
                    <FastForward onClick={handleSkipForward} size={50} strokeWidth="3px" className="icon" />
                </div>
            </div>
        </div>
        </div>
    </div>





)

const mapStateToProps = (state) => ({
    minute: state.timer.currentValues.minute,
    seconde: state.timer.currentValues.seconde,
    stage: state.timer.currentValues.stage,
    isLaunch: state.timer.isLaunch,
})

const mapDispatchToProps = (dispatch) => ({
    handleLaunchTimer: () => {
        dispatch(launchTimer());
    },
    handleStopTimer: () => {

        setTimeout(() => {
            dispatch(stopTimer());
        }, 1000)
        
    },
    handleResetTimer: () => {
        dispatch(resetTimer());
    },
    handlePreviousStage: () => {
        dispatch(goToPreviousStage())
    },
    handleNextStage: () => {
        dispatch(goToNextStage())
    },
    handleSkipBack: () => {
        dispatch(skipBack())
    },
    handleSkipForward: () => {
        dispatch(skipForward())
    },

})


export default connect(mapStateToProps, mapDispatchToProps)(Timer);