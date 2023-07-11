import Header from '../../components/Header'
import {Home} from '../../components/HomePage/Home'
import {SideBar} from '../../components/SideBar/SideBar'
import {Portfolio} from '../../components/HomePage/Portfolio'
import {SliderPortfolio} from '../../components/HomePage/SliderPortfolio.jsx'
import {News} from '../../components/HomePage/News'
import {AboutUs} from '../../components/HomePage/AboutUs'
import {OurSkill} from '../../components/HomePage/OurSkill'
import {Services} from '../../components/HomePage/Services'
import {Value} from '../../components/HomePage/Value'
import {Teams} from '../../components/HomePage/Teams'
import '../../scss/components/homePage.scss'
import {useEffect, useState} from 'react'
import {useAnimation, motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Footer from '../../components/Footer'
import ClientFeedback from '../../components/HomePage/ClientFeedback'

const boxVariant = {
  visible: {opacity: 1, scale: 1, transition: {duration: 0.5}},
  hidden: {opacity: 0, scale: 0}
}

const AnimationHome = ({num, scrollToNextSection, isActive, children}) => {
  const control = useAnimation()
  const [ref, inView] = useInView({threshold: 0.5})

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <motion.div
      className={`box ${isActive ? 'active' : ''}`}
      ref={ref}
      variants={boxVariant}
      initial='hidden'
      animate={control}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  const scrollToNextSection = () => {
    setActiveSection((prevSection) => prevSection + 1);
    const nextSectionOffset = (activeSection + 1) * window.innerHeight;
    window.scrollTo({top: nextSectionOffset, behavior: 'smooth'});
  };
  return (
    <>
      <div className='min-h-screen bg-darkGray-900'>
        <Header/>
        <SideBar/>
        <div className='mainContainerHome flex h-full w-full justify-between pt-24'>
          <div className='placeSideBar'></div>
          <div className='mainHomeContent'>
            <AnimationHome>
              <Home/>
            </AnimationHome>
            <AnimationHome>
              <Portfolio/>
            </AnimationHome>
            <AnimationHome>
              <SliderPortfolio/>
            </AnimationHome>
            <AnimationHome>
              <News/>
            </AnimationHome>
            <AnimationHome>
              <AboutUs/>
            </AnimationHome>
            <AnimationHome>
              <OurSkill/>
            </AnimationHome>
            <AnimationHome>
              <Services/>
            </AnimationHome>
            <AnimationHome>
              <Value/>
            </AnimationHome>
            <AnimationHome>
              <Teams/>
            </AnimationHome>
            <AnimationHome>
              <ClientFeedback/>
            </AnimationHome>
            <AnimationHome>
              <Footer/>
            </AnimationHome>
          </div>
        </div>
      </div>
    </>
  )
}
