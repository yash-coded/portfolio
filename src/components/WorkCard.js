import React from "react";
import { motion } from "framer-motion";
function WorkCard({
  companyName,
  startDate,
  endDate,
  description,
  position,
  website,
}) {
  return (
    <motion.div
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1, transition: { duration: 2 } }}
      className="project-card-bg text-white p-4 xl:w-3/4 lg:w-5/6 rounded-lg subheading shadow-xl"
    >
      <p className="heading text-3xl tracking-wider mb-2">{position}</p>
      <a
        href={website}
        target="blank"
        rel="noopener noreferrer"
        className="heading text-xl tracking-wider mb-2 outline-none"
      >
        {companyName}
      </a>
      <div className="flex items-center space-x-2 text-gray-300 font-thin tracking-wide mb-3">
        <p>{startDate}</p>
        <div className="h-0.5 w-2 bg-white"></div>
        <p>{" " + endDate}</p>
      </div>
      {description.map((item) => (
        <ul className="text-lg tracking-wide text-gray-400 mb-2 list-disc ml-4">
          <li> {item}</li>
        </ul>
      ))}
    </motion.div>
  );
}

export default WorkCard;
