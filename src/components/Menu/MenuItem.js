import React from "react";
import { Link } from "react-scroll";
import { randomRgbaColor } from "../../ultils";

function MenuItem(props) {
  const { name, Icon, to } = props;
  return (
    <Link
      className="sub-menu"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      activeClass="active"
    >
      <div>
        <Icon className="icon" style={{ color: randomRgbaColor(1) }} />
        <span>{name}</span>
      </div>
    </Link>
  );
}

export default MenuItem;
