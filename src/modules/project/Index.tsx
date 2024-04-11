import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <div className="project-module min-h-screen text-white">
      <Outlet />
    </div>
  );
}
