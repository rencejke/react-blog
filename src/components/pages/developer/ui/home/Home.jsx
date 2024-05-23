import React from 'react'
import UIHeader from '../partials/UIHeader'
import BannerSlider from './BannerSlider'
import Trending from './Trending'
import Featured from './Featured'
import Fashion from './Fashion'
import UIFooter from '../partials/UIFooter'

const Home = () => {
  return (
    <>
     <UIHeader/>
     <BannerSlider/>
     <Trending/>
     <Featured/>
     <Fashion/>
     <UIFooter/>
    </>
  )
}

export default Home
