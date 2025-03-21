import React, {Suspense} from 'react';
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import LoadingComponent from "../LoadingComponent";

const CalendarGames = () => {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
          <Calendar className="w-6 h-6 text-purple-400" />
          Calendário de Jogos
        </h2>
        <Link
          to="/interactive-calendar"
          className="text-[0.75rem] sm:text-sm text-purple-400 hover:text-purple-300 font-medium text-center"
        >
          Calendário completo
        </Link>
      </div>
      <Suspense fallback={<LoadingComponent />}>
        a
      </Suspense>
    </section>
  );
};

export default CalendarGames;