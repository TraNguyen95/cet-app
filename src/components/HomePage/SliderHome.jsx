import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../scss/components/sliderHome.scss'
import { SliderComponent } from './SliderComponent'
import ButtonGoDown from '../Button'

export function SliderHome() {
  const settings = {
    customPaging: function (i) {
      return <span className='w-full'>0{i + 1}</span>
    },
    dots: true,
    prevArrow: <></>,
    nextArrow: <></>,
    dotsClass: 'slick-slide-home',
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <>
      <div className='slider-home relative'>
        <Slider {...settings}>
          <SliderComponent />
          <SliderComponent />
          <SliderComponent />
          <SliderComponent />
          <SliderComponent />
        </Slider>
        <div className='ButtonGoDown'>
          <ButtonGoDown />
        </div>
      </div>
    </>
  )
}
