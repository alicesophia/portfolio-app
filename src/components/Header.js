import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 30
  };

  return (
    <div>
      <div>
        <h3 style={style} >
          <Link to="/">Home</Link>
        </h3>
        <h3 style={style}>
          <Link to="/facts">One Piece facts</Link>
        </h3>
        <h3 style={style}>
          <Link to="/artist-finder">Artist Finder</Link>
        </h3>
        <h3 style={style}>
          <Link to="/cards-search">Hearthstone Cards Search</Link>
        </h3>
      </div>
      {children}
    </div>
  )
}

export default Header;
