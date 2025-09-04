import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Remedies from "./pages/Remedies";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">GutHealth</h1>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/remedies" className="hover:text-blue-500 transition">
                Remedies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/remedies" element={<Remedies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 GutHealth. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a href="mailto:guthealth@college.com"
              className="hover:text-blue-400"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
