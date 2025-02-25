import React from 'react'
import Slider from "react-slick";

import './bestselleroftech.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../../redux/cart/cart'
import { addFavCart, removeFromFav } from '../../../redux/favourite/favourite'
import { FiHeart } from "react-icons/fi";

import techbestsellerimage1 from '../../../assets/images/tech-bestseller (1).webp';
import techbestsellerimage2 from '../../../assets/images/tech-bestseller (2).webp';
import techbestsellerimage3 from '../../../assets/images/tech-bestseller (3).webp';
import techbestsellerimage4 from '../../../assets/images/tech-bestseller (4).webp';
import techbestsellerimage5 from '../../../assets/images/tech-bestseller (5).webp';
import techbestsellerimage6 from '../../../assets/images/tech-bestseller (6).webp';
import techbestsellerimage7 from '../../../assets/images/tech-bestseller (7).webp';
import techbestsellerimage8 from '../../../assets/images/tech-bestseller (8).webp';
import techbestsellerimage9 from '../../../assets/images/tech-bestseller (9).webp';
import techbestsellerimage10 from '../../../assets/images/tech-bestseller (10).webp';
import techbestsellerimage11 from '../../../assets/images/tech-bestseller (11).webp';
import techbestsellerimage12 from '../../../assets/images/tech-bestseller (12).webp';
import techbestsellerimage13 from '../../../assets/images/tech-bestseller (13).webp';
import techbestsellerimage14 from '../../../assets/images/tech-bestseller (14).webp';
import techbestsellerimage15 from '../../../assets/images/tech-bestseller (15).webp';
import techbestsellerimage16 from '../../../assets/images/tech-bestseller (16).jpg';

const electronicsAppliances = [
    {
        id: 201,
        name: "Apple AirPods Pro (2nd Gen) USB-C with MagSafe Charging Case",
        image: techbestsellerimage1,
        description: "True wireless earbuds with active noise cancellation, touch control, and up to 30 hours of playtime.",
        price: "₹24,900",
        quantity: 1
    },
    {
        id: 202,
        name: "Apple iPhone 15 (128GB) - Black",
        image: techbestsellerimage2,
        description: "Apple iPhone 15 with 128GB storage, featuring advanced camera and performance capabilities.",
        price: "₹79,900",
        quantity: 1
    },
    {
        id: 203,
        name: "Apple MacBook Air (M1 Chip, 8GB, 256GB SSD)",
        image: techbestsellerimage3,
        description: "Lightweight laptop with Apple M1 chip, 8GB RAM, and 256GB SSD, running macOS Big Sur.",
        price: "₹92,900",
        quantity: 1
    },
    {
        id: 204,
        name: "Beardo Styling Gun Ultra Compact Hair Dryer",
        image: techbestsellerimage4,
        description: "Ultra-compact hair dryer from Beardo, ideal for quick and efficient styling.",
        price: "₹2,499",
        quantity: 1
    },
    {
        id: 205,
        name: "Canon Mirrorless R100 Point & Shoot Camera",
        image: techbestsellerimage5,
        description: "24.1 megapixels mirrorless camera from Canon, perfect for capturing high-quality photos and videos.",
        price: "₹39,999",
        quantity: 1
    },
    {
        id: 206,
        name: "Canon Multi-Function Inkjet Printer (PIXMA G G2020)",
        image: techbestsellerimage6,
        description: "All-in-one inkjet printer with ink tank system, suitable for high-volume printing needs.",
        price: "₹12,499",
        quantity: 1
    },
    {
        id: 207,
        name: "Havells Kalt GHRACAD008 Personal Air Cooler (24 Litre)",
        image: techbestsellerimage7,
        description: "Personal air cooler with 24-litre capacity from Havells, providing effective cooling for small spaces.",
        price: "₹6,999",
        quantity: 1
    },
    {
        id: 208,
        name: "HM Hot Plate Radiant Cooktop",
        image: techbestsellerimage8,
        description: "Manual electric induction cooktop with powder-coated finish and a 1-year warranty.",
        price: "₹1,999",
        quantity: 1
    },
    {
        id: 209,
        name: "LG 28 Litres Convection Microwave Oven (MC2846BR)",
        image: techbestsellerimage9,
        description: "28 litres convection microwave oven from LG, ideal for cooking, baking, and reheating.",
        price: "₹14,999",
        quantity: 1
    },
    {
        id: 210,
        name: "Lloyd 1.5 Ton 3 Star 5-in-1 Convertible Inverter Split AC",
        image: techbestsellerimage10,
        description: "1.5 ton 3 star inverter split AC from Lloyd, with 5-in-1 convertible modes and PM 2.5 filter.",
        price: "₹34,999",
        quantity: 1
    },
    {
        id: 211,
        name: "IZI Go X 3-Axis Smartphone Handheld Gimbal Stabilizer",
        image: techbestsellerimage11,
        description: "Handheld gimbal stabilizer with 3-axis stabilization, OLED display, and wireless charging pad.",
        price: "₹8,999",
        quantity: 1
    },
    {
        id: 212,
        name: "OnePlus Nord 3 5G (128 GB, 8 GB RAM) - Misty Green",
        image: techbestsellerimage12,
        description: "5G smartphone from OnePlus with 128GB storage and 8GB RAM, in Misty Green color.",
        price: "₹33,999",
        quantity: 1
    },
    {
        id: 213,
        name: "Prolife Nutri Max Personal Blender for Shakes & Smoothies",
        image: techbestsellerimage13,
        description: "500W personal blender from Prolife, ideal for making shakes and smoothies, with 2 jars included.",
        price: "₹2,499",
        quantity: 1
    },
    {
        id: 214,
        name: "Samsung HW-T42E/XL 2.1 Channel Bluetooth Soundbar",
        image: techbestsellerimage14,
        description: "2.1 channel Bluetooth soundbar from Samsung, with Dolby Digital for immersive audio experience.",
        price: "₹11,999",
        quantity: 1
    },
    {
        id: 215,
        name: "Tecno Pop 8 (64 GB, 4 GB RAM) - Black",
        image: techbestsellerimage15,
        description: "64GB storage, 4GB RAM smartphone from Tecno, offering a balance of performance and affordability.",
        price: "₹8,999",
        quantity: 1
    },
    {
        id: 216,
        name: "Whirlpool 285 Litre 2 Star Convertible Frost-Free Double Door Refrigerator",
        image: techbestsellerimage16,
        description: "285 litre double door refrigerator from Whirlpool, featuring convertible modes and frost-free technology.",
        price: "₹29,999",
        quantity: 1
    },
]

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

export default function Bestselleroftech() {
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
            <div className="bestseller-of-tech container">
                <div className='bestseller-heading'>
                    <h2>Bestsellers of Tech</h2>
                </div>
                <div className="tech-bestseller-cards">
                    <div className="cards-slider">
                        <Slider {...settings}>
                            {
                                electronicsAppliances.map((card) => (
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
