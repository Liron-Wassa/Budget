import React, { Component } from 'react';
import { BalanceContext } from '../../contexts/BalanceContext';
import classes from './Expenses.module.css';

class Expenses extends Component {

    static contextType = BalanceContext;

    render() {

        let incomes = 0;

        for (let idx = 0; idx < this.context.incomes.length; idx++) {
            incomes += Number(this.context.incomes[idx].sum);
        }

        let expenseElements = this.context.expenses.map((expense, index) => {

            let percent = Math.ceil(Number(expense.sum) * 100 / incomes);
            
            return <li key={index} className={classes.li}>
                <strong>
                   <span>{expense.description}</span>
                </strong>
                <div>
                    <span>
                        <strong>
                            <span>{expense.sign}</span>
                            <span>{this.context.numberWithCommas(Number(expense.sum).toFixed(2))}</span>
                        </strong>
                        <span className={classes.percent}>
                            {percent === Infinity ? <span>-</span> : <span>{Math.floor(Number(expense.sum) * 100 / incomes)}%</span>}
                        </span>
                    </span>
                    <i onClick={() => this.context.deleteExpense(index)} className={`fas fa-trash-alt ${classes.delete}`}/>
                </div>
            </li>
        });

        return (
            <div className={classes.Expenses}>
                <h1 className={classes.header}>Expenses</h1>
                <ul className={classes.list}>
                    {expenseElements}
                </ul>
            </div>
        )
    }
}

export default Expenses;