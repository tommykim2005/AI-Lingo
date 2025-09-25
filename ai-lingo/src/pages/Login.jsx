import { Hero } from "../components/Hero";
import { Button } from "../components/Button";
import { handleLogin, handleSignUp } from "../components/auth";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src="" alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src="" alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
