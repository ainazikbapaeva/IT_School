"use client";
import styles from "./burgerMenu.module.scss";
import Link from "next/link";
import { links } from "@/constants/links";
import { useHeaderStore } from "@/store/useHeaderStore";

const BurgerMenu = () => {
	const { isOpen, toggleMenu } = useHeaderStore();

	return (
		<div className={`${styles.BurgerMenu} ${isOpen ? styles.active : ""}`}>
			<button className={styles.closeButton} onClick={toggleMenu}>
				X
			</button>

			<nav className={styles.nav}>
				<ul>
					{links.map((item, index) => (
						<li key={index}>
							<Link href={item.href}>{item.name}</Link>
						</li>
					))}
				</ul>
				<div className={styles.buttons}>
					<button className={styles.logo1}>Войти</button>
					<button className={styles.logo2}>Подписаться </button>
				</div>
			</nav>
		</div>
	);
};

export default BurgerMenu;
