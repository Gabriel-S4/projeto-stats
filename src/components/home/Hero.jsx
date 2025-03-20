import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[442px] py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 py-3 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Estatísticas Precisas para Apostas Inteligentes
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-100">
          Análise detalhada de jogos, estatísticas atualizadas e previsões de IA
          para maximizar suas chances de sucesso.
        </p>
        <div className="flex flex-wrap md:flex-row mx-auto gap-4 justify-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium shadow-lg hover:shadow-xl transition-all rounded-md px-6 py-3 cursor-pointer">
            Ver jogos de hoje
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium border border-gray-700 hover:border-gray-600 transition-all rounded-md px-6 py-3 cursor-pointer">
            Gerar bilhete
          </button>
        </div>
      </div>
      {/* background setup */}
      <div className="imagem-hero absolute inset-0 opacity-20 -z-20"></div>
      <div className="bg-purple-900/20 absolute inset-0 -z-10"></div>
      <div className="absolute left-0 right-0 bottom-0 h-10 bg-gradient-to-t from-gray-900/30 via-gray-900/20 to-[bg-purple-900/20] -z-10"></div>
    </section>
  );
};

export default Hero;