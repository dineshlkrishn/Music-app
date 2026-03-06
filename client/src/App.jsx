import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Radio from "./pages/Radio";
import Podcasts from "./pages/Podcasts";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* LOGIN PAGE */}
      <Route path="/" element={<Login />} />

      {/* APP PAGES */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Route>
    </Routes>
  );
}
