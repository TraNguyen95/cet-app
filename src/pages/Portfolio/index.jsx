import Slider from "react-slick";
import ButtonGoDown from "../../components/Button";
import { Link } from "react-router-dom";
import portImage from '../../assets/images/portapp.png'
import iconRow from '../../assets/images/iconRow.png'
import '../../scss/components/sliderCommon.scss'
import './style.scss'
const CardPortfolio = () => {
    return (
      <>
        <div className='slider-item flex items-center justify-items-center max-[500px]:flex-wrap'>
        <div className='slider-image'>
            <img src={portImage} alt='port'/>
          </div>
          <div className='slider-text-left flex h-full items-center'>
            <div className='flex  flex-col'>
              <Link to='/' className='linkText'>
                ショッピングアプリ
              </Link>
              <span className='text-large text-white'>
                投げ銭型ライブ
                配信アプリ
              </span>
              <span className='text-small break-words text-white'>
                10ヶ月（要件定義～納品） FLUTTER,node.js,FIREBASE,AWS,agora.io <br/><br/>
                50時間 <br/><br/>
                配信中に多人数でのゲームが可能。多人数配信も可能且つ、多彩な機能を搭載しております。VCバトル、多人数配信、ゲーム配信、大手ライブ配信アプリに備わっている約8割の機能を備えております。
              </span>
            </div>
          </div>
        </div>
        {' '}
      </>
    )
  }

function Portfolio() {
    const settings = {
        customPaging: function (i) {
          return <span className='w-full'>0{i + 1}</span>
        },
        dots: true,
        prevArrow: <></>,
        nextArrow: <></>,
        dotsClass: 'slick-slide-common',
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
      return (
        <>
          <div className='slider-home slider-portfolio relative'>
            <Slider {...settings} className="slider-common">
              <CardPortfolio/>
              <CardPortfolio/>
              <CardPortfolio/>
              <CardPortfolio/>
              <CardPortfolio/>
            </Slider>
          </div>
        </>
      )
}

export default Portfolio;