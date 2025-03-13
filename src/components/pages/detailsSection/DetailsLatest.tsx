import React from "react";
import scss from "./detailsLatest.module.scss";
import Image from "next/image";
import it from "../../../assets/images/it.png";
import key from "../../../assets/images/key.png";
import user from "../../../assets/images/user.png";
import { IoReaderOutline } from "react-icons/io5";

const DetailsLatest = () => {
	const nameDetails = [
		{
			name: "Мы подготовили подборку самых популярных курсов  по направлению Java в IBS Training Center.",
			description:
				"Когда-то ни один крупный проект не обходился без применения функционального и асинхронного программирования. Эти подходы до сих пор популярны за счет своих преимуществ: они помогают выдерживать большие нагрузки и писать эффективный код, не теряя в скорости разработки. ",
		},
	];

	const nameSpring = [
		{
			name: "В рамках курса от IBS Training Center вы поймете, как работают основные фичи Spring Framework 5, и узнаете:",
			description: "Какие существуют конфигурации для Spring Framework 5;",
		},
		{
			description:
				"Как работать с REST-сервисами и документацией при помощи Swagger.",
		},
		{
			description: "Что такое бины и как с ними работать;",
		},
		{
			description: "Что такое Концепция IoC;",
		},
		{
			description: "Примеры использования AOP;",
		},
	];

	const nameOther = [
		{
			name: "Статьи",
			description:
				"Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. ",
			date: "21.09.2022",
		},
		{
			name: "Статьи",
			description:
				"Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. ",
			date: "21.09.2022",
		},
		{
			name: "Статьи",
			description:
				"Мы подготовили подборку самых популярных курсов по направлению Java в IBS Training Center. ",
			date: "21.09.2022",
		},
	];
	return (
		<div className={scss.detailsLatest}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.breadcrumbs}>
						<span>Главная </span>
						<span> / Статья </span>
						<span> / Мы подготовили...</span>
					</div>
					<span className={scss.date}>11.09.2022 </span>
					{nameDetails.map((el, index) => (
						<div className={scss.divBlock} key={index}>
							<h2 className={scss.name}>{el.name}</h2>
							<p className={scss.description}>{el.description}</p>
							<Image className={scss.imgIt} src={it} alt="it" />
						</div>
					))}

					<div>
						{nameSpring.map((el, index) => (
							<div className={scss.divBlock2} key={index}>
								<h1 className={scss.name2}>{el.name}</h1>
								<ul>
									<li>{el.description}</li>
								</ul>
							</div>
						))}
					</div>
					<div className={scss.line}>
						<div className={scss.line2}>
							<div
								style={{ display: "flex", gap: "40px", alignItems: "center" }}>
								<Image className={scss.key} src={key} alt="key" />
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "18px",
										position: "relative",
										top: "45px",
									}}>
									<h1 className={scss.make}>
										Оформите подписку, чтобы посмотреть полную версию
									</h1>
									<p>
										Вы уже авторизованы? <span>Авторизуйтесь</span>
									</p>
								</div>
							</div>
							<button className={scss.get}>Получить доступ за 225,00$</button>
						</div>
					</div>
					<h1 className={scss.comments}>Комментарии</h1>
					<div className={scss.commentsBlock}>
						<div className={scss.commentsBlock2}>
							<div
								style={{ display: "flex", gap: "40px", alignItems: "center" }}>
								<Image src={user} alt="user" />
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "18px",
										position: "relative",
										top: "12px",
									}}>
									<h1 className={scss.make2}>Вы не зарегистрировались!</h1>
									<p className={scss.com}>
										Чтобы оставить комментарий, пожалуйста авторизуйтесь или
										зарегитрируйтесь.
									</p>
								</div>
							</div>
							<button className={scss.register}>Зарегистрироваться</button>
						</div>
					</div>
					<h1 className={scss.other}>Другие статьи </h1>
					<div
						style={{
							display: "flex",
							gap: "30px",
							// justifyContent: "center",
							alignItems: "center",
						}}>
						<div className={scss.otherBlock}>
							{nameOther.map((el, index) => (
								<div key={index} className={scss.otherBlock2}>
									<div className={scss.otherBlock3}>
										<h5>{el.name}</h5>
										<p className={scss.otherDescription}>{el.description}</p>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												gap: "110px",
												marginTop: "18px",
											}}>
											<p
												style={{
													display: "flex",
													gap: "10px",
													alignItems: "center",
												}}>
												<IoReaderOutline className={scss.icon} />
												<span className={scss.readd}>Читать</span>
											</p>
											<span className={scss.dated}>{el.date}</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsLatest;
