import React, { useEffect, useState } from "react";
// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

const Topscroll = () => {
  const [isVisible, setisVisible] = useState(false);

  const ToggleVisibility = () => {
    if (window.scrollY > 300) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", ToggleVisibility);

    AOS.init({ duration: 2000 });
  },[]);

  return (
    <div>
      {isVisible && (
        <div className="TopScroll-section shadow"  data-aos="fade-up">
          <div className="scroll-div" onClick={ScrollTop}>
          <i class="bi bi-arrow-up"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topscroll;
