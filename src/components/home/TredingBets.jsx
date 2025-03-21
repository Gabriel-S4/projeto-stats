import React, { useState, Suspense } from 'react';
import TextGradient from '../TextGradient';
import TitleGradient from '../TitleGradient';
import { Link } from 'react-router-dom'
import LoadingComponent from "../LoadingComponent";

function TredingBets() {
    const [showValueBets, setShowValueBets] = useState(false);

    // Objetos para a substituição dos dados pela API
    const matches = [
        {
            teams: "Union Santa Fe vs Racing Club",
            time: "21:00",
            odds: "2.16",
            homeWin: "58%",
            draw: "19%",
            awayWin: "23%",
            bothTeamsScore: "62%",
            over25: "55%"
        },
        {
            teams: "Union Santa Fe vs Racing Club",
            time: "21:00",
            odds: "2.16",
            homeWin: "58%",
            draw: "19%",
            awayWin: "23%",
            bothTeamsScore: "62%",
            over25: "55%"
        },
        {
            teams: "Union Santa Fe vs Racing Club",
            time: "21:00",
            odds: "2.16",
            homeWin: "58%",
            draw: "19%",
            awayWin: "23%",
            bothTeamsScore: "62%",
            over25: "55%"
        },
        {
            teams: "Union Santa Fe vs Racing Club",
            time: "21:00",
            odds: "2.16",
            homeWin: "58%",
            draw: "19%",
            awayWin: "23%",
            bothTeamsScore: "62%",
            over25: "55%"
        },{
            teams: "Union Santa Fe vs Racing Club",
            time: "21:00",
            odds: "2.16",
            homeWin: "58%",
            draw: "19%",
            awayWin: "23%",
            bothTeamsScore: "62%",
            over25: "55%"
        },
        {
            teams: "Union Santa Fe vs Racing Club",
            time: "21:00",
            odds: "2.16",
            homeWin: "58%",
            draw: "19%",
            awayWin: "23%",
            bothTeamsScore: "62%",
            over25: "55%"
        }
    ];

    return (
        <section className='mb-16'>
            <div className='flex justify-between items-center mb-6'>
                <TextGradient>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame w-6 h-6 text-purple-400">
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                    </svg>
                    Tendências do Momento
                </TextGradient>
                <Link className="text-[0.75rem] sm:text-sm text-purple-400 hover:text-purple-300 font-medium text-center" to="/trends">
                    Ver todas
                </Link>
                
            </div>

            <div className='flex justify-center mb-6'>
                <div className="bg-gray-800/50 p-1 rounded-lg flex">
                {/* Alterna entre as opções */}
                    <button onClick={() => setShowValueBets(false)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${!showValueBets ? 'bg-[#8F05D6] text-[#F8FAFC]' : 'text-[#F8FAFC]/60 hover:text-[#F8FAFC]'}`}>Tendências</button>
                    <button onClick={() => setShowValueBets(true)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${showValueBets ? 'bg-[#8F05D6] text-[#F8FAFC]' : 'text-[#F8FAFC]/60 hover:text-[#F8FAFC]'}`}>Apostas de Valor</button>
                </div>
            </div>

            <div>
                {showValueBets ? (
                    <div className="card"><p className="text-white text-center">Nenhuma aposta de valor encontrada para hoje</p></div>
                ) : (
                    matches.length > 0 ? (
                        <Suspense fallback={<LoadingComponent/>}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4">
                                {matches.map((match, index) => (
                                
                                    <div key={index} className="relative group overflow-hidden rounded-xl card-interactive">
                                        <div className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110"></div>
                                        <div className="absolute inset-0 bg-[#1B2635] to-transparent z-1"></div>

                                        <div className="relative z-2 p-6 h-full flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <TitleGradient>
                                                        <h3 className="text-xl font-bold text-white/70">{match.teams}</h3>
                                                    </TitleGradient>
                                                </div>
                                                <div className="flex gap-2 mb-4">
                                                    <div className="px-3 py-1 bg-brand-purple/20 border border-[#8F05D6] rounded-full text-sm font-medium text-[#8F05D6] flex items-center gap-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-3 h-3">
                                                            <circle cx="12" cy="8" r="6"></circle>
                                                            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                                                        </svg>
                                                        <span>Aposta de Valor</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between text-sm"><span className="text-white/60">Horário</span><span className="font-bold text-white/80">{match.time}</span></div>
                                                <div className="flex items-center justify-between text-sm"><span className="text-white/60">Casa | Empate | Fora</span><div className="flex items-center gap-2"><span className="font-bold text-white/80">{match.homeWin}</span><span className="text-white/60">|</span><span className="font-bold text-white/80">{match.draw}</span><span className="text-white/60">|</span><span className="font-bold text-white/80">{match.awayWin}</span></div></div>
                                                <div className="flex items-center justify-between text-sm"><span className="text-white/60">Ambas Marcam</span><span className="font-bold text-white/80">{match.bothTeamsScore}</span></div>
                                                <div className="flex items-center justify-between text-sm"><span className="text-white/60">Over 2.5</span><span className="font-bold text-white/80">{match.over25}</span></div>
                                                <div className="flex items-center justify-between text-sm"><span className="text-white/60">Odds</span><span className="font-bold text-white/80">{match.odds}</span></div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </Suspense>
                    ) : (
                        <div className="card"><p className="text-white text-center">Nenhuma tendência encontrada para hoje</p></div>
                    )
                )}
            </div>
        </section>
    );
}

export default TredingBets;
