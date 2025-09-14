export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold">Create account</h2>
        <p className="text-sm text-gray-500">Start your free trial</p>

        <form className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Full name</span>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">
              Confirm password
            </span>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            />
          </label>

          <button className="w-full rounded-lg bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700">
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
