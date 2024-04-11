import CardProject from "./components/CardProject";
import dataBase from "../../../dataBase.json";

export default function Home() {
  const projects = dataBase.projects;

  return (
    <div className="home container mx-auto p-4">
      <header className="py-8">
        <h1 className="other-1 mb-4 text-7xl font-bold first-letter:uppercase">
          <span className="bg-span">COLAPP </span>
          FIIS
        </h1>
      </header>
      <main>
        <div className="section pb-12">
          <div className="flex items-center justify-between">
            <h1 className="mb-4 px-4 text-3xl">Todos los proyectos</h1>
            <button className="hover:bg-[#3c3c3c] p-2 rounded-md">
              ver mas
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              if (index < 3) {
                return <CardProject key={index} project={project} />;
              }
            })}
          </div>
        </div>
        <div className="section pb-12">
          <div className="flex items-center justify-between">
            <h1 className="mb-4 px-4 text-3xl">En tendencia</h1>
            <button className="hover:bg-[#3c3c3c] p-2 rounded-md">
              ver mas
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              if (index < 3) {
                return <CardProject key={index} project={project} />;
              }
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
