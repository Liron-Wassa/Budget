import React from 'react';
import Balance from './components/Balance/Balance';
import BalanceContextProvider from './contexts/BalanceContext';
import BalanceList from './components/BalanceList/BalanceList';
import Inputs from './components/Inputs/Inputs';
import Viewes from './components/Viewes/Viewes';
import classes from './App.module.css';

function App() {
  return (
    <div>
        <BalanceContextProvider>
          <div className={classes.App}>
            <Balance/>
            <Viewes/>
          </div>
          <Inputs/>
          <BalanceList/>
        </BalanceContextProvider>
    </div>
  );
}

export default App;
