import React from 'react';

//pagina de erro 404 ao acessar uma rota inexistente
const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br p-6">
      <div className="border border-gray-800  rounded-3xl p-12 text-center max-w-xl w-full">
        <h1 className="text-6xl sm:text-8xl font-extrabold text-white mb-4">404</h1>
        <p className="text-base sm:text-xl text-white mb-3 font-semibold">
          Ops, essa pagina não existe!
        </p>
        <p className="text-sm sm:text-lg text-gray-200 mb-8">
          Você tentou acessar uma aposta fora do mercado... 
          Aqui só tem estatísticas confiáveis, mas essa página deu all-in errado!
        </p>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-purple-800 to-purple-950 text-white text-[0.7rem] sm:text-base py-3 px-6 sm:px-10 rounded-md hover:brightness-110 transition-all duration-300"
        >
          Voltar para o início
        </a>
      </div>

    </div>
  );
};

export default NotFound;