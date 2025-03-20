import React from 'react'
import TextGradient from '../TextGradient'
import { useState } from "react";


function TredingBets() {
    const [showValueBets, setShowValueBets] = useState(false);
    
    return (
        <section className='mb-16'>
            <div className='flex justify-between items-center mb-6'>
                <TextGradient>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame w-6 h-6 text-purple-400"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                    Tendências do Momento
                </TextGradient>
            </div>

            <div className='flex justify-center mb-6'>
                <div class="bg-gray-800/50 p-1 rounded-lg flex">

                <button
                    onClick={() => setShowValueBets(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                        !showValueBets 
                        ? 'bg-[#8F05D6] text-[#F8FAFC]' 
                        : 'text-[#F8FAFC]/60 hover:text-[#F8FAFC]'
                    }`}
                >
                    Tendências
                </button>
                <button
                    onClick={() => setShowValueBets(true)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                        showValueBets 
                        ? 'bg-[#8F05D6] text-[#F8FAFC]' 
                        : 'text-[#F8FAFC]/60 hover:text-[#F8FAFC]'
                    }`}
                >
                    Apostas de Valor
                </button>
                    
                </div>
            </div>

            <div className="card">
                <p className="text-[#F8FAFC]/60 text-center">
                    {showValueBets 
                    ? "Nenhuma aposta de valor encontrada para hoje" 
                    : "Nenhuma tendência encontrada para hoje"
                    }
                </p>
            </div>

            
            {/* <div className="card animate-pulse">
                <div className="h-4 bg-gray-800/50 rounded w-3/4 mb-4"></div>
                <div className="h-8 bg-gray-800/50 rounded mb-4"></div>
                <div className="h-4 bg-gray-800/50 rounded w-1/2"></div>
            </div> */}
        </section>
    )};

export default TredingBets
