import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Flag, Clock, Target } from "lucide-react";
import LoadingComponent from "../LoadingComponent";

const filters = [
  { id: "all", label: "Todos", icon: TrendingUp },
  { id: "goals", label: "Gols", icon: Target },
  { id: "corners", label: "Escanteios", icon: Flag },
  { id: "cards", label: "Cartões", icon: Clock },
];

const stats = [
  {
    id: 1,
    type: "goals",
    title: "Over 2.5 Gols",
    teams: [
      { name: "Manchester City", value: "78%", trend: "up" },
      { name: "Bayern Munich", value: "72%", trend: "up" },
      { name: "PSG", value: "70%", trend: "down" },
    ],
  },
  {
    id: 2,
    type: "corners",
    title: "Média de Escanteios",
    teams: [
      { name: "Liverpool", value: "11.2", trend: "up" },
      { name: "Real Madrid", value: "10.8", trend: "down" },
      { name: "Manchester United", value: "10.5", trend: "up" },
    ],
  },
  {
    id: 3,
    type: "cards",
    title: "Cartões por Jogo",
    teams: [
      { name: "Atletico Madrid", value: "4.2", trend: "up" },
      { name: "Roma", value: "3.8", trend: "down" },
      { name: "Sevilla", value: "3.5", trend: "down" },
    ],
  },
  {
    id: 4,
    type: "cards",
    title: "Cartões por Jogo",
    teams: [
      { name: "Atletico Madrid", value: "4.2", trend: "up" },
      { name: "Roma", value: "3.8", trend: "down" },
      { name: "Sevilla", value: "3.5", trend: "down" },
    ],
  },
];

const BettingStats = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStats =
    activeFilter === "all"
      ? stats
      : stats.filter((stat) => stat.type === activeFilter);

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-purple-400" />
          Estatísticas para Apostas
        </h2>
        <Link
          to="/advanced-metrics"
          className="text-[0.75rem] sm:text-sm text-purple-400 hover:text-purple-300 font-medium text-center"
        >
          Análise completa
        </Link>
      </div>
      <Suspense fallback={<LoadingComponent />}>
        {/* filtros */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 pb-2">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-800 to-blue-600 text-white shadow-lg glow"
                    : "bg-gray-900/60 text-white/80 hover:bg-gray-800 border border-gray-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                {filter.label}
              </button>
            );
          })}
        </div>
          {/* card com valores dos times  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredStats.map((stat) => (
            <div key={stat.id} className="card card-interactive">
              <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-purple-800 to-blue-600 bg-clip-text text-transparent">
                {stat.title}
              </h3>
              <div className="space-y-3">
                {stat.teams.map((team, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
                  >
                    <span className="text-white/80">{team.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold bg-gradient-to-r from-purple-800 to-blue-600 bg-clip-text text-transparent">
                        {team.value}
                      </span>
                      {team.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-purple-800" />
                      ) : (
                        <TrendingUp className="w-4 h-4 text-purple-800/50 transform rotate-180" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default BettingStats;