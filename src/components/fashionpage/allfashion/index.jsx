import React from 'react'
import { categories } from '../../../categoriesapi'

import './allfashion.scss'
export default function Allfashion({ renderData }) {

  const categorys = renderData ? renderData : [...categories.fashioncategory.women, ...categories.fashioncategory.men];

  return (
    <>
      <div className="flex">
        {
          categorys?.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="image" />
              <h5>{item.name}</h5>
            </div>
          ))
        }
      </div>
    </>
  )
}
