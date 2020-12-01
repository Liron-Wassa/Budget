import React, { Component } from 'react';
import classes from './Viewes.module.css';
import { BalanceContext } from '../../contexts/BalanceContext';

export default class Viewes extends Component {
    
    static contextType = BalanceContext;
    
    render() {

        let expenses = 0;
        let incomes = 0;
        let percent = 0;
        
        for (let idx = 0; idx < this.context.incomes.length; idx++) {
            incomes += Number(this.context.incomes[idx].sum);
        }

        for (let idx = 0; idx < this.context.expenses.length; idx++) {
            expenses += Number(this.context.expenses[idx].sum);            
        }
        
        percent = expenses * 100 / incomes;
        
        return (
            <div className={classes.Viewes}>
                <div>
                    <div className={classes.income}>
                        <span>
                            <strong>INCOME</strong>
                        </span>
                        <span>
                            <span>+</span>
                            <span>{this.context.numberWithCommas(incomes.toFixed(2))}</span>
                        </span>
                    </div>
                    <div className={classes.expense}>
                        <span>
                            <strong>EXPENSES</strong>
                        </span>
                        <span>
                            <span>-</span>
                            <span>{this.context.numberWithCommas(expenses.toFixed(2))}</span>
                            <span className={classes.percent}>
                                {percent === Infinity ? <span>-</span> : percent ? <span>{Math.floor(percent)}%</span> : <span>-</span>}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}