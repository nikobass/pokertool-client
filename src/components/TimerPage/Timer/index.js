import React from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'react-feather';
import { connect } from 'react-redux';

import './timer.scss';

import { 
    toggleTimer, 
    resetTimer, 
    goToPreviousStage,
    goToNextStage
} from 'src/actions/timer';

const Timer = ({ 
    minute, 
    seconde, 
    stage, 
    isLaunch, 
    handleToggleTimer,
    handleResetTimer,
    handlePreviousStage,
    handleNextStage,
}) => (

    <div className="timer">
        <div className="timer__reset">
            <RotateCcw onClick={handleResetTimer} size={50} className="icon"/>
        </div>
        <div className="timer__stage">
            <div className="timer__stage__chevronLeft">
                <ChevronLeft onClick={handlePreviousStage} size={50} className="icon"/>
            </div>
            <div className="timer__stage__stage">
                Étape {stage}
            </div>
            <div className="timer__stage__chevronRight">
                <ChevronRight onClick={handleNextStage} size={50} className="icon"/>
            </div>
        </div>
        <div className="timer__timer">
            <div className="timer__timer__minute">
                {minute <10 ? "0"+minute: minute}
            </div>
            <div className="timer__timer__separator">
                :
            </div>
            <div className="timer__timer__seconde">
                {seconde < 10 ? "0"+seconde : seconde}
            </div>
        </div>
        <div className="timer__play">
            {
            isLaunch ? 
            <Pause onClick={handleToggleTimer} size={50} className="icon"/>
            :
            <Play onClick={handleToggleTimer} size={50} className="icon"/>
            }
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
    handleToggleTimer: () => {
        dispatch(toggleTimer());
    },
    handleResetTimer: () => {
        dispatch(resetTimer());
    },
    handlePreviousStage: () => {
        dispatch(goToPreviousStage())
    },
    handleNextStage: () => {
        dispatch(goToNextStage())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Timer);