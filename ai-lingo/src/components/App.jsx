import { Hero } from "./Hero";
import { Button } from "./Button";
import { handleLogin, handleSignUp} from "./auth"

export default function App() {
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
        <Button onClick = {handleSignUp}>Sign Up</Button>
        <Button onClick = {handleLogin}>Login</Button>
      </div>

      <Hero title="Learn with Fun!" subtitle="5 minutes a day is all it takes">
        <Button>Start Lesson</Button>
      </Hero>
    </div>
  );
}
