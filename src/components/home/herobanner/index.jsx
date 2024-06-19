import Slider from "react-slick";
import React from "react";

import './herobanner.scss'

import { MdOutlineArrowBackIos } from "react-icons/md";

import sliderimage2 from '../../../assets/images/slider1.png'
import sliderimage1 from '../../../assets/images/slider2.png'
import sliderimage3 from '../../../assets/images/slider3.png'
import sliderimage4 from '../../../assets/images/slider4.png'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='prevArrow'
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='nextArrow'
            onClick={onClick}
        />
    );
}

export default function Herobanner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div className="herobanner">
                <Slider {...settings}>

                    <div className="banner-slider">
                        <div className="slider-image">
                            <img src={sliderimage1} alt="image" />
                        </div>

                        <div className="slider-content">
                            <div className="slider-content-left">
                                <h2 className="banner-sub-heading">Natural Health Care Ingredients</h2>
                                <h1 className="banner-heading">Grocery Shopping</h1>
                                <span>Save upto 30% off</span>
                                <button>Shop Now</button>
                            </div>
                        </div>

                    </div>
                    <div className="banner-slider">
                        <div className="slider-image">
                            <img src={sliderimage2} alt="image" />
                        </div>
                        <div className="slider-content">
                            <div className="slider-content-middle">
                                <h2 className="banner-sub-heading">Effortless Glamour for Every Occasion</h2>
                                <h1 className="banner-heading">fashion</h1>
                                <span>Save upto 40% off</span>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="banner-slider">
                        <div className="slider-image">
                            <img src={sliderimage3} alt="image" />
                        </div>
                        <div className="slider-content">
                            <div className="slider-content-middle">
                                <h2 className="banner-sub-heading">A Comprehensive Guide to Glowing Skin</h2>
                                <h1 className="bannerheading">Beauty Redefined</h1>
                                <span>Save upto 20% off</span>
                                <button className="change-color">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="banner-slider">
                        <div className="slider-image">
                            <img src={sliderimage4} alt="image" />
                        </div>
                        <div className="slider-content">
                            <div className="slider-content-rigth">
                                <h2 className="banner-sub-heading">Make your life easy with smart devices</h2>
                                <h1 className="banner-heading">Electronic appliances</h1>
                                <span>Save upto 35% off</span>
                                <button className="change-color">Shop Now</button>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>


        </>
    )
}