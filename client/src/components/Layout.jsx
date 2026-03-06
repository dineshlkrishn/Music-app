import MiniPlayer from "./MiniPlayer";
import BottomNav from "./BottomNav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen pb-32 bg-[#FFFFF] text-black">
      <Outlet />

      <MiniPlayer />
      <BottomNav />
    </div>
  );
}
