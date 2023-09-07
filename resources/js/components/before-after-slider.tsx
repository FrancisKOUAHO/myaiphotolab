import React from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'

const BeforeAfterSlider = ({ imageUrl, oldImage }) => {
  return (
    <div className="w-full h-full">
      <ReactBeforeSliderComponent
        firstImage={oldImage}
        secondImage={imageUrl}
        className="object-cover overflow-hidden"
      />
    </div>
  )
}

export default BeforeAfterSlider
