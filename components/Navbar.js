import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';
import { Navtext } from '../components/Typography';
import MenuButton from './MenuButton';

function Navbar({ current }) {
	return (
		<nav className={styles.navbar}>
			<Image src='/assets/shared/logo.svg' height='48' width='48' />
			<MenuButton />
			<ul className={styles.navlist}>
				{[
					{
						label: 'home',
						link: '/',
					},
					{
						label: 'destinations',
						link: '/destinations',
					},
					{
						label: 'crew',
						link: '/crew',
					},
					{
						label: 'technology',
						link: '/technology',
					},
				].map((item, index) => {
					if (item.label == current) {
						return (
							<li key={index}>
								<Link href={item.link}>
									<a
										className={`${styles.navlink} ${styles.active}`}>
										<span
											className={
												styles.linkNumber
											}>{`0${index}`}</span>
										<Navtext text={item.label} />
									</a>
								</Link>
							</li>
						);
					} else {
						return (
							<li key={index}>
								<Link href={item.link}>
									<a className={styles.navlink}>
										<span
											className={
												styles.linkNumber
											}>{`0${index}`}</span>
										<Navtext text={item.label} />
									</a>
								</Link>
							</li>
						);
					}
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
