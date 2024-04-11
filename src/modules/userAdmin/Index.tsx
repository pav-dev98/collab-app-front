import { Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";

export default function Index() {
  return (
    <div className="project-module min-h-screen text-white">
      <Dashboard>
        <Outlet />
      </Dashboard>
    </div>
  );
}
