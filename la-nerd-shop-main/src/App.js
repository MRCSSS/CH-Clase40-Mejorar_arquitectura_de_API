import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

// Components
import Header from "./components/Header"
import Home from "./views/Home"
import Products from "./components/Products"
import NeedHelp from "./components/NeedHelp"

import "./styles/App.scss"

function App() {
	const { pathname, hash, key } = useLocation()

	useEffect(() => {
		// if not a hash link, scroll to top
		if (hash === "") {
			window.scrollTo({left: 0, top: 0, behavior: "smooth"})
		}
		// else scroll to id
		else {
			setTimeout(() => {
				const id = hash.replace("#", "")
				const element = document.getElementById(id)
				if (element) {
					element.scrollIntoView()
				}
			}, 0)
		}
	}, [pathname, hash, key]) // do this on route change

	return (
		<>
			<Header />
			<NeedHelp />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Products />} />
			</Routes>
		</>
	)
}

export default App
