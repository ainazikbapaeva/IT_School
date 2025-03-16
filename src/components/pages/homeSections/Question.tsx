"use client";
import { FC, useState } from "react";
import styles from "./question.module.scss";
import Image from "next/image";
import questionsImg from "../../../assets/images/questions.png";

const faqData = [
	{
		question: "Что такое зарезервированные слова в программировании?",
		answer:
			"Зарезервированные или ключевые слова - это слова и выражения, которые имеют при написании кода для иных целей, например, для именования переменных. Примеры распространенных ключевых слов в языках программирования - это конструкции if/then/else или различные варианты циклов, вроде for и while.",
	},
	{
		question: "Могу ли я отказаться от автопродления подписки?",
		answer:
			"Зарезервированные или ключевые слова - это слова и выражения, которые имеют при написании кода для иных целей, например, для именования переменных. Примеры распространенных ключевых слов в языках программирования - это конструкции if/then/else или различные варианты циклов, вроде for и while.",
	},
	{
		question: "Могу ли я вернуть деньги?",
		answer: "Возврат возможен в течение 14 дней после оплаты.",
	},
	{
		question: "Какие направления в IT самые актуальные?",
		answer: "Искусственный интеллект, кибербезопасность, веб-разработка...",
	},
	{
		question: "Нужно ли учить другой язык перед изучением C++?",
		answer: "Нет, но знание основ программирования поможет.",
	},
];

const Question: FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className={styles.Question}>
			<div className="container">
				<div style={{ display: "flex", justifyContent: "center" }}>
					<div className={styles.content}>
						<div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
							<h1 className={styles.title}>Подпишитесь сейчас за 19,00 $ / мес</h1>
							<p className={styles.text}>
								И получите доступ к материалам и кейсам, а также к новым мастер-классам
							</p>
						</div>
						<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
							<button className={styles.buttons}>Оформить подписку</button>
							<button className={styles.buttons2}>Подробнее о пакетах</button>
						</div>
					</div>
				</div>
				<div className={styles.remainedBlock}>
					<div>
						<h1 className={styles.Remained}>Остались вопросы?</h1>
						<Image
							style={{ position: "relative", top: "35px" }}
							src={questionsImg}
							alt="questions"
						/>
					</div>
					<div className={styles.faqContainer}>
						{faqData.map((item, index) => (
							<div
								key={index}
								className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""}`}
								onClick={() => toggleAccordion(index)}>
								<p className={styles.questionP}>{item.question}</p>
								<hr className={styles.hr} />
								<p className={styles.answerP}>{item.answer}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Question;
