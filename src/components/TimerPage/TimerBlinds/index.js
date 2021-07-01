import React from 'react';
import { connect } from 'react-redux';

import './timerBlinds.scss';

const TimerBlinds = ({
    previousSB, 
    previousBB, 
    smallBlind, 
    bigBlind, 
    nextSB, 
    nextBB
    }) => (
<div className="timerBlinds">
    <div className="timerBlinds__aside">
        <div className="timerBlinds__aside__amount">
            {previousBB ? previousSB : "--"}<span className="timerBlinds__aside__amount__slash">/</span>{previousBB ? previousBB : "--"}
        </div>
        <div className="timerBlinds__aside__text">
            Blinds précédentes
        </div>
    </div>

    <div className="timerBlinds__current">
        <div className="timerBlinds__current__amount">
            {smallBlind}<span className="timerBlinds__current__amount__slash">/</span>{bigBlind}
        </div>
        <div className="timerBlinds__current__text">
            Blinds actuelles
        </div>
    </div>

    <div className="timerBlinds__aside">
        <div className="timerBlinds__aside__amount">
        {nextSB ? nextSB : "--"}<span className="timerBlinds__aside__amount__slash">/</span>{nextBB ? nextBB : "--"}
        </div>
        <div className="timerBlinds__aside__text">
            Blinds suivantes
        </div>
    </div>
</div>

)

const mapStateToProps = (state) => ({
    previousSB: state.timer.currentValues.previousSB,
    previousBB: state.timer.currentValues.previousBB, 
    smallBlind: state.timer.currentValues.smallBlind, 
    bigBlind: state.timer.currentValues.bigBlind, 
    nextSB: state.timer.currentValues.nextSB, 
    nextBB: state.timer.currentValues.nextBB,
})

export default connect(mapStateToProps)(TimerBlinds);