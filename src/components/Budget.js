import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget, Currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const handleUpdateBudget = () => {
        setBudget(newBudget);
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            <button onClick={handleUpdateBudget}>Update Budget</button>
        </div>
    );
};

export default Budget;
