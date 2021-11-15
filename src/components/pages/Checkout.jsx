import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import MyContext from '../../context/MyContext'

const Checkout = () => {
    const context = useContext(MyContext)
    const {cart, totalCalc} =context;

    return (
        <section>
            <h1>CHECKOUT</h1>
            {cart.map((item)=> (
             <div key={item.id}>
                 <h3>{item.name}</h3><span>item price : {item.price * item.quality}</span>
                 <span>item quantity : {item.quantity} </span>
                 <p>Thanks for shopping with us</p>
                 </div> 


            ))}
            
        </section>
    )
}

export default Checkout
