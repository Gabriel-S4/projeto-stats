import React from 'react'

function Trends() {
  return (
    <section className='container max-w-7xl mx-auto px-4 py-8'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-8 text-blue-400'> Tendências </h1>
      <div className='bg-gray-800 rounded-lg p-6 text-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-12 h-12 text-blue-400 mx-auto mb-4"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
        <p className='text-gray-400'> Análise de tendências em desenvolvimento </p>
      </div>
    </section>
  )
}

export default Trends
