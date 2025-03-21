import React, { useState } from 'react';
import { format, addDays, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const leagues = [
  {
    name: "J-League Cup",
    matches: [
      {
        id: 1,
        matchTime: "02:00",
        status: "Encerrado",
        homeTeam: {
          name: "Tochigi City",
          logo: "https://media.api-sports.io/football/teams/7145.png",
          score: 0,
        },
        awayTeam: {
          name: "Kashima",
          logo: "https://media.api-sports.io/football/teams/290.png",
          score: 1,
        },
        halftimeScore: "0 - 0",
        matchUrl: "/match/1328108",
        matchDate: new Date(), // Data da partida
      },
      // adicione mais jogos para a J-League Cup
    ],
  },
  {
    name: "Premier League",
    matches: [
      {
        id: 2,
        matchTime: "04:00",
        status: "Encerrado",
        homeTeam: {
          name: "Manchester United",
          logo: "https://media.api-sports.io/football/teams/67.png",
          score: 2,
        },
        awayTeam: {
          name: "Liverpool",
          logo: "https://media.api-sports.io/football/teams/64.png",
          score: 1,
        },
        halftimeScore: "1 - 0",
        matchUrl: "/match/1328109",
        matchDate: new Date(), // Data da partida
      },
      // adicione mais jogos para a Premier League
    ],
  },
  // adicione mais ligas
];

function MatchCard({ match }) {
  return (
    <div className="p-3 rounded-lg cursor-pointer transition-all bg-gray-800/20 hover:bg-gray-800/40">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <div className="grid grid-cols-2 items-center text-xs text-white/60">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clock w-4 h-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{match.matchTime}</span>
            </div>
            <div className="text-right text-white/60 flex items-center justify-end gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-circle2 w-3 h-3"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              {match.status}
            </div>
          </div>
        </div>
        <a
          className="ml-2 p-1 bg-[#8f05d6]/20 hover:bg-[#8f05d6]/30 rounded text-[#8f05d6]"
          title="Ver detalhes completos"
          href={match.matchUrl}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link w-4 h-4"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
        </a>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={match.homeTeam.logo}
            alt={match.homeTeam.name}
            className="w-6 h-6 object-contain"
          />
          <span className="font-medium text-sm text-red-500">{match.homeTeam.name}</span>
        </div>
        <div className="text-center px-2 py-1 bg-[#8f05d6]/10 rounded-lg text-sm font-bold text-[#8f05d6]">
          {match.homeTeam.score} - {match.awayTeam.score}
        </div>
        <div className="flex items-center justify-end gap-2">
          <span className="text-sm text-green-500 font-bold">{match.awayTeam.name}</span>
          <img
            src={match.awayTeam.logo}
            alt={match.awayTeam.name}
            className="w-6 h-6 object-contain"
          />
        </div>
      </div>
      <div className="mt-2 text-xs text-white/60 text-center">1º Tempo: {match.halftimeScore}</div>
    </div>
  );
}

function LeagueCard({ league, selectedDate }) {
  // Filtra os jogos da liga pela data selecionada
  const filteredMatches = league.matches.filter(
    (match) => format(match.matchDate, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  );

  // Se não houver jogos para esta data, não renderiza o card
  if (filteredMatches.length === 0) {
    return null;
  }

  return (
    <div className="card mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold bg-gradient-to-r from-[#8f05d6] to-[#3b82f6] bg-clip-text text-transparent">
          {league.name}
        </h3>
        <div className="text-sm text-white/60">
          {filteredMatches.length} jogo{filteredMatches.length !== 1 ? 's' : ''}
        </div>
      </div>
      {filteredMatches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}

function LoadingCard() {
  return (
    <div className="card animate-pulse">
      <div className="h-4 bg-brand-gray-800/50 rounded w-3/4 mb-4"></div>
      <div className="h-8 bg-brand-gray-800/50 rounded mb-4"></div>
      <div className="h-4 bg-brand-gray-800/50 rounded w-1/2"></div>
    </div>
  );
}

function DailyGames() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const previousDay = () => setSelectedDate((prevDate) => subDays(prevDate, 1));
  const nextDay = () => setSelectedDate((prevDate) => addDays(prevDate, 1));

  // Filtra as ligas que possuem jogos na data selecionada
  const leaguesWithMatches = leagues.filter((league) =>
    league.matches.some(
      (match) => format(match.matchDate, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
    )
  );

  return (
    <section className="w-full flex items-center justify-center sm:p-5 p-2">
      <div className="container px-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8 p-2 text-center bg-gradient-to-r from-[#8f05d6] to-[#3b82f6] bg-clip-text text-transparent">
          Jogos do Dia
        </h1>
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={previousDay}
            className="p-2 bg-gray-800/50 hover:bg-gray-800 rounded-full transition-colors cursor-pointer"
            aria-label="Dia anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left w-5 h-5 text-white/60"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <div className="text-center">
            <div className="text-lg font-medium text-white">
              {format(selectedDate, 'EEEE', { locale: ptBR })}
            </div>
            <div className="text-sm text-white/60">
              {format(selectedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </div>
          </div>
          <button
            onClick={nextDay}
            className="p-2 bg-gray-800/50 hover:bg-gray-800 rounded-full transition-colors cursor-pointer"
            aria-label="Próximo dia"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right w-5 h-5 text-white/60"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            {leaguesWithMatches.length > 0 ? (
              leaguesWithMatches.map((league) => (
                <LeagueCard key={league.name} league={league} selectedDate={selectedDate} />
              ))
            ) : (
              <LoadingCard />
            )}
          </div>
          <div className="lg:col-span-2">
            <div className="card flex flex-col items-center justify-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar w-16 h-16 text-[#8F05D6]/30 mb-4"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#8f05d6] to-[#3b82f6] bg-clip-text text-transparent">
                Selecione um Jogo
              </h3>
              <p className="text-white/60 text-center max-w-md">
                Escolha um jogo na lista ao lado para ver análises detalhadas e features pré-game.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DailyGames;
