import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Phakitso Mohale
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about" className="text-2xl font-bold">About</a>
          </li>
          <li>
            <a href="/#projects" className="text-2xl font-bold">Projects</a>
          </li>

          <li>
            <a href="/#contact" className="text-2xl font-bold">Contact</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1eQFmoKqRutx2Ue3th7zrBCEaHH8LXgHa/view?usp=drivesdk"
              target="_blank"
              without
              rel="noreferrer"
              className="text-2xl font-bold"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about" className="text-2xl font-bold">About</a>
          </li>
          <li>
            <a href="/#projects" className="text-2xl font-bold">Projects</a>
          </li>

          <li>
            <a href="/#contact" className="text-2xl font-bold">Contact</a>
          </li>
          <li>
            <a href="/#resume" className="text-2xl font-bold">Resume</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
