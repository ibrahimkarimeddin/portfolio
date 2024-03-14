import { lazy } from 'react';

const HeroSection = lazy(() => import('../../Components/Home/HeroSection'));
const PowerfulFeatures = lazy(() => import('../../Components/Home/PowerfulFeatures'));
const AboutUs = lazy(() => import('../../Components/Home/AboutUs'));
const OurHow = lazy(() => import('../../Components/Home/LookingFor'));
const Questions = lazy(() => import('../../Components/Home/Questions'));
const Contact = lazy(() => import('../../Components/Home/Contact'));


const Page = () => {
  return (
    <div className='Home_Page'>
      <HeroSection/>
      <PowerfulFeatures/>
      <AboutUs/>
      <OurHow/>
      <Questions/>
      <Contact/>
    </div>
  )
}

export default Page