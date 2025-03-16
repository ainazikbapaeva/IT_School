import React from "react";
import scss from "./application.module.scss";

const Application = () => {
	return (
		<div className={scss.application}>
			<div className="container">
				<div className={scss.content}>
					<div>
						<h1 className={scss.title}>Оставить заявку</h1>
						<p className={scss.text}>
							Заполните краткую форму с ключевым вопросами, и мы подготовимся к
							разговору с вами
						</p>
					</div>
					<div className={scss.formBlock}>
						<div className={scss.form}>
							<span>ФИО*</span>
							<input type="text" />
						</div>
						<div className={scss.form}>
							<span>Номер телефон*</span>
							<input type="text" />
						</div>
						<div className={scss.form}>
							<span>Email*</span>
							<input type="text" />
						</div>
						<button>Отправить</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Application;
