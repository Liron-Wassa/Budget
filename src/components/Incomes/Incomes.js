import React, { Component } from 'react';
import { BalanceContext } from '../../contexts/BalanceContext';
import classes from './Incomes.module.css';

class Incomes extends Component {

    static contextType = BalanceContext;

    render() {
        
        let incomeElements = this.context.incomes.map((income, index) => {
            return <li key={index} className={classes.li}>
                <strong>
                    <span>{income.description}</span>
                </strong>
                <strong>
                    <span>
                        <span>{income.sign}</span>
                        <span>{this.context.numberWithCommas(Number(income.sum).toFixed(2))}</span>
                    </span>
                </strong>
                <i onClick={() => this.context.deleteIncome(index)} className={`fas fa-trash-alt ${classes.delete}`}/>
            </li>
        });
        
        return (
            <div className={classes.Incomes}>
                <h1 className={classes.header}>Incomes</h1>
                <ul className={classes.list}>
                    {incomeElements}
                </ul>
            </div>
        )
    }
}

export default Incomes;