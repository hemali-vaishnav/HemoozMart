import React from 'react'
import Slider from "react-slick";

import { useState } from 'react'

import './fashionoffer.scss';

import womenfashionimage from '../../../assets/images/fashion-offer (1).webp'
import menfashionimage from '../../../assets/images/fashion-offer (2).jpg'
import watchimage from '../../../assets/images/fashion-offer (3).webp'
import kidsfashionimage from '../../../assets/images/fashion-offer (4).webp'

const fashionOfferImage = [
    womenfashionimage,
    menfashionimage,
    watchimage,
    kidsfashionimage
]

export default function Fashionoffer() {
    const [direction, setDirection] = useState('left');

    const handleBeforeChange = (oldIndex, newIndex) => {
        if (oldIndex === fashionOfferImage.length - 1 && newIndex === 0) {
            setDirection('right');
        } else if (oldIndex === 0 && newIndex === fashionOfferImage.length - 1) {
            setDirection('left');
        }
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: direction === 'right',

    };

    return (
        <>
            <div className="fashion-section container">
                <div className="fashion-heading">
                    <h2>Explore Top Fashion </h2>
                </div>

                <div className="fashion-slider">
                    <Slider {...settings} beforeChange={handleBeforeChange}>
                        {
                            fashionOfferImage.map((image, index) => (
                                <div key={index} className='fashion-image'>
                                    <img src={image} alt={`slide-${index}`} />
                                </div>
                            ))
                        }

                    </Slider>
                </div>

            </div>
        </>
    );
};
