import React, { useState } from 'react';
import TextGradient from '../TextGradient';
import TitleGradient from '../TitleGradient';

function TredingBets() {
    // Estado para alternar entre "Tendências" e "Apostas de Valor"
    const [showValueBets, setShowValueBets] = useState(false);

    // Lista de jogos com estatísticas
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
        }
    ];

    return (
        <section className='mb-16'>
            {/* Cabeçalho com o título "Tendências do Momento" */}
            <div className='flex justify-between items-center mb-6'>
                <TextGradient>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame w-6 h-6 text-purple-400">
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                    </svg>
                    Tendências do Momento
                </TextGradient>
            </div>

            {/* Botões para alternar entre "Tendências" e "Apostas de Valor" */}
            <div className='flex justify-center mb-6'>
                <div className="bg-gray-800/50 p-1 rounded-lg flex">
                    <button
                        onClick={() => setShowValueBets(false)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                            !showValueBets 
                            ? 'bg-[#8F05D6] text-[#F8FAFC]' // Ativo
                            : 'text-[#F8FAFC]/60 hover:text-[#F8FAFC]' // Inativo
                        }`}
                    >
                        Tendências
                    </button>
                    <button
                        onClick={() => setShowValueBets(true)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                            showValueBets 
                            ? 'bg-[#8F05D6] text-[#F8FAFC]' // Ativo
                            : 'text-[#F8FAFC]/60 hover:text-[#F8FAFC]' // Inativo
                        }`}
                    >
                        Apostas de Valor
                    </button>
                </div>
            </div>

            {/* Exibição das tendências ou apostas de valor */}
            <div>
                {showValueBets ? (
                    // Se estiver na aba "Apostas de Valor", exibe esta mensagem
                    <p className="text-[#F8FAFC]/60 text-center">Nenhuma aposta de valor encontrada para hoje</p>
                ) : (
                    // Se estiver na aba "Tendências"
                    matches.length > 0 ? (
                        // Se houver jogos, exibe a lista de partidas
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4">
                            {matches.map((match, index) => (
                                <div key={index} className="relative group overflow-hidden rounded-xl card-interactive">
                                    {/* Fundo do card */}
                                    <div className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110"></div>
                                    <div className="absolute inset-0 bg-[#1B2635] to-transparent z-1"></div>

                                    {/* Conteúdo do card */}
                                    <div className="relative z-2 p-6 h-full flex flex-col justify-between">
                                        <div>
                                            {/* Título do jogo */}
                                            <div className="flex items-center justify-between mb-2">
                                                <TitleGradient>
                                                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#8F05D6] to-[#3B82F6] bg-clip-text text-transparent">
                                                        {match.teams}
                                                    </h3>
                                                </TitleGradient>
                                            </div>

                                            {/* Tag de "Aposta de Valor" */}
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

                                        {/* Estatísticas do jogo */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-[#F8FAFC]/60">Horário</span>
                                                <span className="font-bold text-transparent bg-gradient-to-r from-[#8F05D6] to-[#3B82F6] bg-clip-text">
                                                    {match.time}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-[#F8FAFC]/60">Casa | Empate | Fora</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-[#8F05D6]">{match.homeWin}</span>
                                                    <span className="text-[#F8FAFC]/60">|</span>
                                                    <span className="font-bold text-[#8F05D6]">{match.draw}</span>
                                                    <span className="text-[#F8FAFC]/60">|</span>
                                                    <span className="font-bold text-[#8F05D6]">{match.awayWin}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-[#F8FAFC]/60">Ambas Marcam</span>
                                                <span className="font-bold text-transparent bg-gradient-to-r from-[#8F05D6] to-[#3B82F6] bg-clip-text">
                                                    {match.bothTeamsScore}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-[#F8FAFC]/60">Over 2.5</span>
                                                <span className="font-bold text-red-500">{match.over25}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-[#F8FAFC]/60">Odds</span>
                                                <span className="font-bold text-transparent bg-gradient-to-r from-[#8F05D6] to-[#3B82F6] bg-clip-text">
                                                    {match.odds}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Se não houver jogos, exibe esta mensagem
                        <p className="text-[#F8FAFC]/60 text-center">Nenhuma tendência encontrada para hoje</p>
                    )
                )}
            </div>
        </section>
    );
}

export default TredingBets;
