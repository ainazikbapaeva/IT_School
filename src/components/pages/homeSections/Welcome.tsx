import Image from "next/image";
import scss from "./welcome.module.scss";
import it from "../../../assets/images/itmen.png";
// fghjk
const Welcome = () => {
	return (
		<div className={scss.welcome}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.divBlock}>
						<h2>IT образовательная платформа </h2>
						<p>
							Наша образовательная платформа вам даст необходимые практические
							знания для адаптации в IT-сфере.
						</p>
					</div>
					<Image src={it} alt="it" />
				</div>
			</div>
		</div>
	);
};

export default Welcome;
