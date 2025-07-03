import React, { useState } from "react";
import "./App.css";
const NavBar = () => {
  let [value, updatevalue] = useState("");
  return (
    <>
      <div id="navbar">
        <img src="/cloudy.png" alt="logo" id="logoImg" />

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            id="searchfield"
            type="text"
            name="value"
            value={value}
            placeholder="Search"
            onChange={(e) => {
              updatevalue(e.target.value);
            }}
          />
          <img src="/search.png" alt="search" id="searchIcon" />
        </div>
      </div>
    </>
  );
};
export default NavBar;
