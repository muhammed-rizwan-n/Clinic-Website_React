import React, { useEffect } from "react";

const Snowfall = () => {
  useEffect(() => {
    const numFlakes = 50;
    for (let i = 0; i < numFlakes; i++) {
      const flake = document.createElement("div");
      flake.className = "snowflake";
      flake.style.left = Math.random() * 100 + "vw";
      flake.style.animationDuration = 5 + Math.random() * 10 + "s";
      flake.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(flake);
    }
  }, []);
  return null;
};

export default Snowfall;
