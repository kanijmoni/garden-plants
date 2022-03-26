import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props)

    const { name, img, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h3 className='product-name'>Name:{name}</h3>
                <h4>Price:${price}</h4>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <h5 className='btn-text'>Add To Cart</h5>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;