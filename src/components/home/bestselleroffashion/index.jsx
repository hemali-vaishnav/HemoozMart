import React from 'react'
import Slider from "react-slick";

import './bestselleroffashion.scss'

import fashionbestsellerimage1 from '../../../assets/images/fashion-bestseller (1).webp';
import fashionbestsellerimage2 from '../../../assets/images/fashion-bestseller (2).webp';
import fashionbestsellerimage3 from '../../../assets/images/fashion-bestseller (3).webp';
import fashionbestsellerimage4 from '../../../assets/images/fashion-bestseller (4).webp';
import fashionbestsellerimage5 from '../../../assets/images/fashion-bestseller (5).webp';
import fashionbestsellerimage6 from '../../../assets/images/fashion-bestseller (6).webp';
import fashionbestsellerimage7 from '../../../assets/images/fashion-bestseller (7).webp';
import fashionbestsellerimage8 from '../../../assets/images/fashion-bestseller (8).webp';
import fashionbestsellerimage9 from '../../../assets/images/fashion-bestseller (9).webp';
import fashionbestsellerimage10 from '../../../assets/images/fashion-bestseller (10).webp';
import fashionbestsellerimage11 from '../../../assets/images/fashion-bestseller (11).webp';
import fashionbestsellerimage12 from '../../../assets/images/fashion-bestseller (12).webp';
import fashionbestsellerimage13 from '../../../assets/images/fashion-bestseller (13).webp';
import fashionbestsellerimage14 from '../../../assets/images/fashion-bestseller (14).webp';
import fashionbestsellerimage15 from '../../../assets/images/fashion-bestseller (15).webp';

import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeFromCart } from '../../../redux/cart/cart'
import { addFavCart, removeFromFav } from '../../../redux/favourite/favourite'
import { FiHeart } from "react-icons/fi";

const fashionBestsellers = [
  {
    id: 1,
    name: "Acnos Digital Silver Vintage Square Dial Unisex Watch",
    image: fashionbestsellerimage1,
    price: "₹2,499",
    description: "Stylish digital silver vintage watch suitable for both men and women."
  },
  {
    id: 2,
    name: "Billyball Boys' Kids Stylish Ultra-Soft Cotton Printed T-Shirts & Shorts Set",
    image: fashionbestsellerimage2,
    price: "₹1,499",
    description: "Comfortable and stylish printed t-shirt and shorts set for kids."
  },
  {
    id: 3,
    name: "Bruton Sports Shoes for Men - Black",
    image: fashionbestsellerimage3,
    price: "₹3,999",
    description: "Durable and comfortable sports shoes perfect for daily wear."
  },
  {
    id: 4,
    name: "Cotton Shirt with Patch Pocket - Yellow",
    image: fashionbestsellerimage4,
    price: "₹1,999",
    description: "Casual yellow cotton shirt with a convenient patch pocket."
  },
  {
    id: 5,
    name: "Davidson Black Sunglasses for Men and Women",
    image: fashionbestsellerimage5,
    price: "₹1,299",
    description: "Trendy black sunglasses providing UV protection for both men and women."
  },
  {
    id: 6,
    name: "Fabbmate Fashionable Purple Casual Shoe for Women",
    image: fashionbestsellerimage6,
    price: "₹3,299",
    description: "Stylish and comfortable purple casual shoes for women."
  },
  {
    id: 7,
    name: "Fabflee Plain Rib Tunics Top for Women",
    image: fashionbestsellerimage7,
    price: "₹2,499",
    description: "Elegant plain rib tunics top perfect for casual and semi-formal wear."
  },
  {
    id: 8,
    name: "Lzard Men's Grey Slim Clean Look Stretch Jeans",
    image: fashionbestsellerimage8,
    price: "₹2,799",
    description: "Comfortable and stylish grey slim stretch jeans for men."
  },
  {
    id: 9,
    name: "Piraso Digital Black Dial Black Strap Watch for Men and Women",
    image: fashionbestsellerimage9,
    price: "₹1,899",
    description: "Versatile black digital watch with a sleek design suitable for both men and women."
  },
  {
    id: 10,
    name: "Piraso UV Protection Butterfly Full Frame Black Sunglasses - Women",
    image: fashionbestsellerimage10,
    price: "₹1,499",
    description: "Elegant butterfly full-frame black sunglasses offering UV protection for women."
  },
  {
    id: 11,
    name: "Printed Straight Kurta - Navy",
    image: fashionbestsellerimage11,
    price: "₹1,699",
    description: "Beautiful printed straight kurta in navy blue, perfect for traditional wear."
  },
  {
    id: 12,
    name: "Printed Straight Kurta - Mustard",
    image: fashionbestsellerimage12,
    price: "₹1,699",
    description: "Elegant printed straight kurta in mustard, ideal for casual and traditional occasions."
  },
  {
    id: 13,
    name: "Rust Yellow Blue Dress",
    image: fashionbestsellerimage13,
    price: "₹2,299",
    description: "Stylish rust yellow and blue dress, perfect for casual outings."
  },
  {
    id: 14,
    name: "Smartees Men Dark Blue Round Neck T-Shirt",
    image: fashionbestsellerimage14,
    price: "₹999",
    description: "Comfortable dark blue round neck t-shirt for men, ideal for everyday wear."
  },
  {
    id: 15,
    name: "Tie Dye A-Line Dress with T-Shirt - Pink",
    image: fashionbestsellerimage15,
    price: "₹1,499",
    description: "Trendy tie-dye A-line dress with a matching t-shirt in pink, perfect for a chic look."
  }
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="nextArrow"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="prevArrow"
      onClick={onClick}
    />
  );
}
export default function Bestselleroffashion() {
  const dispatch = useDispatch()

  const favItems = useSelector(state => state.favourite.favItems)

  const favcarts = (items) => {

    const isProductsInFavs = favItems.some(item => item.id === items.id)
    if (isProductsInFavs) {
      dispatch(removeFromFav(items))
    }
    else {
      dispatch(addFavCart(items))
    }
  }

  const addToCart = (items) => {
    const isProductsInCart = favItems.some(item => item.id === items.id)
    if (isProductsInCart) {
      dispatch(removeFromCart(items))
    }
    else {
      dispatch(addCart(items))
    }
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

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
      <div className="bestseller-of-fashion container">
        <div className='bestseller-heading'>
          <h2>Bestsellers of Fashion</h2>
        </div>
        <div className="fashion-bestseller-cards">
          <div className="cards-slider">
            <Slider {...settings}>
              {
                fashionBestsellers.map((card) => (
                  <div className="card" key={card.id}>
                    <div className="flex-item">
                      <div className='card-image'>
                        <img src={card.image} alt={card.name} />
                      </div>
                      <div onClick={() => favcarts(card)} className='fav-icon'>
                        <FiHeart className={`icon ${favItems.some(item => item.id === card.id) ? 'filled' : ''}`} />

                      </div>
                    </div>
                    <div className="card-content">
                      <h4>{card.name}</h4>
                      <p className='price'>{card.price}</p>
                      <button onClick={() => addToCart(card)} className="cart-button">
                        <span className='add-to-cart'>ADD TO CART</span>
                        <span class="added">Added</span>
                        <i class="fas fa-shopping-cart"></i>
                        <i class="fas fa-box"></i>
                      </button>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

