import { Layout } from "../components/Layout";
import Home from "./Home";
 
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./Login";
import Lessons from "./Lessons";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Layout onNavigate={navigate}>
      <Routes>
        <Route path="/" element={<Home onStart={(to) => navigate(to)} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lessons" element={<Lessons />} />
      </Routes>
      {isHomePage && (
        <footer className="p-4 text-center text-duolingo-gray">
          <p>© {new Date().getFullYear()} AI-Lingo. All rights reserved.</p>
        </footer>
      )}
    </Layout>
  );
}

// Export main App
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
