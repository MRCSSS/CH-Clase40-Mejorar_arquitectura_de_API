import React from "react"
import AnimatedPage from "../../views/AnimatedPage"
import ItemList from "../ItemList"
import SectionTitle from "../SectionTitle"
import { ReactComponent as FilterIcon } from "../../assets/img/clarity_filter-2-line.svg"


function Products() {
	let img = "https://cdn.pixabay.com/photo/2016/11/23/14/44/hands-1853302__340.jpg"

	const items = [
		{
			id: 1,
			title: "Keyboard",
			description: "White keyboard kldjfakjsd flkjsdlfjl   sdajfklasjflsj dfkljasadslk fjasdjflasj",
			price: 4000,
			image: img,
			thumbnailOne: img,
			thumbnailTwo: img,
			thumbnailThree: img,
			thumbnailFour: img,
		},
		{
			id: 2,
			title: "Monitor",
			description: "Black monitor kldjfakjsd  flkjsdlfjlsd ajfklasjflsjdf kljasadslkfjasd jflasj",
			price: 4000,
			image: img,
			thumbnailOne: img,
			thumbnailTwo: img,
			thumbnailThree: img,
			thumbnailFour: img,
		},
		{
			id: 3,
			title: "Headphones",
			description: "Red headphones kldjfakj sdflkjsdlf jlsdajfkla sjflsjdfklja sadslkfjasdjflasj",
			price: 4000,
			image: img,
			thumbnailOne: img,
			thumbnailTwo: img,
			thumbnailThree: img,
			thumbnailFour: img,
		},
		{
			id: 4,
			title: "Cellphone",
			description: "Black cellphone kldjfakjsdflkjs dlfjlsdajfkla sjflsjdfklja sadslkfj asdjflasj",
			price: 4000,
			image: img,
			thumbnailOne: img,
			thumbnailTwo: img,
			thumbnailThree: img,
			thumbnailFour: img,
		},
		{
			id: 5,
			title: "Mouse",
			description:
				"Black keyboard kldjfakjsdfl kjsdlfjlsdaj fklasjflsjdf    kljasadslkfm jasdjflasj",
			price: 4000,
			image: img,
			thumbnailOne: img,
			thumbnailTwo: img,
			thumbnailThree: img,
			thumbnailFour: img,
		},
	]

	return (
		<AnimatedPage>
			<div className="products-container">
				<div className="products-title-container">
					<SectionTitle>PRODUCTOS</SectionTitle>
					<div className="productos-filter">
						<FilterIcon />
						<p>Filtrar</p>
					</div>
				</div>
				<ItemList items={items} />
			</div>
		</AnimatedPage>
	)
}

export default Products
