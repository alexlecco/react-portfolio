import React from "react";

const GoalsContainer = ({ theme, social }) => {
  return (
    <div className={`${theme} h-auto pb-20`}>
      <h1 className="text-center text-lg pt-8 mb-4">
        Leave me a message
        <span className="ml-2" role="img" aria-label="Leave me a message">
          📲
        </span>
      </h1>
      <div className="flex align-middle justify-center">
        {social &&
          social
            .filter((socNetwork) => socNetwork.contact)
            .map((socNetwork) => (
              <a href={socNetwork.url}>
                <img
                  src={socNetwork.icon}
                  className="w-16 px-2"
                  alt={socNetwork.name}
                />
              </a>
            ))}
      </div>
    </div>
  );
};

export default GoalsContainer;
