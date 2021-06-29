import React from 'react';
import { connect } from 'react-redux';

import './timerCashPrice.scss'

const TimerCashPrice = ({cashPrice}) => (

    <div className="timerCashPrice">
        <h2 className="timerCashPrice__title">Cash Price</h2>
        {cashPrice.map((price, i) => (
            <li className="timerCashPrice__amount" key={price.position+price.amount}>{i === 0 ? `${price.position}er : ${price.amount}€` : `${price.position}ème : ${price.amount}€`}</li>
        ))}
    </div>
)

const mapStateToProps = (state) => ({
    cashPrice: state.timer.cashPrice
})

export default connect(mapStateToProps)(TimerCashPrice)