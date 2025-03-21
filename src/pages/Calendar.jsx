import React, { useState } from 'react';
import { format, addDays, subDays, startOfWeek, addWeeks, subWeeks, isSameDay } from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Search, Filter, ArrowLeft } from 'lucide-react';
import { ptBR } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';

export default function Calendar() {
  const navigate = useNavigate();
  const HandleBackClick = () => {
    navigate('/');
  }
  //importando calendário com a data atual usando o date-fns e useState para manipular o estado
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekStart, setWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
  
  // funcao com a lista dos dias da semana
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  // Funções para navegar entre os dias e semanas
  const goToPreviousWeek = () => {
    setWeekStart(subWeeks(weekStart, 1));
  };
  const goToNextWeek = () => {
    setWeekStart(addWeeks(weekStart, 1));
  };
  const goToPreviousDay = () => {
    setSelectedDate(subDays(selectedDate, 1));
  };
  const goToNextDay = () => {
    setSelectedDate(addDays(selectedDate, 1));
  };

  return (
    <section className="container max-w-7xl mx-auto px-4 py-8">
      <div className="relative mb-12 text-center animate-fade-in">
        <button onClick={HandleBackClick} 
        className='absolute flex items-center gap-2 text-white/60 top-0 left-0 cursor-pointer'> <ArrowLeft className='size-4 sm:size-5' /> Voltar </button>
        <h1 className="pt-10 sm:pt-0 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-blue-600 text-transparent bg-clip-text">
          Calendário Interativo
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Visualize e filtre jogos por data e liga para planejar suas apostas com antecedência.
        </p>
      </div>

      <div className="mb-8">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={goToPreviousWeek}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-800 to-blue-600 bg-clip-text text-transparent flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-[#8f05d6]" />
              {format(weekStart, "MMMM yyyy", { locale: ptBR })}
            </h2>

            <button
              onClick={goToNextWeek}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-1 sm:gap-2 palce-content-center">
            {weekDays.map((day, index) => {
              const isSelected = isSameDay(day, selectedDate);
              const isToday = isSameDay(day, new Date());

              return (
                <button
                  key={index}
                  onClick={() => setSelectedDate(day)}
                  className={`p-3 rounded-lg transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-800 to-blue-600 text-white'
                      : isToday
                      ? 'bg-gray-800/80 text-white border border-purple-800/50'
                      : 'bg-gray-800/50 text-white/80 hover:bg-gray-800'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-[0.6rem] sm:text-xs mb-1">
                      {format(day, 'EEE', { locale: ptBR })}
                    </div>
                    <div className="text-lg font-bold">{format(day, 'd')}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-y-4 sm:gap-y-0 sm:flex-row sm:justify-between items-center mt-6">
            <button
              onClick={goToPreviousDay}
              className="text-xs sm:text-base px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors text-white flex items-center gap-2 cursor-pointer"
            >
              <ChevronLeft className="size-3 sm:size-4" />
              Dia Anterior
            </button>

            <div className="text-white text-xs sm:text-base font-medium">
              {format(selectedDate, "EEEE, d 'de' MMMM", { locale: ptBR })}
            </div>

            <button
              onClick={goToNextDay}
              className="text-xs sm:text-base px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors text-white flex items-center gap-2 cursor-pointer"
            >
              Próximo Dia
              <ChevronRight className="size-3 sm:size-4" />
            </button>
          </div>
        </div>
      </div>
      {/* Filtros e Jogos */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filtros */}
          <div className='col-span-1'>
            <div className="card p-6 sticky top-20">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl text-left font-bold bg-gradient-to-r from-purple-800 to-blue-600 bg-clip-text text-transparent flex items-center  gap-2">
                  <Filter className="size-4 text-[#8f05d6]" />
                  Filtros
                </h2>
              </div>
              <div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-800"
                    placeholder="Buscar ligas..."
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-700" />
                </div>
              </div>
            </div>
          </div>
          {/* Lista de Jogos */}
          {/* criar lógica para funcionar devidamente -- Conteudo meramente visual */}
          <div className="lg:col-span-3">
            <div className="card p-6">
              <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-800 to-blue-600 bg-clip-text text-transparent">
                Jogos do Dia
              </h2>
              <div className='text-center flex flex-col items-center gap-y-3 p-6'>
                <p className='text-gray-400'>Nenhum Jogo encontrado para esta data e filtros selecionados.</p>
                <button className='w-fit bg-purple-950/70 px-4 py-2 rounded-md text-purple-600 text-xs cursor-pointer'>Mostrar todas as ligas</button>
              </div>
            </div>   
          </div>
        </div>  
    </section>
  );
}