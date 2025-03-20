import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Search, Menu, X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/LOGO STATS.png'

const header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    return (
        <header className="bg-[#0f172ad4] backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
            <div className=" mx-auto px-6 w-full">
                <div className="max-w-[1248px] mx-auto flex items-center justify-between h-16">
                    <a href="/" className="flex items-center">
                        <img src={logo} alt="Stats" className="h-8 w-auto object-contain text-white"/>
                    </a>
                    <div className="hidden xl:flex items-center gap-2 bg-gray-700 rounded-lg px-4 py-2 border-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search w-4 h-4 text-purple-700 "><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                        <input type="text" placeholder="Buscar times, ligas ou jogos..." className="bg-transparent border-none focus:outline-none text-brand-light w-64 text-white" />
                    </div>
                    <nav className="hidden xl:flex items-center gap-4">

                    <Link to="/" className={`flex items-center gap-2 transition-colors ${
                        location.pathname === "/" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                    onClick={() => setIsMenuOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home w-4 h-4"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        Início
                    </Link>
                    <Link to="/daily-games" className={`flex items-center gap-2 transition-colors ${
                        location.pathname === "/daily-games" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                    onClick={() => setIsMenuOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days w-4 h-4"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                        Jogos do Dia
                    </Link>
                    <Link to="/advanced-stats" className={`flex items-center gap-2 transition-colors ${
                        location.pathname === "/advanced-stats" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                    onClick={() => setIsMenuOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity w-4 h-4"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        Estatísticas Avançadas
                    </Link>
                    <Link to="/players" className={`flex items-center gap-2 transition-colors ${
                        location.pathname === "/players" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                    onClick={() => setIsMenuOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round w-4 h-4"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
                        Estatísticas de Jogadores
                    </Link>
                    
                        <Dropdown/>

                    </nav>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="xl:hidden text-white cursor-pointer group hover:text-[#8F05D6] transition">

                        {isMenuOpen ? <X className="w-6 h-6 text-[#8F05D6]" /> : <Menu className="w-6 h-6" />}

                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                <>
                <div className="relative xl:hidden py-4 border-t border-gray-700 z-60">
                    <div className="flex items-center gap-2 bg-gray-700 rounded-lg px-4 py-2 mb-4 border border-gray-800">
                    <Search className="w-4 h-4 text-purple-700" />
                    <input
                        type="text"
                        placeholder="Buscar times, ligas ou jogos..."
                        className="bg-transparent border-none focus:outline-none text-white w-full"
                    />
                    </div>
                    <nav className="flex flex-col gap-4">

                        <Link to="/" className={`flex items-center gap-2 hover:text-[#8F05D6] ${
                            location.pathname === "/" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                        onClick={() => setIsMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home w-4 h-4"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            Início
                        </Link>

                        <Link to="/daily-games" className={`flex items-center gap-2 hover:text-[#8F05D6] ${
                            location.pathname === "/daily-games" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                        onClick={() => setIsMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days w-4 h-4"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                            Jogos do Dia
                        </Link>

                        <Link to="/advanced-stats" className={`flex items-center gap-2 hover:text-[#8F05D6] ${
                            location.pathname === "/advanced-stats" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                        onClick={() => setIsMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity w-4 h-4"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                            Estatísticas Avançadas
                        </Link>

                        <Link to="/players" className={`flex items-center gap-2 hover:text-[#8F05D6] ${
                            location.pathname === "/players" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                        onClick={() => setIsMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round w-4 h-4"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
                            Estatísticas de Jogadores
                        </Link>

                        <Link to="/calendar" className={`flex items-center gap-2 hover:text-[#8F05D6] ${
                            location.pathname === "/calendar" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                        onClick={() => setIsMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                            Calendário
                        </Link>

                        <Link to="/ticket-generator" className={`flex items-center gap-2 hover:text-[#8F05D6] ${
                            location.pathname === "/ticket-generator" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                        onClick={() => setIsMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket w-4 h-4"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
                            Gerador de Bilhetes
                        </Link>

                        <Link to="/team-comparison" className={`flex items-center gap-2 hover:text-[#8F05D6] ${
                            location.pathname === "/team-comparison" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                        onClick={() => setIsMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy w-4 h-4"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                            Comparação de Times
                        </Link>

                        <Link to="/live" className={`flex items-center gap-2 hover:text-[#8F05D6] ${
                            location.pathname === "/live" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                        onClick={() => setIsMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio w-4 h-4"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path></svg>
                            Ao Vivo
                        </Link>
                    </nav>
                </div>
                </>
                )}
                
            </div>
        </header>
    )
}

const Dropdown = () => {
  return (
    <div className="flex justify-center items-center bg-transparent gap-2 text-white hover:text-[#8F05D6]">
      <FlyoutLink href="" FlyoutContent={PricingContent}>
        Mais
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >

      <a href={href} className="relative flex justify-center items-center bg-transparent gap-2">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#0F172A] border-gray-700 border" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64  p-5 shadow-xl bg-[#0f172af2] text-white border border-gray-700 backdrop-blur-sm flex justify-center items-center">
      <div className="mb-0 space-y-3">

        <Link to="/calendar" className={`flex items-center gap-2 hover:text-[#8F05D6] ${
                            location.pathname === "/calendar" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                        onClick={() => setIsMenuOpen(false)}
                        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
            Calendário
        </Link>

        <Link to="/ticket-generator" className={`flex items-center gap-2 hover:text-[#8F05D6] ${
                            location.pathname === "/ticket-generator" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                        onClick={() => setIsMenuOpen(false)}
                        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket w-4 h-4"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
            Gerador de Bilhetes 
        </Link>

        <Link to="/team-comparison" className={`flex items-center gap-2 hover:text-[#8F05D6] ${
                            location.pathname === "/team-comparison" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                        onClick={() => setIsMenuOpen(false)}
                        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy w-4 h-4"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
            Comparação de Times
        </Link>

        <Link to="/live" className={`flex items-center gap-2 hover:text-[#8F05D6] ${
                            location.pathname === "/live" ? "text-[#8F05D6] font-medium" : "text-white hover:text-[#8F05D6] flex items-center gap-2 transition-color"}`}
                        onClick={() => setIsMenuOpen(false)}
                        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio w-4 h-4"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path></svg>
            Ao Vivo
        </Link>
      </div>
    </div>
  );
};

export default header