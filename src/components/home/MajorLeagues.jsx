import React from 'react'

// Colocar o loading component para carregamento dos cards
// importações:
// import React, {Suspense} from 'react';
// import LoadingComponent from "../LoadingComponent";

function MajorLeagues() {
    return (
        <section class="mb-16">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy w-6 h-6 text-purple-400">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                    Principais Ligas
                </h2>
            </div>
            <div class="card bg-[#1B2635]">
                <p class="text-white/60 text-center">Nenhuma Liga encontrada. Tente novamente mais tarde.</p>
            </div>
        </section>
    )
}

export default MajorLeagues
