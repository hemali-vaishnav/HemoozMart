import React, { useState } from 'react'
import Topcategory from './topcategory'
import Allfashion from './allfashion'

import categoryimage1 from '../../assets/images/fashion-category (1).png';
import categoryimage2 from '../../assets/images/fashion-category (2).png';
import categoryimage3 from '../../assets/images/fashion-category (3).png';
import categoryimage4 from '../../assets/images/fashion-category (4).png';
import categoryimage5 from '../../assets/images/fashion-category (5).png';
import { categories } from '../../categoriesapi';


export default function Fashionpage() {
    const [selectedCategory, setSelectedCategory] = useState([])
    
    const categoryMenu = [
        {
            name: "Women's Fashion",
            image: categoryimage1,
            data: categories.fashioncategory.women

        },
        {
            name: "Men's Fashion",
            image: categoryimage2,
            data: categories.fashioncategory.men
        },
        {
            name: "Sunglasses",
            image: categoryimage3,
            data: []
        },
        {
            name: "Kids Fashion",
            image: categoryimage4,
            data: []
        },
        {
            name: "Watches",
            image: categoryimage5,
            data: []
        },
    ]
    return (
        <>
            <Topcategory categories={categoryMenu} setSelectedCategory={setSelectedCategory} />
            <Allfashion renderData={selectedCategory.data} />

        </>
    )
}
