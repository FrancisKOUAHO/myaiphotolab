import React from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'

const BeforeAfterSlider = ({ imageUrl, oldImage }) => {
  return (
    <ReactBeforeSliderComponent
      firstImage={oldImage}
      secondImage={imageUrl}
      className="object-cover overflow-hidden"
    />
  )
}

export default BeforeAfterSlider
