import React from 'react'
import Slider from "react-slick";
import './bestsellerofcookingessential.scss';

import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeFromCart } from '../../../redux/cart/cart'
import { addFavCart, removeFromFav } from '../../../redux/favourite/favourite'
import { FiHeart } from "react-icons/fi";

import cookingbestsellerimage1 from '../../../assets/images/cooking-essential-bestseller (1).webp';
import cookingbestsellerimage2 from '../../../assets/images/cooking-essential-bestseller (2).webp';
import cookingbestsellerimage3 from '../../../assets/images/cooking-essential-bestseller (3).webp';
import cookingbestsellerimage4 from '../../../assets/images/cooking-essential-bestseller (4).webp';
import cookingbestsellerimage5 from '../../../assets/images/cooking-essential-bestseller (5).webp';
import cookingbestsellerimage6 from '../../../assets/images/cooking-essential-bestseller (6).webp';
import cookingbestsellerimage7 from '../../../assets/images/cooking-essential-bestseller (7).webp';
import cookingbestsellerimage8 from '../../../assets/images/cooking-essential-bestseller (8).webp';
import cookingbestsellerimage9 from '../../../assets/images/cooking-essential-bestseller (9).webp';
import cookingbestsellerimage10 from '../../../assets/images/cooking-essential-bestseller (10).webp';
import cookingbestsellerimage11 from '../../../assets/images/cooking-essential-bestseller (11).webp';
import cookingbestsellerimage12 from '../../../assets/images/cooking-essential-bestseller (12).webp';
import cookingbestsellerimage13 from '../../../assets/images/cooking-essential-bestseller (13).webp';
import cookingbestsellerimage14 from '../../../assets/images/cooking-essential-bestseller (14).webp';
import cookingbestsellerimage15 from '../../../assets/images/cooking-essential-bestseller (15).webp';
import cookingbestsellerimage16 from '../../../assets/images/cooking-essential-bestseller (16).webp';




const cookingEssentialCards = [
    {
        id: 1,
        name: "Tata Sampann Unpolished Moong Dal",
        image: cookingbestsellerimage1,
        quantity: 1,
        price: '₹100',
        description: "Rich in protein and essential nutrients, perfect for daily meals."
    },
    {
        id: 2,
        name: "Aashirvaad Double Roasted Suji Rava",
        image: cookingbestsellerimage2,
        quantity: 1,
        price: '₹80',
        description: "High-quality suji rava with less moisture and more quantity."
    },

    {
        id: 3,
        name: "Amul Cow Ghee (1 L)",
        image: cookingbestsellerimage3,
        quantity: 1,
        price: "₹500",
        description: "Pure cow ghee, adds a rich flavor and aroma to your dishes."
    },
    {
        id: 4,
        name: "Bharat Chana Dal (1 kg)",
        image: cookingbestsellerimage4,
        quantity: 1,
        price: '₹60',
        description: "Nutritious chana dal, essential for making dal and other dishes."
    },
    {
        id: 5,
        name: "Elina Long Grain Rice (1 kg)",
        image: cookingbestsellerimage5,
        quantity: 1,
        price: '₹120',
        description: "Long grain rice, perfect for biryanis and pulao."
    },
    {
        id: 6,
        name: "Fortune Chakki Fresh Whole Wheat Atta (10 kg)",
        image: cookingbestsellerimage6,
        quantity: 1,
        price: '₹420',
        description: "Fresh whole wheat atta, ensures soft and delicious chapatis."
    },
    {
        id: 7,
        name: "Fortune Physically Refined Rice Bran Oil (3 L)",
        image: cookingbestsellerimage7,
        quantity: 1,
        price: '₹360',
        description: "Healthy and light rice bran oil, ideal for everyday cooking."
    },
    {
        id: 8,
        name: "Fortune Premium Kachi Ghani Pure Mustard Oil (1 L)",
        image: cookingbestsellerimage8,
        quantity: 1,
        price: '₹160',
        description: "Pure mustard oil, adds a distinct flavor to your dishes."
    },
    {
        id: 9,
        name: "Good Life Besan (500 g)",
        image: cookingbestsellerimage9,
        quantity: 1,
        price: '₹50',
        description: "Fine gram flour, perfect for making pakoras and other snacks."
    },
    {
        id: 10,
        name: "Good Life Jeera (100 g)",
        image: cookingbestsellerimage10,
        quantity: 1,
        price: '₹40',
        description: "Aromatic cumin seeds, essential spice for Indian cooking."
    },
    {
        id: 11,
        name: "Good Life Refined Rice Bran Oil (1 L)",
        image: cookingbestsellerimage11,
        quantity: 1,
        price: '₹150',
        description: "Light and healthy rice bran oil, perfect for daily use."
    },
    {
        id: 12,
        name: "Good Life Soya Wadi Chunks (200 g)",
        image: cookingbestsellerimage12,
        quantity: 1,
        price: '₹60',
        description: "Nutritious soya chunks, great source of protein."
    },
    {
        id: 13,
        name: "Gowardhan Pure Cow Ghee (1 L)",
        image: cookingbestsellerimage13,
        quantity: 1,
        price: '₹550',
        description: "Pure cow ghee, adds richness to your meals."
    },
    {
        id: 14,
        name: "India Gate Mogra Basmati Rice (10 kg)",
        image: cookingbestsellerimage14,
        quantity: 1,
        price: '₹700',
        description: "Premium basmati rice, ideal for special dishes."
    },
    {
        id: 15,
        name: "Lila Dry Fruits 100% Natural Raw Walnut Kernels (500 g)",
        image: cookingbestsellerimage15,
        quantity: 1,
        price: '₹350',
        description: "Raw walnut kernels, high in protein and iron."
    },
    {
        id: 16,
        name: "Madhur Pure Hygienic Sugar (5 kg)",
        image: cookingbestsellerimage16,
        quantity: 1,
        price: '₹300',
        description: "Pure and hygienic sugar, perfect for all your sweet dishes."
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
export default function Bestsellerofcookingessential() {
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
            <div className="bestseller-of-cooking container">
                <div className='bestseller-heading'>
                    <h2>Bestsellers of Cooking Essential</h2>
                </div>
                <div className="cooking-bestseller-cards">
                    <div className="cards-slider">
                        <Slider {...settings}>
                            {
                                cookingEssentialCards.map((card) => (
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
