import React from "react";

function MyComponent() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="arrow" onClick={scrollToTop}>
      ↑
    </div>
  );
}

export default MyComponent;