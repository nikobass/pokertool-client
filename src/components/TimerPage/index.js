import React from 'react';

import Timer from './Timer';
import TimerBlinds from './TimerBlinds';
import TimerHeader from './TimerHeader';
import TimerChips from './TimerChips';

import './timerPage.scss';

const TimerPage = () => (
    <div className="timerPage">
        <div className="timerPage__header">
            <TimerHeader />
        </div>
        <div className="timerPage__infos">
            <div className="timerPage__infos__cashPrice">

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

)

export default TimerPage;