import React from 'react'
import MealItem from './meal-item'

export default function MealGrid({meals}) {
  return (
    <ul>
        {meals.map(meal => <li key={meal.id}>
            <MealItem {...meal}/>
        </li> )}
    </ul>
  )
}
