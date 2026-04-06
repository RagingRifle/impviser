// src/components/Favicon.js
import { useEffect } from "react";
import logo from "../assets/impviser_logo.png";

const Favicon = () => {
  useEffect(() => {
    const link =
      document.querySelector("link[rel~='icon']") || document.createElement("link");
    link.rel = "icon";
    link.href = logo;
    link.sizes = "512x512"; // <-- tell browser it's a high-res icon
    document.head.appendChild(link);
  }, []);

  return null;
};

export default Favicon;
