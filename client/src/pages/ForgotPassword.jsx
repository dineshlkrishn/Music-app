import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Reset link sent to email (mock)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white w-96 p-8 rounded-3xl shadow-lg">
        <h1 className="text-xl font-semibold mb-6">Reset Password</h1>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg mb-4"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-xl"
          >
            Send Reset Link
          </button>
        </form>

        {message && <p className="text-green-600 mt-4">{message}</p>}
      </div>
    </div>
  );
}
