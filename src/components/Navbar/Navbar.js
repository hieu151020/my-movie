import React, { useState } from "react";
import "./Navbar.css";
import NetflixLogo from "../../assests/images/Netflix-logo.png";
import { SearchIcon } from "../Icons";
import { useScrollY } from "../hooks/useScrollY";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const [scrollY] = useScrollY();
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeyword(keywords);
    keywords.length > 0
      ? navigate(`/search?keywords=${keywords.trim()}`)
      : navigate("/");
  };

  const goHome = () => {
    navigate("/");
    setKeyword("");
  };
  return (
    <div
      className="container"
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "black" }
      }
    >
      <div className="logo" onClick={goHome}>
        <img src={NetflixLogo} alt="" />
      </div>
      <div className="search">
        <div className="icon-search">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Phim,diễn viên,thể loại,..."
          onChange={handleChangeInput}
          value={keyword}
        />
      </div>
    </div>
  );
}

export default Navbar;
