import React from "react";
import { BarChart3, Search, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdvancedMetrics = () => {
  const navigate = useNavigate();
  const HandleBackClick = () => {
    navigate('/');
  }
  return (
    <section className="container max-w-7xl mx-auto px-4 py-8">
      <div className="relative mb-12 text-center animate-fade-in">
        <button onClick={HandleBackClick} 
        className='absolute flex items-center gap-2 text-white/60 top-0 left-0 cursor-pointer'> <ArrowLeft className='size-4 sm:size-5' /> Voltar </button>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-blue-600 text-transparent bg-clip-text pb-2">
          Estatísticas Avançadas
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Métricas detalhadas e análises profundas para entender o verdadeiro
          desempenho dos times.
        </p>
      </div>
      <div className="card p-6">
        <h2 className="text-base sm:text-xl font-bold mb-6 bg-gradient-to-r from-purple-800 to-blue-600 bg-clip-text text-transparent flex items-center gap-2">
          <BarChart3 className="size-4 sm:size-5 text-purple-800" />
          Selecione um Time e uma Liga
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* input dos times */}
          <div className="relative">
            <label className="block text-white/80 mb-2">Time</label>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-800 placeholder:text-sm"
                placeholder="Digite o nome do time..."
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-purple-800" />
            </div>
          </div>
          {/* input das ligas  */}
          <div className="relative">
            <label className="block text-white/80 mb-2">Liga</label>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-800 placeholder:text-sm"
                placeholder="Digite o nome da liga..."
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-purple-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedMetrics;