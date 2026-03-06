import { useState } from "react";
import { loginUser, createUser } from "../utils/authStorage";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (mode === "login") {
      const user = loginUser(email, password);

      if (!user) {
        setMessage("Invalid email or password");
        return;
      }

      localStorage.setItem("currentUser", JSON.stringify(user));
      nav("/home");
    }

    if (mode === "signup") {
      const res = createUser(email, password);

      if (res !== "success") {
        setMessage(res);
        return;
      }

      setMessage("Account created! Please login.");
      setMode("login");
    }

    if (mode === "forgot") {
      setMessage("Password reset link sent (mock).");
    }
  };

  const googleLogin = () => {
    const user = { email: "google@soundson.com" };
    localStorage.setItem("currentUser", JSON.stringify(user));
    nav("/home");
  };

  const facebookLogin = () => {
    const user = { email: "facebook@soundson.com" };
    localStorage.setItem("currentUser", JSON.stringify(user));
    nav("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white w-96 p-8 rounded-3xl shadow-xl">
        {/* LOGO */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
            S
          </div>

          <h1 className="text-2xl font-bold mt-2">SoundsOn</h1>

          <p className="text-gray-400 text-sm">Music Everywhere</p>
        </div>

        <form onSubmit={submit}>
          <input
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {mode !== "forgot" && (
            <div className="relative mb-3">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 border rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>
          )}

          {mode === "login" && (
            <div
              className="text-right text-sm text-gray-500 mb-4 cursor-pointer"
              onClick={() => {
                setMode("forgot");
                setMessage("");
              }}
            >
              Forgot Password?
            </div>
          )}

          {message && <p className="text-red-500 text-sm mb-3">{message}</p>}

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 transition"
          >
            {mode === "login" && "Login"}
            {mode === "signup" && "Sign Up"}
            {mode === "forgot" && "Send Reset Link"}
          </button>
        </form>

        {mode === "login" && (
          <>
            <div className="text-center my-4 text-gray-400">
              Or connect with
            </div>

            <button
              onClick={googleLogin}
              className="w-full border p-3 rounded-xl mb-3 flex items-center justify-center gap-3 hover:bg-gray-50"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                className="w-5"
              />
              Continue with Google
            </button>

            <button
              onClick={facebookLogin}
              className="w-full border p-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                className="w-5"
              />
              Continue with Facebook
            </button>
          </>
        )}

        <div className="text-center mt-4 text-sm">
          {mode === "login" && (
            <>
              Don't have an account?
              <span
                className="text-red-600 ml-1 cursor-pointer"
                onClick={() => {
                  setMode("signup");
                  setMessage("");
                }}
              >
                Sign Up
              </span>
            </>
          )}

          {mode !== "login" && (
            <>
              Back to
              <span
                className="text-red-600 ml-1 cursor-pointer"
                onClick={() => {
                  setMode("login");
                  setMessage("");
                }}
              >
                Login
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
