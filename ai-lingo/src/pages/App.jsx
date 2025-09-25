import { Hero } from "../components/Hero";
import { Button } from "../components/Button";
import { handleSignUp } from "../components/auth";
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
function AppContent() {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <Button onClick={handleSignUp}>Sign Up</Button>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </div>
      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Hero
              title="Learn with Fun!"
              subtitle="5 minutes a day is all it takes"
            >
              <Button>Start Lesson</Button>
            </Hero>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
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
