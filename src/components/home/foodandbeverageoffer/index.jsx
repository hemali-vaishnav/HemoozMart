import React from 'react'
import Slider from "react-slick";

import './foodandbeverageoffer.scss';

import foodandbeverageimage1 from '../../../assets/images/food-offer (1).webp';
import foodandbeverageimage2 from '../../../assets/images/food-offer (2).webp';
import foodandbeverageimage3 from '../../../assets/images/food-offer (3).webp';
import foodandbeverageimage4 from '../../../assets/images/food-offer (4).webp';

const foodandBeverageImage = [ 
    {
        image: foodandbeverageimage1
    },
    {
        image: foodandbeverageimage2
    },
    {
        image: foodandbeverageimage3
    },
    {
        image: foodandbeverageimage4
    },
]

export default function Foodandbeverageoffer() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };
    return (
        <>
            <div className="foodandbeverage-section container">
                <div className="foodandbeverage-heading">
                    <h2>Food & Beverages</h2>
                </div>

                <div className="foodandbeverage-slider">
                    <Slider {...settings}>
                        {
                            foodandBeverageImage.map((image) => (
                                <div className='foodandbeverage-image'>
                                    <img src={image.image} alt='image' />
                                </div>
                            ))
                        }
                    </Slider>
                </div>

            </div>
        </>
    )
}
