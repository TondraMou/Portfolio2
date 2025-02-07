import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-neutral text-white font-semibold p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by <span className=" font-bold">Tondra</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;