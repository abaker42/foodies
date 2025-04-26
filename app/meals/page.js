import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

export default function Meals() {
  return (
		<>
		<header className={styles.header}>
			<h1>Delicious meals curated <span className={styles.highlight}>BY YOU!</span></h1>
			<p>Choose your favorite recipe and start cookin'</p>

			<p className={styles.cta}>
				<Link href='meals/share'>Share Your Favorie Recipes</Link>
			</p>
		</header>
		<main className={styles.main}>
			
		</main>
		</>
	);
}
