import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <nav className="bg-indigo-600 p-4 rounded-md mb-6">
          <Link
            className="text-white font-semibold mx-3 hover:text-yellow-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-white font-semibold mx-3 hover:text-yellow-300"
            to="/about"
          >
            Sobre
          </Link>
          <Link
            className="text-white font-semibold mx-3 hover:text-yellow-300"
            to="/settings"
          >
            Configurações
          </Link>
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
