import React from "react";

const Section = ({ section, number }) => {
  const { topic, subSection } = section;
  return (
    <div className="px-2 sm:px-12 lg:px-96 sm:mt-12 mt-8">
      <h1 className="font-semibold text-xl">
        {number + 1}. {topic}
      </h1>

      {subSection.map((subSection, index) => (
        <div className="sm:mt-4 mt-2">
          <h1 className="font-medium text-lg">{subSection.topic}</h1>
          <h1 className="mt-2 text-gray-500">{subSection.description}</h1>
        </div>
      ))}
    </div>
  );
};

export default Section;
