import React from 'react'
import Slider from "react-slick";

import './electronicsoffer.scss';

import electronicofferimage1 from '../../../assets/images/tech-offer (1).webp'
import electronicofferimage2 from '../../../assets/images/tech-offer (2).webp'
import electronicofferimage3 from '../../../assets/images/tech-offer (3).webp'
import electronicofferimage4 from '../../../assets/images/tech-offer (4).webp'

const electronicofferimage = [
  {
    image: electronicofferimage1
  },
  {
    image: electronicofferimage2
  },
  {
    image: electronicofferimage3
  },
  {
    image: electronicofferimage4
  },
]

export default function Electronicsoffer() {

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
      <div className="electronics-section ">
        <div className="container">
          <div className="electronics-heading">
            <h2>Electronics & Appliances</h2>
          </div>

          <div className="electronicsoffer-slider">
            <Slider {...settings}>
              {
                electronicofferimage.map((image) => (
                  <div className='electronicsoffer-image'>
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
