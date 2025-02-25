import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './cart.scss';

import emptycartimage from '../../assets/images/empty-cart.svg'
import { MdDelete } from "react-icons/md";
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/cart/cart';

export default function Cart() {
  const cart = useSelector(state => state.cart.items);

  const dispatch = useDispatch()
  const handleOnDelete = (item) => {
    dispatch(removeFromCart(item))
  }

  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };


  return (
    <>

      <div className='cart-component container'>
        <div className="cart-heading">
          <h2> My Cart</h2>
        </div>
        {
          cart.length === 0 ? (
            <div className='empty-cart'>
              <img src={emptycartimage} alt="image" className='empty-cart-image' />
              <p>Cart is empty.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div className='cart-item' key={item.id}>
                <div className="cart-flex">
                  <div className='cart-item-image'>
                    <img src={item.image} alt="image" />
                  </div>
                  <div className='cart-item-content'>
                    <h3 className='item-name'>{item.name}</h3>
                    <p className='description'>{item.description}</p>
                    <p className='price'>{item.price}</p>
                    <div className='update-quantity'>
                      <button className='decrease-item' onClick={() => handleDecreaseQuantity(item)}>-</button>
                      <p>{item.quantity}</p>
                      <button className='increase-item' onClick={() => handleIncreaseQuantity(item)}>+</button>
                    </div>
                  </div>
                </div>
                <div className="delete-item">
                  <MdDelete onClick={() => handleOnDelete(item)} />
                </div>
              </div>
            ))
          )
        }
      </div>
    </>
  )
}
