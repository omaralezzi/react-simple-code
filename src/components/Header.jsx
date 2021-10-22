import React from "react";

const Header = ({ title, name }) => {
  // console.log("my props:",props.title);
  // function bothString () { return `${title} ${name}`};
  const bothString = () => {
    return `${title} ${name}`;
  };

  // console.log(bothString ());
  return (
    <header>
      <h1>React task</h1>
      <h3>{title}</h3>
      <h3>{name}</h3>
      <h3>{bothString()}</h3>
    </header>
  );
};

export default Header;
