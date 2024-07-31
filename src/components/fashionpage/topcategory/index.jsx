import React from 'react'

import './topcategory.scss';



export default function Topcategory({ categories, setSelectedCategory }) {

    return (
        <>
            <div className="topcategory-section">
                {
                    categories.map(el => (
                        <div className="topcategory" onClick={() => setSelectedCategory(el)}>
                            <div className="topcategory-image">
                                <img src={el.image} alt="image" />
                            </div>
                            <h4>{el.name}</h4>
                        </div>
                    )) 
                }
                {/* <div className="topcategory">
                    <div className="topcategory-image">
                        <img src={categoryimage2} alt="image" />
                    </div>
                    <h4>Men's Fashion</h4>
                </div>
                <div className="topcategory">
                    <div className="topcategory-image">
                        <img src={categoryimage3} alt="image" />
                    </div>
                    <h4>Sunglasses</h4>
                </div>
                <div className="topcategory">
                    <div className="topcategory-image">
                        <img src={categoryimage4} alt="image" />
                    </div>
                    <h4>Kids Fashion</h4>
                </div>
                <div className="topcategory">
                    <div className="topcategory-image">
                        <img src={categoryimage5} alt="image" />
                    </div>
                    <h4>Watches</h4>
                </div> */}
            </div>
        </>
    )
}
