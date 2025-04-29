import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db')

import React from 'react'

export async function getMeals() {
    //on purpose delay to display loading state
    await new Promise((reslove) => setTimeout(reslove, 2000))
    //throwing error for testing purposes
    //throw new Error("FAILED TO GET MEALS")

    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug){
	//on purpose delay to display loading state
	//await new Promise((reslove) => setTimeout(reslove, 2000));

	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export function saveMeal(meal){
    meal.slug = slugify(meal.title, {lower: true})
    meal.instructions = xss(meal.instructions)


}
