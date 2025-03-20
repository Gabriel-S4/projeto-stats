import React from 'react';
import { Brain, Zap, BarChart3, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextGradient from '../TextGradient.jsx'

// Dados do card em objetos (caso queira acresentar so adicionar um objeto usando os mesmos parametros e substituir os valores)
const cardsData = [
    {
        icon: <Brain className="w-6 h-6 text-purple-400" />,
        precision: '81% precisão',
        titleGame: 'Barcelona vs Liverpool',
        overUnder: 'Over/Under',
        rate: 'Over 2.5',
        house: '49%',
        draw: '33%',
        off: '18%',
        odd: '1.96',
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
        precision: '83% precisão',   
        titleGame: 'Chelsea vs Barcelona',  
        overUnder: 'Over/Under',   
        rate: 'Over 2.5',
        house: '41%',
        draw: '24%',
        off: '35%',
        odd: '2.06',
    },
    {
        icon: <Target className="w-6 h-6 text-purple-400" />,
        precision: '83% precisão',
        titleGame: 'PSG vs Chelsea',
        overUnder: 'Over/Under',
        rate: '1X',
        house: '59%',
        draw: '18%',
        off: '23%',
        odd: '1.33',
    },

];

// Estilização padronizada do card com as props
const Card = ({ precision, titleGame, overUnder, rate, house, draw, off, odd }) => (
    <div class="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-5 border border-purple-500/20 hover:border-purple-500/40 transition-all shadow-lg hover:shadow-purple-500/10">
        <div class="flex justify-between items-start mb-3">
            <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span class="text-xs font-medium text-green-400">
                    Previsão IA
                </span>
            </div>
            <div class="bg-purple-500/20 text-purple-300 text-xs font-medium px-2 py-1 rounded-full">
                {precision}
            </div>
        </div>
        <div class="mb-3">
            <h3 class="font-bold text-white mb-1 truncate">
                {titleGame}
            </h3>
            <div class="flex items-center gap-2">
                <div class="bg-gray-800/70 px-2 py-1 rounded text-xs text-gray-300">
                    {overUnder}
                </div>
                <div class="bg-purple-600/30 px-2 py-1 rounded text-xs text-purple-300 font-medium">
                    {rate}
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center">
            <div class="flex gap-3">
                <div class="text-center">
                    <div class="text-xs text-gray-400">
                        house
                    </div>
                    <div class="font-bold text-white">
                        {house}
                    </div>
                </div>
                <div class="text-center">
                    <div class="text-xs text-gray-400">
                        Empate
                    </div>
                    <div class="font-bold text-white">
                        {draw}
                    </div>
                </div>
                <div class="text-center">
                    <div class="text-xs text-gray-400">
                        Fora
                    </div>
                    <div class="font-bold text-white">
                        {off}
                    </div>
                </div>
            </div>
                <div class="bg-gradient-to-r from-purple-600/20 to-blue-600/20 px-3 py-2 rounded-lg">
                <div class="text-xs text-gray-400 text-center">
                    Odd
                </div>
                <div class="text-xl font-bold text-white">
                    {odd}
                </div>
            </div>
        </div>
    </div>
);

const CardPredictions = () => {
    return (
        <section className="mb-16 mt-8">
            <div className="flex justify-between items-center mb-6">
                <TextGradient>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain w-6 h-6 text-purple-400"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
                    Previsões de IA
                </TextGradient>
                <a class="text-sm text-purple-400 hover:text-purple-300 font-medium" href="/machine-learning-predictions">Ver todas</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </section>
    );
};

export default CardPredictions;