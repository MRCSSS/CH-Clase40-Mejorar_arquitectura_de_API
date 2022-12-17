import SectionTitle from "../SectionTitle"

import logoBig from "../../assets/img/logo-big.svg"
import ownerImg from "../../assets/img/marcos.png"

export default function AboutUs() {
	return (
		<section className="about-us-section" id="about-us">
			<div className="about-us-logos-bg"></div>
			<div className="about-us-container">
				<SectionTitle>CONÓCENOS</SectionTitle>
				<div className="about-us">
					<div className="about-us-logo">
						<img src={logoBig} alt="logo" />
						<div className="logo-shadow"></div>
					</div>
					<p className="description">
						E-commerce enfocado en buscar, probar y seleccionar los mejores artículos novedosos de
						tecnología y concentrarlos en un solo lugar, con el objetivo de ser el sitio más
						conveniente para conseguir la tecnología que siempre has querido.
					</p>
					<div className="owner">
						<img src={ownerImg} alt="Marcos Solis" />
						<h3>Marcos Solis</h3>
						<p>
							Proyecto encabezado por Marcos Solis Santiago. Ingeniero y desarrollador mexicano
							apasionado por la tecnología, la innovación y los gadgets.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
