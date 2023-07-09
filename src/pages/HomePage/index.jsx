import Header from '../../components/Header'
import { Home } from '../../components/HomePage/Home'
import { SideBar } from '../../components/SideBar/SideBar'
import { Portfolio } from '../../components/HomePage/Portfolio'
import { SliderHome } from '../../components/HomePage/SliderHome'
import { News } from '../../components/HomePage/News'
import { AboutUs } from '../../components/HomePage/AboutUs'
import { OurSkill } from '../../components/HomePage/OurSkill'
import '../../scss/components/homePage.scss'

export default function HomePage() {
  return (
    <>
      <div className='min-h-screen bg-darkGray-900'>
        <Header />
        <SideBar />
        <div className='mainContainerHome flex h-full w-full justify-between pt-24 pt-6'>
          <div className='placeSideBar'></div>
          <div className='mainHomeContent'>
            <Home />
            <Portfolio />
            <SliderHome />
            <News />
            <AboutUs />
            <OurSkill />
          </div>
        </div>
      </div>
    </>
  )
}
