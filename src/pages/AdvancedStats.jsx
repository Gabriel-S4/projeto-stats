import React, { useState } from 'react';
import TitleGradient from '../components/TitleGradient';
import { ChartNoAxesColumn, Goal } from 'lucide-react';

// Dados dos times e suas estatísticas (isso facilita a troca de dados no futuro)
const teamsData = {
  "Manchester United": {
    nome: "Manchester United",
    anoTemporada: "2025",
    jogos: 29,
    vitorias: 14,
    empates: 6,
    derrotas: 9,
    aproveitamento: 55,
    golsMarcados: 55,
    golsSofridos: 40,
    saldoGols: 15,
    mediaGolsMarcados: 0,
    mediaGolsSofridos: 0,
    cleanSheets: 7,
    logo: "https://media.api-sports.io/football/teams/33.png"
  },
  Chelsea: {
    nome: "Chelsea",
    anoTemporada: "2025",
    jogos: 25,
    vitorias: 15,
    empates: 5,
    derrotas: 5,
    aproveitamento: 60,
    golsMarcados: 45,
    golsSofridos: 30,
    saldoGols: 15,
    mediaGolsMarcados: 0,
    mediaGolsSofridos: 0,
    cleanSheets: 5,
    logo: "https://media.api-sports.io/football/teams/49.png"
  },
  Liverpool: {
    nome: "Liverpool",
    anoTemporada: "2025",
    jogos: 30,
    vitorias: 16,
    empates: 7,
    derrotas: 7,
    aproveitamento: 58,
    golsMarcados: 50,
    golsSofridos: 35,
    saldoGols: 15,
    mediaGolsMarcados: 0,
    mediaGolsSofridos: 0,
    cleanSheets: 8,
    logo: "https://media.api-sports.io/football/teams/40.png"
  },
};

// Componente de exibição das estatísticas do time
function EstatisticasTime({ estatisticas, logo }) {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Card do Nome do Time */}
      <div className="bg-[#1E2939] text-white p-4 rounded mb-4 flex items-center gap-4">
        <img src={logo} alt={estatisticas.nome} className="w-10 h-10 object-contain" />
        <div className="flex flex-col">
            <h2 className="text-xl font-semibold">{estatisticas.nome}</h2>
            <p className="text-gray-400 text-sm">Temporada {estatisticas.anoTemporada}</p>
        </div>
      </div>

      {/* Estatísticas de Jogos */}
      <div className="bg-[#1E2939] text-white p-4 rounded mb-4">
        <TitleGradient className='mb-2'>
            <ChartNoAxesColumn className="text-[#8F05D6] size-5"/>
            <h3 className="text-lg font-semibold">Estatísticas de Jogos</h3>
        </TitleGradient>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#364153] p-3 rounded">
            <p className="text-xs">Jogos</p>
            <p className="text-xl font-bold">{estatisticas.jogos}</p>
          </div>
          <div className="bg-[#364153] p-3 rounded">
            <p className="text-xs">Vitórias</p>
            <p className="text-xl font-bold">{estatisticas.vitorias}</p>
          </div>
          <div className="bg-[#364153] p-3 rounded">
            <p className="text-xs">Empates</p>
            <p className="text-xl font-bold">{estatisticas.empates}</p>
          </div>
          <div className="bg-[#364153] p-3 rounded">
            <p className="text-xs">Derrotas</p>
            <p className="text-xl font-bold">{estatisticas.derrotas}</p>
          </div>
          <div className="bg-[#364153] p-3 rounded col-span-2">
            <p className="text-xs">Aproveitamento</p>
            <p className="text-xl font-bold">{estatisticas.aproveitamento}%</p>
          </div>
        </div>
      </div>

      {/* Estatísticas de Gols */}
      <div className="bg-[#1E2939] text-white p-4 rounded">
        <TitleGradient className='mb-2'>
            <Goal className="text-[#8F05D6] size-5"/>
            <h3 className="text-lg font-semibold">Estatísticas de Gols</h3>
        </TitleGradient>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#364153] p-3 rounded">
            <p className="text-xs">Gols Marcados</p>
            <p className="text-xl font-bold">{estatisticas.golsMarcados}</p>
          </div>
          <div className="bg-[#364153] p-3 rounded">
            <p className="text-xs">Gols Sofridos</p>
            <p className="text-xl font-bold">{estatisticas.golsSofridos}</p>
          </div>
          <div className="bg-[#364153] p-3 rounded">
            <p className="text-xs">Saldo de Gols</p>
            <p className="text-xl font-bold">{estatisticas.saldoGols}</p>
          </div>
          <div className="bg-[#364153] p-3 rounded">
            <p className="text-xs">Média de Gols Marcados</p>
            <p className="text-xl font-bold">{estatisticas.mediaGolsMarcados}</p>
          </div>
          <div className="bg-[#364153] p-3 rounded">
            <p className="text-xs">Média de Gols Sofridos</p>
            <p className="text-xl font-bold">{estatisticas.mediaGolsSofridos}</p>
          </div>
          <div className="bg-[#364153] p-3 rounded">
            <p className="text-xs">Clean Sheets</p>
            <p className="text-xl font-bold">{estatisticas.cleanSheets}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdvancedStats() {
  // Estado para armazenar o time selecionado
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [search, setSearch] = useState("");

  // Função para lidar com o clique no time e exibir as estatísticas
  const handleTeamClick = (teamName) => {
    setSelectedTeam(teamsData[teamName]); // Atualiza as estatísticas do time selecionado
  };

  // Filtra os times com base no que foi digitado no input
  const filteredTeams = Object.keys(teamsData).filter(team =>
    team.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8 text-blue-400">Estatísticas Avançadas por Time</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex bg-gradient-to-r from-[#8f05d6] to-[#3b82f6] bg-clip-text text-transparent">Selecione um Time</h2>

              {/* Campo de busca para filtrar os times */}
              <div className="relative mb-4 flex justify-center items-center">
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Buscar times..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)} // Atualiza o estado da busca
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute right-3 w-4 h-4 text-gray-400 bg-gray-700">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>

              {/* Lista de times filtrados */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 flex flex-col gap-0.5">
                {filteredTeams.map((team) => (
                  <button key={team} className="w-full p-4 rounded-lg transition-colors bg-gray-700 hover:bg-gray-600" onClick={() => handleTeamClick(team)}>
                    <div className="flex items-center gap-3">
                      <img src={teamsData[team].logo} alt={team} className="w-8 h-8 object-contain" />
                      <div className="font-medium text-white">{team}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className={`rounded-lg ${selectedTeam ? '' : 'bg-gray-800'}`}>
              {/* Mensagem padrão ou estatísticas do time */}
              {selectedTeam ? (
                <EstatisticasTime estatisticas={selectedTeam} logo={selectedTeam.logo} />
              ) : (
                <>
                    <div className='p-6 text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity w-12 h-12 text-blue-400 mx-auto mb-4">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                        <p className="text-gray-400">Selecione um time para ver as estatísticas detalhadas</p>
                    </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdvancedStats;
