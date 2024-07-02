import React from 'react';

import './trending.scss'

import trendingbrandimage1 from '../../../assets/images/tranding-brand (1).webp';
import trendingbrandimage2 from '../../../assets/images/tranding-brand (2).webp';
import trendingbrandimage3 from '../../../assets/images/tranding-brand (3).webp';
import trendingbrandimage4 from '../../../assets/images/tranding-brand (4).webp';
import trendingbrandimage5 from '../../../assets/images/tranding-brand (5).webp';
import trendingbrandimage6 from '../../../assets/images/tranding-brand (6).webp';

export default function Trending() {
  return (
    <>

      <div className="trending-brands">
        <div className='container'>
          <div className="section-heading">
            <h2>Trending Brands</h2>
          </div>
          <div className="trending-brand-images">
            <div className="brand-image">
              <img src={trendingbrandimage1} alt="image" />
            </div>
            <div className="brand-image">
              <img src={trendingbrandimage6} alt="image" />
            </div>
            <div className="brand-image">
              <img src={trendingbrandimage3} alt="image" />
            </div>
            <div className="brand-image">
              <img src={trendingbrandimage4} alt="image" />
            </div>
            <div className="brand-image">
              <img src={trendingbrandimage2} alt="image" />
            </div>
            <div className="brand-image">
              <img src={trendingbrandimage5} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
