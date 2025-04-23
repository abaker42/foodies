import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import styles from './main-header.module.css'
import Image from 'next/image'
import MainBackgound from './main-background';

export default function MainHeader() {
  return (
		<>
			<MainBackgound />
			<header className={styles.header}>
				<Link href='/' className={styles.logo}>
					<Image src={logoImg} alt='A plate of food' priority />
					Foodies
				</Link>

				<nav className={styles.nav}>
					<ul>
						<li>
							<Link href='/meals'>Browse Meals</Link>
						</li>
						<li>
							<Link href='/community'>Foodie Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
