import React from 'react'

import './bestselleroffood.scss'
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../../redux/cart/cart'
import { addFavCart, removeFromFav } from '../../../redux/favourite/favourite'
import { FiHeart } from "react-icons/fi";

import foodbestsellerimage1 from '../../../assets/images/food-bestseller (1).webp';
import foodbestsellerimage2 from '../../../assets/images/food-bestseller (2).webp';
import foodbestsellerimage3 from '../../../assets/images/food-bestseller (3).webp';
import foodbestsellerimage4 from '../../../assets/images/food-bestseller (4).webp';
import foodbestsellerimage5 from '../../../assets/images/food-bestseller (5).webp';
import foodbestsellerimage6 from '../../../assets/images/food-bestseller (6).webp';
import foodbestsellerimage7 from '../../../assets/images/food-bestseller (7).webp';
import foodbestsellerimage8 from '../../../assets/images/food-bestseller (8).webp';
import foodbestsellerimage9 from '../../../assets/images/food-bestseller (9).webp';
import foodbestsellerimage10 from '../../../assets/images/food-bestseller (10).webp';
import foodbestsellerimage11 from '../../../assets/images/food-bestseller (11).webp';
import foodbestsellerimage12 from '../../../assets/images/food-bestseller (12).webp';
import foodbestsellerimage13 from '../../../assets/images/food-bestseller (13).webp';
import foodbestsellerimage14 from '../../../assets/images/food-bestseller (14).webp';
import foodbestsellerimage15 from '../../../assets/images/food-bestseller (15).webp';
import foodbestsellerimage16 from '../../../assets/images/food-bestseller (16).webp';
import foodbestsellerimage17 from '../../../assets/images/food-bestseller (17).webp';

const foodAndBeverage = [
    {
        id: 101,
        quantity: 1,
        name: "B Natural Mixed Fruit Juice - 1 L",
        image: foodbestsellerimage1,
        description: "A refreshing mixed fruit juice made from natural ingredients, providing a healthy and delicious drink option.",
        price: "₹120"
    },
    {
        id: 102,
        quantity: 1,
        name: "Britannia Nutri Choice Hi-Fibre Digestive Biscuits - 1 kg",
        image: foodbestsellerimage2,
        description: "High-fiber digestive biscuits from Britannia, perfect for a healthy snack or breakfast option.",
        price: "₹250"
    },
    {
        id: 103,
        quantity: 1,
        name: "Hershey's Chocolate Syrup - 200 g",
        image: foodbestsellerimage3,
        description: "Rich and delicious chocolate syrup from Hershey's, perfect for adding to desserts, milkshakes, and more.",
        price: "₹149"
    },
    {
        id: 104,
        quantity: 1,
        name: "Maaza Mango Drink - 1.2 L",
        image: foodbestsellerimage4,
        description: "A tasty mango-flavored drink that offers the tropical sweetness of ripe mangoes in a convenient bottle.",
        price: "₹65"
    },
    {
        id: 105,
        quantity: 1,
        name: "Maggi 2-Minute Masala Instant Noodles - 560 g",
        image: foodbestsellerimage5,
        description: "Quick and easy masala-flavored instant noodles from Maggi, ready in just 2 minutes.",
        price: "₹95"
    },
    {
        id: 106,
        quantity: 1,
        name: "MyFitness Peanut Butter Chocolate Crispy - 227g",
        image: foodbestsellerimage6,
        description: "Delicious and crispy peanut butter with chocolate from MyFitness, packed with protein and free from trans fats.",
        price: "₹349"
    },
    {
        id: 107,
        quantity: 1,
        name: "Nutella Ferrero Hazelnut Spread with Cocoa - 350 g",
        image: foodbestsellerimage7,
        description: "World-famous hazelnut spread with cocoa from Nutella, perfect for spreading on bread or adding to recipes.",
        price: "₹399"
    },
    {
        id: 108,
        quantity: 1,
        name: "Parle-G Original Glucose Biscuits - 800 g",
        image: foodbestsellerimage8,
        description: "Classic glucose biscuits from Parle-G, loved by generations for their taste and nutritional value.",
        price: "₹90"
    },
    {
        id: 109,
        quantity: 1,
        name: "Sprite - 750 ml",
        image: foodbestsellerimage9,
        description: "Refreshing lemon-lime soda from Sprite, known for its crisp and clean taste.",
        price: "₹40"
    },
    {
        id: 110,
        quantity: 1,
        name: "Sunfeast Dark Fantasy Original Choco Filled Cookie - 300 g",
        image: foodbestsellerimage10,
        description: "Indulgent chocolate-filled cookies from Sunfeast, offering a rich and delightful treat.",
        price: "₹199"
    },
    {
        id: 111,
        quantity: 1,
        name: "BTW Dodha Special Barfi - 400g (200g x 2)",
        image: foodbestsellerimage11,
        description: "Traditional Dodha Barfi from BTW, made with premium ingredients for a special treat.",
        price: "₹299"
    },
    {
        id: 112,
        quantity: 1,
        name: "BTW Aloo Bhujia Namkeen - 1kg",
        image: foodbestsellerimage12,
        description: "Crispy and spicy Aloo Bhujia from BTW, a popular Indian snack made from potatoes and spices.",
        price: "₹350"
    },
    {
        id: 113,
        quantity: 1,
        name: "BTW Atta Patti Premium Cookies - 400g",
        image: foodbestsellerimage13,
        description: "Delicious premium cookies made from whole wheat flour, offering a healthy and tasty snack.",
        price: "₹299"
    },
    {
        id: 114,
        quantity: 1,
        name: "BTW Bikaneri Bhujia Namkeen - 1kg",
        image: foodbestsellerimage14,
        description: "Authentic Bikaneri Bhujia from BTW, a savory and crunchy snack made from gram flour and spices.",
        price: "₹350"
    },
    {
        id: 115,
        quantity: 1,
        name: "BTW Dry Fruit Premium Cookies - 400g (200g x 2)",
        image: foodbestsellerimage15,
        description: "Rich and flavorful cookies from BTW, loaded with premium dry fruits for a luxurious taste.",
        price: "₹399"
    },
    {
        id: 116,
        quantity: 1,
        name: "Veeba Crunchy Peanut Butter - 340 g",
        image: foodbestsellerimage16,
        description: "Crunchy and tasty peanut butter from Veeba, perfect for spreading on toast or adding to recipes.",
        price: "₹175"
    },
    {
        id: 117,
        quantity: 1,
        name: "Minute Maid Pulpy Orange Fruit Juice - 1 L",
        image: foodbestsellerimage17,
        description: "Refreshing orange juice with real pulp from Minute Maid, offering a natural and tangy flavor.",
        price: "₹99"
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
export default function Bestselleroffood() {
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
        dispatch(addCart(items))
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
    return (
        <>
            <div className="bestseller-of-food ">
                <div className="container">
                    <div className="bestseller-heading">
                        <h2>Bestseller of Food & Beverages</h2>
                    </div>
                    <div className="food-bestseller-card">
                        <div className="card-slider">
                            <Slider {...settings}>
                                {
                                    foodAndBeverage.map((card) => (
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
            </div>
        </>
    )
}
