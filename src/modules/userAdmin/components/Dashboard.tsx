import { Link } from "react-router-dom";
export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-module h-screen flex">
      <div className="left-side p-8 border-r-2">
        <ul>
          <li>
            <Link to={"home"}>Home</Link>
          </li>
          <li>
            <Link to={"proyectos"}>Proyectos</Link>
          </li>
          <li>
            <Link to={"mensajes"}>Mensajes</Link>
          </li>
          <li>Otros</li>
        </ul>
      </div>
      <div className="right-side flex-1 p-8">
        <div className="sub-pages">
          <h2>Dashboard</h2>
          <div className="sub-page-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
