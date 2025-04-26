"use client"
import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import styles from './main-header.module.css'
import Image from 'next/image'
import MainBackgound from './main-background';
import NavLink from './nav-link/nav-link'

export default function MainHeader() {
	//leaving a comment to ensure git wprking properly
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
							<NavLink href='/meals'>Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href='/community'>Foodie Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
