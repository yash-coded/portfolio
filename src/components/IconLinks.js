import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function IconLinks({ icon, text, website }) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex hover:text-white  space-x-4 text-xl items-center text-gray-400 cursor-pointer"
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </a>
  );
}

export default IconLinks;
