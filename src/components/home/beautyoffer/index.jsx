import React from 'react'
import Slider from "react-slick";

import './beautyoffer.scss';

import beautyofferimage1 from '../../../assets/images/Soaps.webp';
import beautyofferimage2 from '../../../assets/images/Summer_Lotions.webp';
import beautyofferimage3 from '../../../assets/images/Skin_Care.webp';
import beautyofferimage4 from '../../../assets/images/Sunscreen.webp';
import beautyofferimage5 from '../../../assets/images/Make-up.png';

const beautyofferimage = [
    {
        image: beautyofferimage1
    },
    {
        image: beautyofferimage2
    },
    {
        image: beautyofferimage3
    },
    {
        image: beautyofferimage4
    },
    {
        image: beautyofferimage5
    },
]
export default function Beautyoffer() {
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
            <div className="beautyoffer-section ">
                <div className="container">
                    <div className="beautyoffer-heading">
                        <h2>Makeup & Beauty Essentials</h2>
                    </div>
                    <div className="beautyoffer-slider">
                        <Slider {...settings}>
                            {
                                beautyofferimage.map((image) => (
                                    <div className='beautyoffer-image'>
                                        <img src={image.image} alt='image' />
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
