import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'

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

export async function saveMeal(meal){
    //turn meal in to slug
    meal.slug = slugify(meal.title, {lower: true})

    //protect instructions
    meal.instructions = xss(meal.instructions)

    //grab extension from image
    const extension = meal.image.name.split('.').pop();

    //name the file using slug
    const fileName = `${meal.slug}_meal.${extension}`

    //use writestream to create file path for user images
    const stream = fs.createWriteStream(`public/userimages/${fileName}`)
    //buffer the image to write it as a chunk
    const bufferedImage = await meal.image.arrayBuffer()

    //Write the buffered file to stream
    stream.write(Buffer.from(bufferedImage), (error)=>{
        if (error){
            throw new Error("Failed to store image!")
        }
    })

    meal.image = `/userimages/${fileName}`;

    db.prepare(
			`
        INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
        `
		).run(meal);
}
