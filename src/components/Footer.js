import React from "react";

const Footer = ({ name, theme }) => {
  const getStringYear = () => {
    const today = new Date(Date.now());
    const year = today.toString().substring(11, 15);

    return year;
  };

  const year = getStringYear();

  return (
    <div className="p-6 text-red-100">
      <h3>
        {name} - {year}
      </h3>
    </div>
  );
};

export default Footer;
