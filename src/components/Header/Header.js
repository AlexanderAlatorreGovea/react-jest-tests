import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 title="Header" className="header">
        {title}
      </h1>
      {/* <h3 title="header" data-testid="header-2" className="header">People</h3> */}
    </>
  );
}
