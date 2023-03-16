import React from "react";
import "./Menu.css";
import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import {
  GiBandageRoll,
  GiGhost,
  GiNinjaHeroicStance,
  GiRomanToga,
} from "react-icons/gi";
import { MdTheaterComedy } from "react-icons/md";
import MenuItem from "./MenuItem";

function Menu(props) {
  return (
    <div className="menu-pane">
      <MenuItem name={"Netflix"} Icon={FaHome} to="netflix" />
      <MenuItem name={"Trending"} Icon={FaHotjar} to="trendingMovies" />
      <MenuItem name={"Top rated"} Icon={FaStar} to="topRatedMovies" />
      <MenuItem
        name={"Action Movies"}
        Icon={GiNinjaHeroicStance}
        to="actionMovies"
      />
      <MenuItem
        name={"Comedy Movies"}
        Icon={MdTheaterComedy}
        to="comedyMovies"
      />
      <MenuItem name={"Horror Movies"} Icon={GiGhost} to="horrorMovies" />
      <MenuItem name={"Romance Movie"} Icon={GiRomanToga} to="romanceMovies" />
      <MenuItem
        name={"Documentaries"}
        Icon={GiBandageRoll}
        to="documentaries"
      />
    </div>
  );
}
export default Menu;
