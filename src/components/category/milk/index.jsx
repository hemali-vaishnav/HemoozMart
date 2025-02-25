// import React from 'react'

// import './milk.scss'


// import categoryimage1 from '../../../assets/images/milkimage/image-6-1.jpg'
// import categoryimage2 from '../../../assets/images/milkimage/image-5-1.jpg'
// import categoryimage3 from '../../../assets/images/milkimage/image-7.jpg'
// import { BsCart3 } from "react-icons/bs";
// // import { addToCart } from '../../../routes'
// import cardimage1 from '../../../assets/images/milkimage/amul-gold-homogenised-standardised-milk-1-l-tetra-pak-product-images-o490001545-p490001545-0-202203170625.webp'
// import cardimage2 from '../../../assets/images/milkimage/amul-moti-homogenised-toned-milk-450-ml-esl-pouch-product-images-o490983639-p490983639-0-202203150929.webp'
// import cardimage3 from '../../../assets/images/milkimage/amul-t-special-premium-dairy-whitener-milk-powder-1-kg-product-images-o491585006-p605610233-0-202310140704.webp'
// import cardimage4 from '../../../assets/images/milkimage/amul-taaza-homogenised-toned-milk-1-l-tetra-pak-product-images-o490010311-p490010311-0-202203152257.webp'
// import cardimage5 from '../../../assets/images/milkimage/amulya-dairy-whitener-1-kg-pouch-product-images-o490001530-p490001530-0-202203152214.webp'
// import cardimage6 from '../../../assets/images/milkimage/mother-dairy-livelite-double-toned-low-fat-milk-450-ml-esl-pouch-product-images-o491184307-p491184307-0-202203150435.webp'
// import cardimage7 from '../../../assets/images/milkimage/nestle-a-nourish-toned-milk-1-l-tetra-pak-product-images-o490001546-p490001546-0-202203170727.webp'
// import cardimage8 from '../../../assets/images/milkimage/nestle-a-slim-skimmed-milk-1-l-tetra-pak-product-images-o490001547-p490001547-0-202203150116.webp'
// import cardimage9 from '../../../assets/images/milkimage/sonai-homogenized-toned-milk-1-l-tetra-pack-product-images-o492928867-p593338807-0-202208012029.webp'
// import cardimage10 from '../../../assets/images/milkimage/urban-platter-oatwow-classic-oat-beverage-1-litre-product-images-orvn5dzqmyw-p594217089-0-202210020209.webp'
// import cardimage11 from '../../../assets/images/milkimage/urban-platter-unsweetened-almond-milk-1-litre-product-images-orv28wvk3r8-p594174226-0-202209301310.webp'
// import cardimage12 from '../../../assets/images/milkimage/urban-platter-unsweetened-coconut-milk-250ml-pack-of-2-product-images-orvxasrwjzb-p594218680-0-202303112049.webp'

// export const milkItems = [
//   {
//     id: 101,
//     name: 'Amul Gold Homogenised Standardised Milk 1 L Tetra Pak',
//     image: cardimage1,
//     price: "$2.49",
//     quantity: 1
//   },
//   {
//     id: 102,
//     name: 'Amul Moti Homogenised Toned Milk 450 ml ESL Pouch',
//     image: cardimage2,
//     price: '$1.49',
//     quantity: 1
//   },
//   {
//     id: 103,
//     name: 'Amul T-Special Premium Dairy Whitener Milk Powder 1 kg',
//     image: cardimage3,
//     price: '$5.99',
//     quantity: 1
//   },
//   {
//     id: 104,
//     name: 'Amul Taaza Homogenised Toned Milk 1 L Tetra Pak',
//     image: cardimage4,
//     price: '$1.99',
//     quantity: 1
//   },
//   {
//     id: 105,
//     name: 'Amulya Dairy Whitener 1 kg Pouch',
//     image: cardimage5,
//     price: '$6.99',
//     quantity: 1
//   },
//   {
//     id: 106,
//     name: 'Mother Dairy Livelite Double Toned Low Fat Milk 450 ml ESL Pouch',
//     image: cardimage6,
//     price: '$1.29',
//     quantity: 1
//   },
//   {
//     id: 107,
//     name: 'Nestle A+ Nourish Toned Milk 1 L Tetra Pak',
//     image: cardimage7,
//     price: '$2.39',
//     quantity: 1
//   },
//   {
//     id: 108,
//     name: 'Nestle A+ Slim Skimmed Milk 1 L Tetra Pak',
//     image: cardimage8,
//     price: '$2.99',
//     quantity: 1
//   },
//   {
//     id: 109,
//     name: 'Sonai Homogenized Toned Milk 1 L Tetra Pack',
//     image: cardimage9,
//     price: '$1.99',
//     quantity: 1
//   },
//   {
//     id: 110,
//     name: 'Urban Platter Oatwow Classic Oat Beverage 1 Litre',
//     image: cardimage10,
//     price: '$3.49',
//     quantity: 1
//   },
//   {
//     id: 111,
//     name: 'Urban Platter Unsweetened Almond Milk 1 Litre',
//     image: cardimage11,
//     price: '$2.99',
//     quantity: 1
//   },
//   {
//     id: 112,
//     name: 'Urban Platter Unsweetened Coconut Milk 250ml (Pack of 2)',
//     image: cardimage12,
//     price: '$1.79',
//     quantity: 1
//   }
// ];

// export default function Milk() {
//   return (
//     <>
//       <div className="milk-category">
//         <div className="milkitem-category">
//           <div className="category-item">
//             <img src={categoryimage2} alt="image" />
//             <h2>Milk</h2>
//           </div>
//           <div className="category-item">
//             <img src={categoryimage1} alt="imaeg" />
//             <h2>Cheese & Butter</h2>
//           </div>
//           <div className="category-item">
//             <img src={categoryimage3} alt="image" />
//             <h2>Yogurt & Cream</h2>
//           </div>
//         </div>
//         <div className="cards">
//           {
//             milkItems.map((card) => (
//               <div className="card" key={card.id}>
//                 <div className="card-image">
//                   <img src={card.image} alt={card.name} />
//                 </div>
//                 <div className="card-content">
//                   <h3>{card.name}</h3>
//                   <div className="felx-item">
//                     <p className='price'>{card.price}</p>
//                     <div onClick={() => addToCart(card.id)} className="cart-icon">
//                       <BsCart3 className='icon' />
//                       <span className='add-to-cart'>ADD TO CART</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </>
//   )
// }
