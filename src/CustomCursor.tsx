import React, { useEffect, useState } from "react";
import logo from "./assets/logo.png";
const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <img
      src={logo} // place logo.png in the "public" folder
      alt="cursor"
      className="pointer-events-none w-8 h-8 z-[9999] transition-transform duration-75"
      style={{
        position: "fixed",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default CustomCursor;
