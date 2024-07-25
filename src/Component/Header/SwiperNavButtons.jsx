import React from 'react'
import { useSwiper } from 'swiper/react'

export default function SwiperNavButtons() {
    const swiper=useSwiper();
    // console.log(swiper)
  return (
      <div className="flex justify-end mt-6">
          <div onClick={() => swiper.slidePrev()} className="swiper-button-prev bg-white rounded-lg"></div>
          <div onClick={() => swiper.slideNext()} className="swiper-button-next bg-white rounded-lg">
              Next
          </div>
      </div>
  )
}
