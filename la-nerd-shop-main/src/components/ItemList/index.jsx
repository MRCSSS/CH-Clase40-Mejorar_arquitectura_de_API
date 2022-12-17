import React from 'react'
import Item from '../Item/index'

function ItemList({ items }) {
  return (
    <div className=' card-container'>
      {items.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          price={item.price}
          description={item.description}
          id={item.id}
          image={item.image}
          thumbnailOne={item.thumbnailOne}
          thumbnailTwo={item.thumbnailTwo}
          thumbnailThree={item.thumbnailThree}
          thumbnailFour={item.thumbnailFour}
        />
      ))}
    </div>
  )
}

export default ItemList