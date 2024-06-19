import React from 'react'

import './featuresection.scss'
import { CiDeliveryTruck } from "react-icons/ci";
import featureicon1 from '../../../assets/icons/distribution.png'
import featureicon2 from '../../../assets/icons/Support-1-15.svg'
import featureicon3 from '../../../assets/icons/Quick-payment-svg-10.svg'

export default function Featuresection() {
    return (
        <>
            <div className="feature-section container">
                <div className="feature">
                    <div className="feature-icon">
                        <CiDeliveryTruck className='delivery' />
                    </div>
                    <div className="feature-content">
                        <h4>Free Delivery</h4>
                        <p>For all orders over ₹1000</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-icon">
                        <img src={featureicon1} alt="icon" />
                    </div>
                    <div className="feature-content">
                        <h4>Easy Returns</h4>
                        <p>Return within 24 hours</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-icon changeicon-width">
                        <img src={featureicon2} alt="icon" />
                    </div>
                    <div className="feature-content">
                        <h4>24/7 Support</h4>
                        <p>Get support all day</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-icon change-icon-width">
                        <img src={featureicon3} alt="icon"  />
                    </div>
                    <div className="feature-content">
                        <h4>Quick Payment</h4>
                        <p>100% secure payment</p>
                    </div>
                </div>

            </div>
        </>
    )
}
