import React from "react";
import { NavBarWrapper } from "./NavBar.styles";

export function NavBar({ setSelected }) {
  return (
    <NavBarWrapper>
      <div className="tab" onClick={() => setSelected("upload")}>Title</div>
      <div className="tab" onClick={() => setSelected("upload")}>Upload</div>
      <div className="tab" onClick={() => setSelected("data")}>Data</div>
      <div className="tab" onClick={() => setSelected("graph")}>Graph</div>
      <div className="tab" onClick={() => setSelected("chart")}>Chart</div>
    </NavBarWrapper>
  );
}
