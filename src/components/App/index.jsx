import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import Profil from "../../pages/Profil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/:id" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
