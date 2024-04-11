import Member from "./Member";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  members: string[];
}
export default function CardProject({ project }: { project: Project }) {
  const { name, description, technologies, members } = project;
  let bg = "343a40";

  return (
    <div className="card rounded-lg bg-[#272727] px-8 py-4 shadow-2xl">
      <div className="acctions mb-2 flex justify-between gap-6 ">
        <div className="flex flex-col">
          <button className="text-2xl">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <span className="text-sm font-thin">100</span>
        </div>
        <div className="flex flex-col align-middle">
          <button className="text-2xl">
            <FontAwesomeIcon icon={faComment} />
          </button>
          <span className="text-sm font-thin">1000</span>
        </div>
        <div className="flex flex-col">
          <button className="text-2xl">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </div>
      </div>
      <h2 className="mb-2 font-bold">
        <a href="">{name}</a>
      </h2>
      <p className="mb-4 opacity-75">{description}</p>
      <h2 className="mb-2 font-bold">Members</h2>
      <div className="al flex justify-start px-[10px] pb-4">
        {members.map((member, index) => {
          return <Member key={index} urlImg={member} />;
        })}
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {technologies.map((technology, index) => (
          <span
            key={index}
            className="mr-2 rounded-lg  border border-current px-2 py-1 text-xs text-white opacity-75"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}
