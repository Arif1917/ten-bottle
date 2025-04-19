import React from 'react';
import './Botte.css'
const Bottle = ({bottle,handleToCart}) => {
    const {name, price, img } = bottle
    return (
        <div className='bottle'>
            <h2>Name: {name}</h2>
            <h2>Price: {price}</h2>
            <img src={img} alt="" />
            <button onClick={handleToCart}>Add to Card</button>
        </div>
    );
};

export default Bottle;