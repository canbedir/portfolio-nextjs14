import React from "react";
import { Button } from "../ui/button";

interface ProjectsTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectsTag = ({ isSelected, name, onClick }: ProjectsTagProps) => {
  const buttonClasses = isSelected
    ? "text-white border-mycolor-100"
    : "text-slate-100 border-mycolor-200 hover:border-mycolor-100";

  return (
    <div>
      <button
        onClick={() => onClick(name)}
        className={`${buttonClasses} rounded-lg border-2 px-6 py-3 text-xl cursor-pointer`}
      >
        {name}
      </button>
    </div>
  );
};

export default ProjectsTag;
