import scss from "./latest.module.scss";
import it from "../../../assets/images/it.png";
import Image from "next/image";
import { IoReaderOutline } from "react-icons/io5";
import { details } from "@/constants/details";
import Link from "next/link";

const Latest = () => {
	const nameLast = [
		{
			name: "Статьи",
			description:
				"Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
			date: "01.02.2022",
		},
		{
			name: "Статьи",
			description:
				"Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
			date: "01.02.2022",
		},
		{
			name: "Статьи",
			description:
				"Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
			date: "01.02.2022",
		},
		{
			name: "Статьи",
			description:
				"Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
			date: "01.02.2022",
		},
		{
			name: "Статьи",
			description:
				"Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
			date: "01.02.2022",
		},
		{
			name: "Статьи",
			description:
				"Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center.",
			date: "01.02.2022",
		},
	];

	return (
		<div className={scss.latest}>
			<div className="container">
				<div className={scss.content}>
					<h2>Последние статьи</h2>
					<div className={scss.articles}>
						{nameLast.map((el, index) => (
							<div key={index}>
								<Image src={it} alt="it" />
								<div className={scss.textBlock}>
									<div className={scss.text}>
										<span className={scss.span1}>{el.name}</span>
										<p>{el.description}</p>
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
												width: "320px",
												color: " #044176",
												marginTop: "10px",
												cursor: "pointer",
											}}>
											<span
												style={{
													display: "flex",
													alignItems: "center",
													gap: "5px",
													color: " #044176",
												}}>
												<IoReaderOutline
													style={{ fontSize: "20px", color: " #044176" }}
												/>
												{details.map((el, index) => (
													<div key={index}>
														<Link
															style={{
																color: " #044176",
																textDecoration: "none",
																fontSize: "17px",
															}}
															href={el.href}>
															{el.name}
														</Link>
													</div>
												))}
											</span>
											<span style={{ color: " #044176" }}>{el.date}</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<button className={scss.show}>Показать больше</button>
				</div>
			</div>
		</div>
	);
};

export default Latest;
