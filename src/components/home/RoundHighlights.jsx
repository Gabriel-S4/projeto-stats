import React from 'react'
import { Link } from 'react-router-dom'

// Colocar o loading component para carregamento dos cards
// importações:
// import React, {Suspense} from 'react';
// import LoadingComponent from "../LoadingComponent";

function RoundHighlights() {
    return (
        <section class="mb-16">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity w-6 h-6 text-purple-400">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    Destaques da Rodada
                </h2>
                <Link class="text-[0.75rem] sm:text-sm text-purple-400 hover:text-purple-300 font-medium text-center" to="/daily-games">
                    Ver todos
                </Link>
            </div>
            <div class="card bg-[#1B2635]">
                <p class="text-white/60 text-center">Nenhum jogo importante encontrado para hoje. Tente novamente mais tarde.</p>
                <button class="mt-4 px-4 py-2 bg-[#8f05d6]/20 hover:bg-[#8f05d6]/30 transition-colors rounded-lg text-[#8f05d6] text-sm cursor-pointer">Tentar Novamente</button>
            </div>
        </section>
    )
}

export default RoundHighlights
