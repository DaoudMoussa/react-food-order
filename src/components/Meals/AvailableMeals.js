import React from 'react'

import MealItem from './MealItem/MealItem'
import Card from '../UI/Card/Card'
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    <MealItem/>
                    <MealItem/>
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
