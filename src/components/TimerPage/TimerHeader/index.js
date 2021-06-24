import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { refreshTime } from 'src/actions/timer';

import './timerHeader.scss';

const TimerHeader = ({hour, minute, second}) => {

    const currentTime = hour + " : " + minute + " : " + second;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshTime());
    }, [])
    
    return(

    <div className="timerHeader">
        <div className="timerHeader__name">
            <h2 className="timerHeader__name_content">Tournoi de la mort qui tue chez TOTO</h2>
        </div>
        <div className="timerHeader__time">
            <span className="timerHeader__time__content">{currentTime}</span>
        </div>

    </div>
)}

const mapStateToProps = (state) => ({
    hour: state.timer.currentTime.hour,
    minute: state.timer.currentTime.minute,
    second: state.timer.currentTime.second,
})

export default connect(mapStateToProps)(TimerHeader);