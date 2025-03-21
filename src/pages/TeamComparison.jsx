import React from 'react'

const TeamComparison = () => {
  return (
    <section className='container max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-8 text-blue-400'> Comparação de times </h1>
      <div className='bg-gray-800 rounded-lg p-6 text-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity w-12 h-12 text-blue-400 mx-auto mb-4"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
        <p className='text-gray-400'> Comparação detalhada de times em desenvolvimento </p>
      </div>
    </section>
  )
}

export default TeamComparison