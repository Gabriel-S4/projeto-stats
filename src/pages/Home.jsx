import React from 'react'
import Hero from '../components/home/Hero.jsx'
import CardFeatures from '../components/home/CardFeatures.jsx'
import CardPredictions from '../components/home/Cardpredictions.jsx'
import TrendingBets from '../components/home/TredingBets.jsx'
import RoundHighlights from '../components/home/RoundHighlights.jsx'
import MajorLeagues from '../components/home/MajorLeagues.jsx'
import BettingStats from '../components/home/BettingStats.jsx'
import CalendarGames from '../components/home/CalendarGames.jsx'

const Home = () => {
  return (
    <>
    <Hero /> 
    <main className='max-w-7xl container mx-auto px-4'>
      <CardFeatures />
      <CardPredictions />
      <TrendingBets />
      <RoundHighlights/>
      <MajorLeagues/>
      <BettingStats/>
      <CalendarGames/>
    </main>
    </>
  )
}

export default Home