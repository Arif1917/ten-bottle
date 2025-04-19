import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css'
const Bottles = ({bottlePromise}) => {
    const bottles = use(bottlePromise)
    const [cart, setCart] =useState([])
    // console.log(bottles)
    const handleToCart = ()=>{
        const newCart = [...cart, cart]
        setCart(newCart)
    }
    return (
        <div>
            <h2>There are {bottles.length} Bottles</h2>
            <h2>Add to card {cart.length}</h2>
           <div className='bottle-grid'>
           {
                bottles.map(bottle => <Bottle handleToCart={handleToCart} bottle={bottle}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;