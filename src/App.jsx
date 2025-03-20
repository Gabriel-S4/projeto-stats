import { Routes, Route, HashRouter} from "react-router-dom";
import './index.css'
import Home from './pages/Home'
import Header from './components/header'
import Footer from './components/Footer'
import AdvancedStats from "./pages/AdvancedStats";
import PlayersStats from "./pages/PlayersStats";

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Routes>
          <Route path="projeto-stats/" element={<Home />} />
          <Route path="projeto-stats/advanced-stats" element={<AdvancedStats/>} />
          <Route path="projeto-stats/players" element={<PlayersStats/>} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  )
}
export default App;
