import React, {useContext} from 'react'
import MyContext from '../../context/MyContext'
import {Link} from 'react-router-dom'

const Product = () => {

    const shop= useContext(MyContext)

     const {result, addToCart} = shop
                
    return (
      <div className="cardContainer">
        {result.data.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <Link to='/product-detail' state={item}><img src={item.image_link} alt="" /></Link>
            <p>{item.price}</p>
            <span> Price {item.price} $</span>
            <button onClick={() => addToCart(item)}>ADD to cart</button>
          </div>
        ))}
      </div>
    );
}

export default Product
