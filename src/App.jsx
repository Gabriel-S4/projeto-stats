import { Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/Home'
import Header from './components/header'
import Footer from './components/footer'
import AdvancedStats from "./pages/AdvancedStats";
import DailyGames from "./pages/DailyGames";
import PlayersStats from "./pages/PlayersStats";
import LiveStats from "./pages/LiveStats";
import NotFound from "./pages/NotFound";
import TeamComparison from "./pages/TeamComparison"
import Calendar from "./pages/Calendar";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen justify-between">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily-games" element={<DailyGames/>}/>
          <Route path="/advanced-stats" element={<AdvancedStats />} />
          <Route path="/players" element={<PlayersStats />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/team-comparison" element={<TeamComparison/>} />
          <Route path="/live" element={<LiveStats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
export default App;
