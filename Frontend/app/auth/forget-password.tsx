export default function ForgetPassword() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold">Forgot password</h2>
        <p className="text-sm text-gray-500">
          We'll send a reset link to your email
        </p>

        <form className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            />
          </label>

          <button className="w-full rounded-lg bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700">
            Send reset link
          </button>

          <p className="text-sm text-center text-gray-600">
            Remembered?{" "}
            <a href="/login" className="text-indigo-600 font-medium">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
