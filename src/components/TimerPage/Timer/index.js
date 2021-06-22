import React from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'react-feather';
import { connect } from 'react-redux';

import './timer.scss';

const Timer = ({ minute, seconde, stage }) => (

    <div className="timer">
        <div className="timer__reset">
            <RotateCcw size={50} className="icon"/>
        </div>
        <div className="timer__stage">
            <div className="timer__stage__chevronLeft">
                <ChevronLeft size={50} className="icon"/>
            </div>
            <div className="timer__stage__stage">
                Étape {stage}
            </div>
            <div className="timer__stage__chevronRight">
                <ChevronRight size={50} className="icon"/>
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
            <Play size={50} className="icon"/>
            {/* <Pause /> */}
        </div>
    </div>







)

const mapStateToProps = (state) => ({
    minute: state.timer.minute,
    seconde: state.timer.seconde,
    stage: state.timer.stage,
})

export default connect(mapStateToProps)(Timer);