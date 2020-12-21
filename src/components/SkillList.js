import React from "react";

function SkillList({ number, skill }) {
  return (
    <div className="text-gray-300 flex md:space-x-5 space-x-2 lg:text-2xl md:text-xl text-2xl ">
      <span className="border-b-4 border-gray-300">{number}</span>
      <p>{skill}</p>
    </div>
  );
}

export default SkillList;
