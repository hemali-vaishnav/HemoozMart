import React from 'react'
import Slider from "react-slick";

import './cookingessentialoffer.scss';



import Cookingessentialsimage1 from '../../../assets/images/cookinf-essential-offer (1).jpg';
import Cookingessentialsimage2 from '../../../assets/images/cookinf-essential-offer (2).jpg';
import Cookingessentialsimage3 from '../../../assets/images/cookinf-essential-offer (3).jpg';
import Cookingessentialsimage4 from '../../../assets/images/cookinf-essential-offer (4).jpg';
import Cookingessentialsimage5 from '../../../assets/images/cookinf-essential-offer (5).jpg';

const cookingEssentialBannerImage = [
    {
        image: Cookingessentialsimage1,
    },
    {
        image: Cookingessentialsimage2,
    },
    {
        image: Cookingessentialsimage3,
    },
    {
        image: Cookingessentialsimage4,
    },
    {
        image: Cookingessentialsimage5,
    }
]

export default function Cookingessentialoffer() {
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
            <div className="cookingessential-section ">
                <div className="container">
                    <div className="cookingessential-heading">
                        <h2>Cooking Essentials</h2>
                    </div>
                    <div className="cookingessential-slider">
                        <Slider {...settings}>
                            {
                                cookingEssentialBannerImage.map((image) => (
                                    <div className='cookingessential-image'>
                                        <img src={image.image} alt='image' />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div >


        </>
    )
}
