import React, { useEffect, useRef } from "react"
import M from "materialize-css"
import SectionTitle from "../SectionTitle"

import one from "../../assets/img/hero-bg.jpg"
import two from "../../assets/img/1.jpg"
import three from "../../assets/img/2.jpg"
import four from "../../assets/img/3.jpg"
import five from "../../assets/img/4.jpg"

function Carousel() {
	const refCarousel = useRef(null)

	useEffect(() => {
		const options = {
			duration: 200,
			indicators: true,
		}

		const instance = M.Carousel.init(refCarousel.current, options)
    const nextSlide = setInterval(()=> instance.next() , 3000)
		return () => {
			instance.destroy()
      clearInterval(nextSlide)
		}
	}, [])

	return (
		<section className="carousel-section" id="carousel">
			<SectionTitle>NUESTRAS OFERTAS</SectionTitle>

			<div ref={refCarousel} className="carousel">
				<div className="carousel-item">
					<img alt="1" src={one} />
				</div>
				<div className="carousel-item">
					<img alt="2" src={two} />
				</div>
				<div className="carousel-item">
					<img alt="3" src={three} />
				</div>
				<div className="carousel-item">
					<img alt="4" src={four} />
				</div>
				<div className="carousel-item">
					<img alt="5" src={five} />
				</div>
			</div>
		</section>
	)
}

export default Carousel
