import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Login() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("omerbasri");
  const [password, setPassword] = useState("12345");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
    
      username: username,
      password: password,  
      
    };

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (data.token) {
        console.log(data.token);
        goHomePage();
      }
    } catch (error) {
      console.error("Error:", error);
    }

    function goHomePage() {
      navigate("/home");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
