import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
    console.log("Отправляем:", { email, password });

    const res = await fetch("http://localhost:8000/auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log("Ответ:", data);

    if (res.ok) {
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      alert("Login успешен!");
    } else {
      alert(data.detail || "Ошибка логина");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold">Welcome back</h2>
        <p className="text-sm text-gray-500">Sign in to your account</p>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            Login();
          }}
        >
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="/forget-password" className="text-indigo-600 font-medium">
              Forgot?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700"
          >
            Sign in
          </button>

          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-600 font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
