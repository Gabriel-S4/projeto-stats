import React from 'react'
import Hero from '../components/home/Hero.jsx'
import CardFeatures from '../components/home/CardFeatures.jsx'
import CardPredictions from '../components/home/Cardpredictions.jsx'
import TrendingBets from '../components/home/TredingBets.jsx'
const Home = () => {
  return (
    <>
    <Hero /> 
    <main className='max-w-7xl container mx-auto px-4'>
      <CardFeatures />
      <CardPredictions />
      <TrendingBets />
    </main>
    </>
  )
}

export default Home