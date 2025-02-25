import React from 'react'

import './topcategory.scss';

import categoryimage1 from '../../../assets/images/fashion-category (1).png';
import categoryimage2 from '../../../assets/images/fashion-category (2).png';
import categoryimage3 from '../../../assets/images/fashion-category (3).png';
import categoryimage4 from '../../../assets/images/fashion-category (4).png';
import categoryimage5 from '../../../assets/images/fashion-category (5).png';

export default function Topcategory() {
    return (
        <>
            <div className="topcategory-section">
                <div className="topcategory">
                    <div className="topcategory-image">
                        <img src={categoryimage1} alt="image" />
                    </div>
                    <h4>Women's Fashion</h4>
                </div>
                <div className="topcategory">    
                    <div className="topcategory-image">
                        <img src={categoryimage2} alt="image" />
                    </div>
                    <h4>Men's Fashion</h4>
                </div>
                <div className="topcategory">
                    <div className="topcategory-image">
                        <img src={categoryimage3} alt="image" />
                    </div>
                    <h4>Kids Fashion</h4>
                </div>
                <div className="topcategory">
                    <div className="topcategory-image">
                        <img src={categoryimage4} alt="image" />
                    </div>
                    <h4>Watches</h4>
                </div>
                <div className="topcategory">
                    <div className="topcategory-image">
                        <img src={categoryimage5} alt="image" />
                    </div>
                    <h4>Sunglasses</h4>
                </div>
            </div>
        </>
    )
}
