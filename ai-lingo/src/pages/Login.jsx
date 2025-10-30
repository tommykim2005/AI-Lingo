import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { handleLogin, handleSignUp } from "../components/auth";
import { DuolingoCard } from "../components/card";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      if (isSignUp) {
        await handleSignUp(email, password);
      } else {
        await handleLogin(email, password);
      }
      navigate("/lessons");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-duolingo-gray-light p-6">
      <DuolingoCard title={isSignUp ? "Create Account" : "Welcome Back!"}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="p-3 bg-duolingo-red/10 text-duolingo-red rounded-lg text-sm">
              {error}
            </div>
          )}
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-duolingo-gray/20 rounded-lg focus:outline-none focus:border-duolingo-blue"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-duolingo-gray/20 rounded-lg focus:outline-none focus:border-duolingo-blue"
              required
            />
            {isSignUp && (
              <p className="text-xs text-duolingo-gray mt-1">Use at least 6 characters.</p>
            )}
          </div>
          <Button type="submit">
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-duolingo-blue text-sm hover:underline"
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        </form>
      </DuolingoCard>
    </div>
  );
};

export default Login;
