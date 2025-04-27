import sql from 'better-sqlite3'

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
