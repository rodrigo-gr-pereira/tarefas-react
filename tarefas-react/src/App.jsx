import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TaskProvider } from "./context/TaskProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <TaskProvider>
      <BrowserRouter>
        {/* Wrapper com a classe dark */}
        <div className={dark ? "dark" : ""}>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <nav className="bg-indigo-600 dark:bg-indigo-800 p-4 flex justify-between items-center">
              <div>
                <Link className="text-white mx-3 hover:text-yellow-300" to="/">
                  Home
                </Link>
                <Link
                  className="text-white mx-3 hover:text-yellow-300"
                  to="/about"
                >
                  Sobre
                </Link>
                <Link
                  className="text-white mx-3 hover:text-yellow-300"
                  to="/settings"
                >
                  Configurações
                </Link>
              </div>
              <button
                onClick={() => setDark(!dark)}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded"
              >
                {dark ? "☀️ Claro" : "🌙 Escuro"}
              </button>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
