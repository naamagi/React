import React from "react";
import Ex18_1 from "./Ex18_1";

const text =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const maxNum = 20;



const AppEx18_1 = () => {


  return (
    <div>
      <Ex18_1 text={text} max={maxNum}/>;
    </div>
  );
};

export default AppEx18_1;
