import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import check from '../assets/img/check.png'
import rest from '../assets/img/rest.png'

const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }



    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.cost}</td>
        <td><img src={check} onClick={event=> increaseAllocation(props.name)}></img></td>
        <td><img src={rest} onClick={event=> decreaseAllocation(props.name)}></img></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
