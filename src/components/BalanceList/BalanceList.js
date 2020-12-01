import React from 'react';
import Incomes from '../Incomes/Incomes';
import Expenses from '../Expenses/Expenses';
import classes from './BalanceList.module.css';

function BalanceList() {
    return (
        <div className={classes.BalanceList}>
            <Incomes/>
            <Expenses/>
        </div>
    )
}

export default BalanceList;