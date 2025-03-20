import { Routes, Route} from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advanced-stats" element={<AdvancedStats/>} />
        <Route path="/players" element={<PlayersStats/>} />
      </Routes>
      <Footer />
    </>
  )
}
export default App;
