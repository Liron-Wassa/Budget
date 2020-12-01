import React, { Component } from 'react';
import classes from './Balance.module.css';
import { BalanceContext } from '../../contexts/BalanceContext';

const month = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October","November", "December"
];

const date = new Date();

class Balance extends Component {

    static contextType = BalanceContext;
    
    render() {
        
        const sumOfBalance = this.context.balance.toFixed(2);

        return (
            <div className={classes.Balance}>
                <div>
                    <h2 className={classes.month}>Available Budget In {month[date.getMonth()]}</h2>
                    <h1 className={classes.balance}>
                        {this.context.numberWithCommas(this.context.balance >= 0 ? "+" + sumOfBalance : sumOfBalance)}
                    </h1>
                </div>
            </div>
        )
    }
}

export default Balance;