import Header from '../../components/Header'
import {Home} from '../../components/HomePage/Home'
import {SideBar} from '../../components/SideBar/SideBar'
import {Portfolio} from '../../components/HomePage/Portfolio'
import {SliderPortfolio} from '../../components/HomePage/SliderPortfolio.jsx'
import {News} from '../../components/HomePage/News'
import {AboutUs} from '../../components/HomePage/AboutUs'
import {OurSkill} from '../../components/HomePage/OurSkill'
import '../../scss/components/homePage.scss'
import {Services} from "src/components/HomePage/Services";
import {Value} from "src/components/HomePage/Value.jsx";
import {Teams} from "src/components/HomePage/Teams";

export default function HomePage() {
  return (
    <>
      <div className='min-h-screen bg-darkGray-900'>
        <Header/>
        <SideBar/>
        <div className='mainContainerHome flex h-full w-full justify-between pt-24'>
          <div className='placeSideBar'></div>
          <div className='mainHomeContent'>
            <Home/>
            <Portfolio/>
            <SliderPortfolio/>
            <News/>
            <AboutUs/>
            <OurSkill/>
            <Services/>
            <Value/>
            <Teams/>
          </div>
        </div>
      </div>
    </>
  )
}
