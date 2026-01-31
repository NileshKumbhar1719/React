import { useState, useContext } from "react";
import { login } from "../services/authService"; // make sure URL is correct
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login({ username, password });

      // Check if token exists
      if (res.data && res.data.token) {
        loginUser(res.data.token); // store token in context/localStorage
        navigate("/dashboard");    // redirect on success
      } else {
        alert("Login failed: Invalid server response.");
      }
    } catch (error) {
      // Handle wrong username/password from backend
      if (error.response && error.response.status === 401) {
        alert("Login failed: Username or password is incorrect.");
      } else if (error.response && error.response.data?.message) {
        alert("Login failed: " + error.response.data.message);
      } else {
        alert("Login failed: " + error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
