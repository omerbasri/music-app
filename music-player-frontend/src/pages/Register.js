import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      userName: username,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (data.token) {
        console.log(data.token);
        goLoginPage();
      }
    } catch (error) {
      console.error("Error:", error);
    }

    function goLoginPage() {
      navigate("/");
    }
  };

  function passwordControl() {
    if (password !== confirmPassword) {
      alert("Passwords must match");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center h-screen flex-col"
    >
      <div className="uppercase text-xl font-bold tracking-wider whitespace-nowrap pb-3 ">
        <h1>Create Account</h1>
      </div>
      <div className="pb-3">
        <input
          type="text"
          placeholder="Username"
          className="text-black rounded p-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="pb-3">
        <input
          type="text"
          placeholder="E-mail"
          className="text-black rounded p-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="pb-3">
        <input
          type="password"
          placeholder="Password"
          className="text-black rounded p-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="pb-3">
        <input
          type="password"
          placeholder="Re-enter Password"
          className="text-black rounded p-1"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex gap-10">
        <button
          type="submit"
          className="border-2 border-hoverSidebar-200 hover:bg-hoverSidebar rounded p-1 mt-3"
          onClick={passwordControl}
        >
          Create Account
        </button>
      </div>
    </form>
  );
}
