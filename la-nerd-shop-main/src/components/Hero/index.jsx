import logoBig from "../../assets/img/logo-big.svg"
import { socialNetworks } from "../../social-networks"
import { ReactComponent as ArrowIcon } from "../../assets/img/arrow-down.svg"

export default function Hero() {
	return (
		<div className="hero-container">
			<div className="hero-logo">
				<img src={logoBig} alt="logo" />
			</div>
			<p className="slogan">
				La tecnología que siempre <br />has querido.
			</p>
			<div className="social-icons">
				{socialNetworks.map(el => (
					<a href={el.url} key={el.name} title={el.name}>
						<img src={el.icon} alt={el.name} />
					</a>
				))}
			</div>
				<a href="#carousel" className="shop-now">
					<span>Shop now</span>
					<ArrowIcon className="shop-now-icon" />
				</a>
		</div>
	)
}
