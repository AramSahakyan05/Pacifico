import React from 'react'
import Title from './title/Title';
import Partners from './partners/Partner';
import WorkingOrder from './workingOrder/WorkingOrder';
import Discover from './discover/Discover';
import ImageSlider from './carousel/Carousel';
import Team from './team/Team';
import Worker from './team/worker/Worker';
import Services from './company-services/Services';
import EmailInput from './email-input/EmailInput';
import Features from './features/Features';
import Abilities from './abilities/Abilities';
import BussinessPromote from './business-promote/BusinessPromote';
import UserPlan from './user-plan/UserPlan';
import LatestNews from './latest-news/LatestNews';
import Contact from './contact/Contact';

const Main = () => {
  return (
    <main>
        <Title />
        <Partners />
        <WorkingOrder />
        <Discover />
        <ImageSlider />
        <Team />
        <Worker />
        <Services />
        <EmailInput />
        <Features />
        <Abilities />
        <BussinessPromote />
        <UserPlan />
        <LatestNews />
        <Contact />
    </main>
  )
}

export default Main
