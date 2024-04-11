import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [effect, setEffect] = useState<boolean>(false);

  useEffect(() => {
    setEffect(true);
    return () => {
      setEffect(false);
    };
  }, []);

  return (
    <div className="page h-full  flex justify-center items-center gap-8 ">
      <h2 className="font-bold dark:text-white">FIIS UNAS</h2>
      <h1
        className={`flex flex-col font-bold text-8xl uppercase bg-text-gradient ${
          effect ? "efecto" : ""
        }`}
      >
        <span>c</span>
        <span>o</span>
        <span>l</span>
        <span>a</span>
        <span>p</span>
        <span>p</span>
      </h1>
      <div className="dark:text-white">
        {/* <h2 className="mb-4 font-bold">Lorem ipsum dolor sit amet </h2> */}
        <h2 className="text-2xl mb-4">Bienvenido</h2>
        <p className="w-[300px] mb-4 font-thin min-w-[400px]">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor numquam
          excepturi quia molestias, alias at asperiores quae temporibus pariatur
          . */}
          Colapp es una plataforma de colaboracion que permite a los estudiantes
          y profesores colaborar en proyectos de software, hardware,
          investigacion, entre otros.
        </p>
        <div className="flex ">
          {/* <button className="bg-black dark:bg-white dark:text-black text-white px-8 py-2">
            start
          </button> */}
          <Link
            to="/home"
            className="bg-black dark:bg-white dark:text-black text-white px-8 py-2"
          >
            go home
          </Link>
        </div>
      </div>
    </div>
  );
}
