import React, { useEffect, useState } from "react";
const ScrolltoTop = () => {
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
  });

  return (
    <div>
      {isVisible && (
        <div className="TopScroll-section">
          <div className="bg-danger" onClick={ScrollTop}>
          <i class="bi bi-arrow-up"></i>    
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrolltoTop;
