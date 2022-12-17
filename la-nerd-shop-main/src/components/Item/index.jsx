import React from 'react'
import { ReactComponent as CartIcon } from "../../assets/img/cart-icon.svg"


function Item({ title, description, price, image, thumbnailOne, thumbnailTwo, thumbnailThree, thumbnailFour }) {
    return (
        <div className='card'>
            <img src={image} alt={title} className="card-img"/>
            <div className='card-thumbnail-container'>
                <img src={thumbnailOne} alt={title} className="card-thumbnail"/>
                <img src={thumbnailTwo} alt={title} className="card-thumbnail"/>
                <img src={thumbnailThree} alt={title} className="card-thumbnail"/>
                <img src={thumbnailFour} alt={title} className="card-thumbnail"/>
            </div>
            <h2 className='card-title'>{title}</h2>
            <p>{description}</p>
            <div className='card-price-icon'>
                <p>PRECIO: ${price}</p>
                <div className='card-cart-container'>                   
                <CartIcon />
                <div className='card-circle'><span className='card-circle-plus'>+</span></div>
                </div>
            </div>         
        </div>
    )
}

export default Item