import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props)
    const { name, img, price } = props;
    const handleAddToCart = () => {
        console.log('clicked');
    }
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h3 className='product-name'>Name:{name}</h3>
                <h4>Price:${price}</h4>
            </div>
            <button onClick={handleAddToCart} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;