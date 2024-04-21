import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        goHomePage();
      }
    } catch (error) {
      console.error("Error:", error);
    }

    function goHomePage() {
      navigate("/home");
    }
  };
  function goRegisterPage() {
    navigate("/register");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center h-screen flex-col"
    >
      <div className="uppercase text-2xl font-bold tracking-wider whitespace-nowrap pb-3 ">
        <h1>Login</h1>
      </div>
      <div className="pb-3">
        <input
          type="text"
          placeholder="Username"
          className="text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="pb-3">
        <input
          type="password"
          placeholder="Password"
          className="text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex gap-10">
        <button type="submit">Login</button>
        <button onClick={goRegisterPage}>Register?</button>
      </div>
    </form>
  );
}
