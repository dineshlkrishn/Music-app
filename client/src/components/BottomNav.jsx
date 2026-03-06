import { NavLink } from "react-router-dom";

export default function BottomNav() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "flex flex-col items-center text-red-500"
      : "flex flex-col items-center text-gray-400";

  return (
    <div className="fixed bottom-0 w-full bg-white rounded-t-3xl shadow-xl flex justify-around py-3">
      {" "}
      <NavLink to="/home" className={linkClass}>
        🏠
        <span className="text-xs">Home</span>
      </NavLink>
      <NavLink to="/search" className={linkClass}>
        🔍
        <span className="text-xs">Search</span>
      </NavLink>
      <NavLink to="/library" className={linkClass}>
        📚
        <span className="text-xs">Library</span>
      </NavLink>
      <NavLink to="/radio" className={linkClass}>
        📻
        <span className="text-xs">Radio</span>
      </NavLink>
      <NavLink to="/podcasts" className={linkClass}>
        🎙
        <span className="text-xs">Podcasts</span>
      </NavLink>
    </div>
  );
}
