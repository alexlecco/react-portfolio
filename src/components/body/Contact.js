import React from "react";
//import useWindowHeight from "../../hooks/useWindowHeight";

const GoalsContainer = ({ theme, social }) => {
  //const { height } = useWindowHeight();
  //const sectionHeight = height - 72;

  return (
    <div
      className={`h-screen flex flex-col justify-center align-items-center ${theme} h-auto pb-20`}
    >
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
              // eslint-disable-next-line react/jsx-no-target-blank
              <a href={socNetwork.url} target="_blank" key={socNetwork.name}>
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
