import React, { Component } from 'react';
import { BalanceContext } from '../../contexts/BalanceContext';
import classes from './Inputs.module.css';

class Inputs extends Component {

    static contextType = BalanceContext;

    constructor(){
        super();

        this.descriptionInputRef = React.createRef();
        this.sumInputRef = React.createRef();

        this.balance = {
            description: null,
            sum: null,
            sign: "+"
        };

        this.style = {
            positive: {
                borderRadius: "5px",
                border: "2px solid lightgreen"
            },
            nagative: {
                borderRadius: "5px",
                border: "2px solid salmon"
            }
        };
    }
   
    render() {

        return (
            <div className={classes.InputsContainer}>
                <div className={classes.Inputs}>
                    <select id="sign"
                        onChange={this.selectHandler}
                        className={classes.select}
                        style={this.context.positive ? this.style.positive : this.style.nagative}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                    <input
                        ref={this.descriptionInputRef}
                        placeholder="Description"
                        id="description"
                        className={classes.description}
                        style={this.context.positive ? this.style.positive : this.style.nagative}
                        onChange={this.changeHandler}/>
                    <input
                        ref={this.sumInputRef}
                        type="number"
                        placeholder="Sum"
                        id="sum"
                        className={classes.sum}
                        style={this.context.positive ? this.style.positive : this.style.nagative}
                        onChange={this.changeHandler}/>
                    <button
                        onClick={this.checkFields}
                        className={classes.add}
                        style={this.context.positive ? this.style.positive : this.style.nagative}>
                        Add
                    </button>
                </div>
            </div>
        )
    }

    changeHandler = (e) => {
        this.balance[e.target.id] = e.target.value;
    }

    checkFields = () => {
        if(this.balance.description && this.balance.sum > 0){
            this.context.add(this.balance);
            this.descriptionInputRef.current.value = "";
            this.sumInputRef.current.value = "";
            this.balance.description = null;
            this.balance.sum = null;
        }
        else{
            alert("You need to fill all the fields and the number has to be bigger than 0!!!");
        }
    }

    selectHandler = (e) => {
        this.changeHandler(e);
        this.context.changeColor(this.balance.sign);
    }
}

export default Inputs;