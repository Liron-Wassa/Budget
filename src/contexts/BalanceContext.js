import React, { Component } from 'react';

export const BalanceContext = React.createContext();

class BalanceContextProvider extends Component {

    state = {balance: 0, expenses: [], incomes: [], positive: true};

    render() {

        return (
            <BalanceContext.Provider value={{
                    ...this.state,
                    add: this.add,
                    deleteExpense: this.deleteExpense,
                    deleteIncome: this.deleteIncome,
                    changeColor: this.changeColor,
                    numberWithCommas: this.numberWithCommas
                }}>
                {this.props.children}
            </BalanceContext.Provider>
        )
    }

    add = (obj) => {
      
        let tempObj = {...obj};
        let sign = tempObj.sign;
      
        if(sign === "+") {    
            this.setState((prevState, props) => {
                let incomes = [...prevState.incomes];
                incomes.push(tempObj);
                return {
                    incomes: incomes,
                    balance: prevState.balance + Number(tempObj.sum)
                }
            });
        }
        else {
            this.setState((prevState, props) => {
                let expenses = [...prevState.expenses];
                expenses.push(tempObj);
                return {
                    expenses: expenses,
                    balance: prevState.balance - Number(tempObj.sum)
                }
            });
        }
    }

    deleteExpense = (index) => {
        this.setState((prevState, props) => {
            let tempExpenses = [...prevState.expenses];
            let deletedExpese = tempExpenses[index].sum;
            tempExpenses.splice(index, 1);
            
            return {
                expenses: tempExpenses,
                balance: prevState.balance + Number(deletedExpese)
            }
        });
    }

    deleteIncome = (index) => {
        this.setState((prevState, props) => {
            let tempIncome = [...prevState.incomes];
            let deletedIncome = tempIncome[index].sum;
            tempIncome.splice(index, 1);
                    
            return {
                incomes: tempIncome,
                balance: prevState.balance - Number(deletedIncome)
            }
        });
    }

    changeColor = (sign) => {
        if(sign === "+"){
            this.setState({positive: true});
        }
        else{
            this.setState({positive: false});
        }
    }

    numberWithCommas = (number) => {
        number = number.toString();
        let pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(number)){
            number = number.replace(pattern, "$1,$2");
        }        
        return number;
    }
}

export default BalanceContextProvider;