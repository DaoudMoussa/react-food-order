import React, {useState} from 'react'

import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const [amount, setAmount] = useState(1)

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if(amount <= 5) props.onAddToCart(amount);
        else alert('Amount not valid! It has to be between 0 and 5');


        
    }

    const changeAmountHandler = (event) => {
        setAmount(+event.target.value);
    }

    return (
        <form onSubmit={formSubmitHandler} className={classes.form}>
            <div className={classes.input}>
                <label htmlFor='amount'>Amount</label>
                <input onChange={changeAmountHandler} id='amount' type='number' min='1' max='5' step='1' value={amount} />
            </div>
            
            <button type="submit">+ Add</button>
        </form>
    )
}

export default MealItemForm
