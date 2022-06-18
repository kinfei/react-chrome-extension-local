import { Routes, Route, MemoryRouter } from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";

import "./App.css";

const App = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </MemoryRouter>
  );
};

export default App;
