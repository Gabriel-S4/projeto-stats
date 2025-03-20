import React, { useState, useEffect } from "react";
import { Users, Search, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TextGradient from "../components/TextGradient";

const PlayerStats = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  const [searchPlayers, setSearchPlayers] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [playersResults, setPlayersResults] = useState([]);

  //simulando nomes para teste (tirar na produção)
  useEffect(() => {
    if (searchPlayers.length >= 3) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        // substituir por uma API real.
        setPlayersResults([
          `${searchPlayers} Silva`,
          `${searchPlayers} Santos`,
          `${searchPlayers} Oliveira`,
        ]);
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
      setPlayersResults([]);
    }
  }, [searchPlayers]);

  return (
    <section className="container max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-white/60 hover:text-purple-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="size-4 sm:size-5" />
          <span className="text-xs sm:text-base">Voltar</span>
        </button>
        <h2 className="text-base sm:text-2xl bg-gradient-to-r from-[#8f05d6] to-[#3b82f6] bg-clip-text text-transparent font-bold">Estatísticas de Jogadores</h2>
      </div>
      <div className="card mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-purple-800" />
          <h2 className="text-xl font-bold text-white">Buscar Jogador</h2>
        </div>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-800 rounded-lg bg-brand-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-800"
            placeholder="Buscar jogador por nome..."
            value={searchPlayers}
            onChange={(e) => setSearchPlayers(e.target.value)}
          />
        </div>
        {/* Adicionando a condição para exibir os resultados da busca (esta buscando valores setados, trocar para a API) */}
        {searchPlayers.length >= 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              Resultados da busca
            </h3>

            {isLoading ? (
              <div className="flex justify-center py-4">
                <div className="w-8 h-8 border-4 border-purple-800 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {playersResults.map((player, index) => (
                  <li
                    key={index}
                    className="bg-brand-gray-800 rounded-lg px-4 py-2 text-white hover:bg-purple-800 transition-colors cursor-pointer"
                  >
                    {player}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="card p-6 text-center">
          <Users className="w-16 h-16 text-purple-900/60 mx-auto mb-4" />
          <h2 className="text-xl bg-gradient-to-r from-[#8f05d6] to-[#3b82f6] bg-clip-text text-transparent font-semibold mb-2">Selecione um Time ou Busque um Jogador</h2>
          <p className="text-white/60 text-center max-w-md mx-auto">
            Selecione um time para ver seu elenco ou use a barra de busca acima para encontrar um jogador específico.
          </p>
        </div>
    </section>
  );
};

export default PlayerStats;