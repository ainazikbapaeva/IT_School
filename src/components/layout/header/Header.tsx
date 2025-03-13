"use client";

import Image from "next/image";
import scss from "./header.module.scss";
import logo from "../../../assets/images/logo.svg";
import { links } from "@/constants/links";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BurgerButton from "@/components/ui/BurgerButton/BurgerButton";
import BurgerMenu from "@/components/ui/BurgerMenu/BurgerMenu";

const Header = () => {
	const [isMobile, setMobile] = useState(true);
	const route = useRouter();

	const changeIsMobile = () => {
		setMobile(window.innerWidth <= 768);
	};

	useEffect(() => {
		changeIsMobile();
		addEventListener("resize", changeIsMobile);
		return () => {
			removeEventListener("resize", changeIsMobile);
		};
	}, []);
	return (
		<div className={scss.header}>
			<div className="container">	
				<div className={scss.content}>
					<Image
						onClick={() => route.push("/")}
						src={logo}
						alt="logo"
						width={200}
						height={50}
						style={{ cursor: "pointer" }}
					/>
					{!isMobile ? (
						<>
							<div className={scss.right}>
								<nav className={scss.nav}>
									<ul>
										{links.map((item, index) => (
											<li key={index}>
												<Link href={item.href}>{item.name}</Link>
											</li>
										))}
									</ul>
								</nav>
								<div className={scss.buttons}>
									<button className={scss.btn1}>войти</button>
									<button className={scss.btn2}>Подписаться </button>
								</div>
							</div>
						</>
					) : (
						<div className={scss.burger}>
							<BurgerButton />
							<BurgerMenu />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
