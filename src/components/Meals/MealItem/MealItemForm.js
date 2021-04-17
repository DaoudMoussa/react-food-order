import classes from './MealItemForm.module.css'

import React from 'react'

const MealItemForm = () => {
    return (
        <form className={classes.form}>
            <div className={classes.input}>
                <label htmlFor='amount'>Amount</label>
                <input id='amount' type='number' min='1' max='5' step='1' defaultValue='1' />
            </div>
            
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm
