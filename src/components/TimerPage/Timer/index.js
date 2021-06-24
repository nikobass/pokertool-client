import React from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'react-feather';
import { connect } from 'react-redux';

import './timer.scss';

import { 
    toggleTimer, 
    resetTimer, 
    goToPreviousStage,
    goToNextStage,
    changeRange
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
    handleRangeChange,
    rangeValue,
    rangeValueMax,
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
                {seconde < 10 && seconde >= 0 ? "0"+seconde : seconde}
            </div>
        </div>
        <div className="timer__range">
            <input onChange={handleRangeChange} className="timer__range__input" type="range" value={rangeValue} min={0} max={rangeValueMax} />
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
    rangeValue: state.timer.rangeValue,
    rangeValueMax: state.timer.rangeValueMax,
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
    },
    handleRangeChange: (event) => {
        dispatch(changeRange(event.target.value))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Timer);