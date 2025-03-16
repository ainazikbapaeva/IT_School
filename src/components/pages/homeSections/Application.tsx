"use client";
import React, { useState } from "react";
import scss from "./application.module.scss";

const Application = () => {
	const [fullName, setFullName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", { fullName, phoneNumber, email });

		setFullName("");
		setPhoneNumber("");
		setEmail("");
	};
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
					<form onSubmit={handleSubmit} className={scss.formBlock}>
						<div className={scss.form}>
							<span>ФИО*</span>
							<input
								type="text"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
							/>
						</div>
						<div className={scss.form}>
							<span>Номер телефон*</span>
							<input
								type="text"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
						</div>
						<div className={scss.form}>
							<span>Email*</span>
							<input
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<button type="submit">Отправить</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Application;
