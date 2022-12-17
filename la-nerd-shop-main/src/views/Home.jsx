import AnimatedPage from "./AnimatedPage"
import Carousel from "../components/Carousel"
import Hero from "../components/Hero"
import Contact from "../components/Contact"
import AboutUs from "../components/AboutUs"

export default function Home() {
	return (
		<AnimatedPage>
			<Hero />
			<Carousel />
			<AboutUs />
			<Contact />
		</AnimatedPage>
	)
}
