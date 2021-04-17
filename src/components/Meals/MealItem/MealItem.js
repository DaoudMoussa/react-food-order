import React from 'react'

import MealItemForm from './MealItemForm';

import classes from './MealItem.module.css'
const MealItem = () => {
    return (
        <li className={classes.meal}>
            <div>
                <h3>Nome piatto</h3>
                <div className={classes.description}>Descrizione dettagliata del piatto</div>
                <div className={classes.price}>prezzo €</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}

export default MealItem
