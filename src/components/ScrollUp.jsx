import React, { useRef } from "react";
import scrollUpp from "../assets/images/scrollUp.svg";

function ScrollUp() {
  let scrollBTN = useRef(null);
  window.onscroll = function () {
    if (window.scrollY >= 600) {
      scrollBTN.current.style.display = "block";
    } else {
      scrollBTN.current.style.display = "none";
    }
    console.log(window.scrollY);
  };
  const handleScrollUp = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll" ref={scrollBTN}>
      <img src={scrollUpp} alt="scrollUp" onClick={handleScrollUp} />
    </div>
  );
}

export default ScrollUp;
