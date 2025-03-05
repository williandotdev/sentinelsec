
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-white">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          This template takes inspired from{" "}
          <a 
            href="https://x.com/BrettFromDJ_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pulse-500 hover:underline"
          >
            DesignJoy's
          </a>{" "}
          BUILD WARS design, built entirely with Lovable by{" "}
          <a 
            href="https://x.com/rezaul_arif" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pulse-500 hover:underline"
          >
            Rezaul Arif
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
