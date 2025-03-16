"use client";

import Image from "next/image";
import scss from "./footer.module.scss";
import logo from "../../../assets/images/logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";
import { PiTelegramLogo } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { useRouter } from "next/navigation";

const Footer = () => {
	const route = useRouter();
	return (
		<div className={scss.footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.top}>
						<Image
							style={{
								cursor: "pointer",
							}}
							onClick={() => route.push("/")}
							src={logo}
							alt="logo"
						/>
						<div className={scss.languages}>
							<button>KG</button>
							<button style={{ borderLeft: "none" }}>RU</button>
						</div>
					</div>
					<div className={scss.links}>
						<h3>Быстрые ссылки</h3>
						<p>О школе</p>
						<p>Наши курсы</p>
						<p>О нас</p>
					</div>
					<div className={scss.social}>
						<h3>Социальные сети</h3>
						<div className={scss.icons}>
							<FaInstagram className={scss.ins} />
							<FiYoutube className={scss.ins} />
							<CiFacebook className={scss.ins} />
						</div>
						<div className={scss.icons}>
							<CiTwitter className={scss.ins} />
							<RiTiktokLine className={scss.ins} />
							<PiTelegramLogo className={scss.ins} />
						</div>
					</div>
					<div className={scss.contacts}>
						<h3>Контакты</h3>
						<p className={scss.email}>
							<TfiEmail className={scss.iphone} />
							@motionwebteam@gmail.com
						</p>
						<p className={scss.email}>
							<FiPhone className={scss.iphone} />
							+996 559 - 69 - 26 - 26
						</p>
					</div>
					<div className={scss.address}>
						<h3>Адреса</h3>
						<p className={scss.add}>
							<CiLocationOn className={scss.iph} />
							Турусбекова 109 / 3
						</p>
						<p>Идентификационный код: 1234567890</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
