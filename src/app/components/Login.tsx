import { useState } from "react";

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });

    if (res.ok) {
      const { token } = await res.json();
      localStorage.setItem("adminToken", token);
      onLogin();
    } else {
      alert("Wrong password");
    }
  }

  return (
    <div className="login">
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
