import Link from 'next/link'
import React, { Suspense } from 'react'
import styles from './page.module.css'
import { getMeals } from '@/lib/meals';
import MealGrid from '@/components/meals/meal-grid';

//make a call to db to get all meals and load
//them in the mealGrid component
async function LoadMeals() {
	const meals = await getMeals();
  return (
	<MealGrid meals={meals} />
  )
}

//Note to convert standard css
export default async function Meals() {
  return (
		<>
			<header className={styles.header}>
				<h1>
					Delicious meals curated{" "}
					<span className={styles.highlight}>BY YOU!</span>
				</h1>
				<p>Choose your favorite recipe and start cookin`&apos`</p>

				<p className={styles.cta}>
					<Link href='meals/share'>Share Your Favorie Recipes</Link>
				</p>
			</header>
			<main className={styles.main}>
				<Suspense
					fallback={<p className={styles.loading}>Getting Ingredients...</p>}
				>
					<LoadMeals />
				</Suspense>
			</main>
		</>
	);
}
