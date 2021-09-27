import React, { useRef } from "react";

function NavBar() {
  const burger = useRef(null);
  const menuItems = useRef(null);

  const handeClick = () => {
    burger.current.classList.toggle("open");
    menuItems.current.classList.toggle("open");
  };

  return (
    <nav>
      <div className="burger" ref={burger} onClick={handeClick}>
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
      </div>
      <div className="menu-items" ref={menuItems}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contat Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
