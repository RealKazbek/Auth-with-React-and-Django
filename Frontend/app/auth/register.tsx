import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRegister = async () => {
    console.log(username, email, password1, password2);

    const res = await fetch("http://localhost:8000/auth/registration/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password1, password2 }),
    });

    const data = await res.json();
    console.log("Response:", data);

    if (res.ok) {
      // Обычно dj-rest-auth /registration/ сразу возвращает user + токены
      localStorage.setItem("access", data.access || "");
      localStorage.setItem("refresh", data.refresh || "");
      alert("Successfully!");
    } else {
      // у dj-rest-auth ошибки приходят в формате {field: ["error1", "error2"]}
      alert(JSON.stringify(data));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold">Create account</h2>
        <p className="text-sm text-gray-500">Start your free trial</p>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Full name</span>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Your name"
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              onChange={(e) => setPassword1(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              autoComplete="new-password"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">
              Confirm password
            </span>
            <input
              onChange={(e) => setPassword2(e.target.value)} // 👈 исправлено
              type="password"
              placeholder="••••••••"
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              autoComplete="new-password"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700"
          >
            Sign up
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 font-medium">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}