import { headers } from "@/next.config";
import Link from "next/link";
import styles from './page.module.css'
import Slideshow from "@/components/slideshow/slideshow";

export default function Home() {
	/**
	 * The continued vision for this foodies app 
	 * 1. recreate app using tailwind and framer motion
	 * 2. be able to upload images to cloud (amazon s3)
	 * 3. add delete functionality
	 */
  return (
		<>
			<header className={styles.header}>
				<div className={styles.slideshow}>
          <Slideshow />
        </div>

				<div className=''>
					<div className={styles.hero}>
						<h1>NextLevel Food for NextLevel Foodies</h1>
						<p>Come tast & share delicacies from all over the world. </p>
					</div>
					<div className={styles.cta}>
						<Link href='/community'>Join the Community</Link>
						<Link href='/meals'>Explore Meals</Link>
					</div>
				</div>
			</header>
			<main>
				<section className={styles.section}>
					<h2>How it works</h2>
					<p>
						NextLevel Food is a platform for foodies to share their favorite
						recipes with the world. It&apos;s a place to discover new dishes,
						and to connect with other food lovers.
					</p>
					<p>
						NextLevel Food is a place to discover new dishes, and to connect
						with other food lovers.
					</p>
				</section>

				<section className={styles.section}>
					<h2>Why NextLevel Food?</h2>
					<p>
						NextLevel Food is a platform for foodies to share their favorite
						recipes with the world. It&apos;s a place to discover new dishes,
						and to connect with other food lovers.
					</p>
					<p>
						NextLevel Food is a place to discover new dishes, and to connect
						with other food lovers.
					</p>
				</section>
			</main>
		</>
	);
}
