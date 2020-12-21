import React from "react";
import { motion } from "framer-motion";
import IconLinks from "./IconLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProjectCard({ title, subtitle, techs, projectDetails }) {
  return (
    <motion.div
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1, transition: { duration: 2 } }}
      className="project-card-bg text-white p-4 xl:w-3/4 lg:w-5/6 rounded-lg subheading shadow-xl"
    >
      <p className="heading text-3xl tracking-wider mb-2">{title}</p>
      <p className="text-lg tracking-wide text-gray-400 mb-2">{subtitle}</p>
      <div className="flex divide-x-2 divide-gray-400 mb-2">
        {techs.map((tech) => (
          <div className="pl-2 pr-2 first:pl-0">
            <p className="">{tech}</p>
          </div>
        ))}
      </div>
      <div className="flex space-x-8 mt-4">
        {projectDetails.map((project) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.website}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={project.icon} />
            <p>{project.text}</p>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
