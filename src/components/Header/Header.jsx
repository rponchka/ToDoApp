import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">TASCAT</div>
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke='#5C6F68'
          strokelinecap="round"
          strokelinejoin="round"
          width={24}
          height={24}
          strokeWidth={3}
        >
          {" "}
          <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>{" "}
          <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>{" "}
          <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>{" "}
        </svg>{" "}
      </>
    </div>
  );
}

export default Header;
