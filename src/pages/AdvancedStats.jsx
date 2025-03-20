import React from 'react'
import TextGradient from '../components/TextGradient'
function AdvancedStats() {
    
    return (
        <div>
            <main class="container mx-auto px-4 py-8">
                <h1 class="text-3xl font-bold mb-8 text-blue-400">Estatísticas Avançadas por Time</h1>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-1">
                        <div class="bg-gray-800 rounded-lg p-6">

                        <h2 className='text-xl font-semibold mb-4 flex bg-gradient-to-r from-[#8f05d6] to-[#3b82f6] bg-clip-text text-transparent'>Selecione um Time</h2>

                            <div class="relative mb-4 flex justify-center items-center">
                                <input type="text" class=" w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Buscar times..."></input>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute right-3 w-4 h-4 text-gray-400 bg-gray-700">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                            </div>
                            <div class="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                                <button class="w-full p-4 rounded-lg transition-colors bg-gray-700 hover:bg-gray-600">
                                    <div class="flex items-center gap-3">
                                        <img src="https://media.api-sports.io/football/teams/33.png" alt="Manchester United" class="w-8 h-8 object-contain"></img>
                                            <div class="font-medium text-white">Manchester United</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-2">
                        <div class="bg-gray-800 rounded-lg p-6 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity w-12 h-12 text-blue-400 mx-auto mb-4">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                            <p class="text-gray-400">Selecione um time para ver as estatísticas detalhadas</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdvancedStats

