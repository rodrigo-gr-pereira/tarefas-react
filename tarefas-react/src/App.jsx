import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TaskProvider } from "./context/TaskProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">Sobre</Link> |{" "}
          <Link to="/settings">Configurações</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
