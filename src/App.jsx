import { Route, Routes } from "react-router-dom";
import { ProtecterRoutes } from "./components/ProtecterRoutes";
import { Home } from "./pages/Home";
import { Pokedex } from "./pages/Pokedex";
import { PokemonDetail } from "./pages/PokemonDetail";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtecterRoutes />}>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<PokemonDetail />} />
      </Route>
    </Routes>
  </>;
}

export default App;
