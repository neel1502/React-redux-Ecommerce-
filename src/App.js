import "./App.css";
import CardsDetail from "./CardsDetail";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
