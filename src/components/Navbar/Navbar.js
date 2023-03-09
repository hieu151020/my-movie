import React, { useEffect, useState } from "react";
import "./Navbar.css";
import NetflixLogo from "../../assests/images/Netflix-logo.png";
import { SearchIcon } from "../Icons";
import { useScrollY } from "../hooks/useScrollY";

function Navbar(props) {
  const [scrollY] = useScrollY();
  return (
    <div
      className="container"
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background" }
      }
    >
      <div className="logo">
        <img src={NetflixLogo} alt="" />
      </div>
      <div className="search">
        <div className="icon-search">
          <SearchIcon />
        </div>
        <input type="text" placeholder="Phim,diễn viên,thể loại,..." />
      </div>
    </div>
  );
}

export default Navbar;
