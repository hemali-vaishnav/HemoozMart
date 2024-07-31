import React from 'react'
import { useSelector } from 'react-redux';

import './favourite.scss';
import { useDispatch } from 'react-redux'

import emptywishlistimage from '../../assets/images/wishlist-empty.svg'
import { addCart } from '../../redux/cart/cart';
import { addFavCart, removeFromFav } from '../../redux/favourite/favourite';
import { FiHeart } from 'react-icons/fi';
export default function Favourite() {
  const dispatch = useDispatch()
  const addToCart = (items) => {
    dispatch(addCart(items))
  }

  const favItems = useSelector(state => state.favourite.favItems);

  const favcarts = (items) => {

    const isProductsInFavs = favItems.some(item => item.id === items.id)
    if (isProductsInFavs) {  
      dispatch(removeFromFav(items))
    }
    else {
      dispatch(addFavCart(items))
    }
  }


  const cartButtons = document.querySelectorAll('.cart-button');

  cartButtons.forEach(button => {
    button.addEventListener('click', cartClick);
  });

  function cartClick() {
    let button = this;
    button.classList.add('clicked');
  }


  return (
    <>
      <div className='fav-component container'>
        <div className="fav-heading">
          <h2> My Favourite products</h2>
        </div>

        <div className='fav-items'>
          {
            favItems.length === 0 ? (
              <div className='empty-wishlist'>
                <img src={emptywishlistimage} alt="image" className='empty-cart-image' />
                <p>wishlist is empty.</p>
              </div>
            ) : (
              favItems.map((item) => (
                <div className="fav-item" key={item.id}>
                  <div className="flex-item">
                    <div className='item-image'>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div onClick={() => favcarts(item)} className="fav-icon">
                      <FiHeart className={`icon ${favItems.some(i => i.id === item.id) ? 'filled' : ''}`} />

                    </div>
                  </div>
                  <div className="item-content">
                    <h4>{item.name}</h4>
                    <p className='price'>{item.price}</p>
                    <button onClick={() => addToCart(item)} className="cart-button">
                      <span className='add-to-cart'>ADD TO CART</span>
                      <span class="added">Added</span>
                      <i class="fas fa-shopping-cart"></i>
                      <i class="fas fa-box"></i>
                    </button>
                  </div>
                </div>

              ))
            )
          }
        </div>
      </div>
    </>
  )
}
