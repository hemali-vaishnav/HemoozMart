import React from 'react'
import Herobanner from './herobanner'
import Featuresection from './featuresection'
import Trending from './trending'
import Cookingessentialoffer from './cookingessentialoffer'
import Foodandbeverageoffer from './foodandbeverageoffer'
import Fashionoffer from './fashionoffer'
import Electronicsoffer from './electronicsoffer'
import Beautyoffer from './beautyoffer'
import Bestsellerofcookingessential from './bestsellerofcookingessential'
import Bestselleroffood from './bestselleroffood'
import Bestselleroftech from './bestselleroftech'
import Bestselleroffashion from './bestselleroffashion'

export default function Home() {
  return (
    <div>
      <Herobanner />
      <Featuresection />
      <Trending />
      <Cookingessentialoffer />
      <Bestsellerofcookingessential />
      <Foodandbeverageoffer />
      <Bestselleroffood />
      <Fashionoffer />
      <Bestselleroffashion />
      <Electronicsoffer />
      <Bestselleroftech />
      <Beautyoffer />
    </div>
  )
}
