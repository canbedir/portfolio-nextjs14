import { Code, CodeSquareIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ProjectsCardProps {
  title: string;
  description: string;
  image: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectsCard = ({
  description,
  gitUrl,
  image,
  previewUrl,
  title,
}: ProjectsCardProps) => {
  return (
    <div>
      <div
        className="h-56 md:h-72 rounded-lg relative group"
        style={{ background: `url(${image})`, backgroundSize: "cover" }}
      >
        <div
          className="items-center justify-center absolute top-0 left-0 w-full h-full bg-mycolor-400 bg-opacity-0
            hidden group-hover:flex group-hover:bg-opacity-20 transition-all duration-700 gap-5"
        >
          <Link
            href={gitUrl}
            target="_blank"
            className="border-2 relative rounded-full h-14 w-14 border-white/60 flex items-center justify-center"
          >
            <Code className="h-10 w-10 text-white/80 hover:text-white absolute cursor-pointer" />
          </Link>

          <Link
            href={previewUrl}
            target="_blank"
            className="border-2 relative rounded-full h-14 w-14 border-white/60 flex items-center justify-center"
          >
            <EyeIcon className="h-10 w-10 text-white/80 hover:text-white absolute cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col text-white rounded-lg mt-3 px-4 py-2 gap-1 bg-red-950/80">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
