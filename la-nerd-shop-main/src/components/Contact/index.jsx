import React from "react"
import SectionTitle from "../SectionTitle"
import { Link } from "react-router-dom"
import logoBig from "../../assets/img/logo-big.svg"
import credit from "../../assets/img/el_credit-card.svg"
import shipping from "../../assets/img/la_shipping-fast.svg"
import security from "../../assets/img/ant-design_safety-certificate-outlined.svg"
import { socialNetworks } from "../../social-networks"

function Contact() {
	return (
		<div className="contact-container" id="contact">
			<div>
				<SectionTitle>ESTEMOS EN CONTACTO!</SectionTitle>
			</div>
			<section className="contact-first-section">
				<form className="contact-first-section-form">
					<input type="text" placeholder="NOMBRE" className="contact-first-section-input" />
					<input type="number" placeholder="TELÉFONO" className="contact-first-section-input" />
					<input type="mail" placeholder="MAIL" className="contact-first-section-input" />
					<textarea placeholder="MENSAJE" className="contact-first-section-textarea"></textarea>
					<input type="button" value="ENVIAR" className="contact-first-section-button" />
				</form>
			</section>

			<section className="contact-second-section">
				<div>
					<Link to="/" className="contact-logo">
						<img src={logoBig} alt="logo" />
					</Link>
				</div>

				<div className="contact-end">
					<div className="contact-icon-container">
						<img src={credit} alt="tarjeta de crédito, ícono" className="contact-icon" />
						<p>¡ELEGÍ CÓMO PAGAR!</p>
					</div>
					<div className="contact-icon-container border">
						<img src={shipping} alt="envíos seguros, ícono" className="contact-icon" />
						<p>ENVÍOS 100% SEGUROS</p>
					</div>
					<div className="contact-icon-container">
						<img src={security} alt="seguridad, ícono" className="contact-icon" />
						<p>SEGURIDAD, DE PRINCIPIO A FIN</p>
					</div>
				</div>
				<div className="contact-social-help-container">
					{socialNetworks.map((el) => (
						<a href={el.url} key={el.name} title={el.name}>
							<img src={el.icon} alt={el.name} />
						</a>
					))}
				</div>
				<p className="developed">
					DESARROLLADO POR
					<a href="https://linktr.ee/desarrollo_LaNerdShop" target="_blank" rel="noreferrer">
						*LINKTREE*
					</a>
					😄
				</p>
			</section>
		</div>
	)
}

export default Contact
