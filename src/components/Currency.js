import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
    <div style={{ border: '2px solid black', borderRadius: '20px', padding: '5px', color: 'black', backgroundColor: 'lightgreen' }} className='alert alert-secondary'>
    Currency {
        <select style={{ color: 'black', border: '2px solid blakc', borderRadius: '3px', backgroundColor: 'lightgreen' }} name="Currency" id="Currency" onChange={event => changeCurrency(event.target.value)}>
        <option value="£">Pound(£)</option>
        <option value="$">Dollar($)</option>
        <option value="€">Euro(€)</option>
        <option value="₹">Ruppee(₹)</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;