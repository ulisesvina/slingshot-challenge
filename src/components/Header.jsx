import logo from "/coinbase.svg";
import { useRef } from "react";
import { Link } from "wouter";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const navRef = useRef(null);

  const collapse = () => {
    navRef.current.classList.toggle("hidden");
  };

  return (
    <header className="flex items-center justify-between flex-wrap bg-black text-white p-6">
      <div className="flex-shrink-0 mr-6">
        <a href="/">
          <img src={logo} alt="logo" className="h-8 w-8" />
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={collapse}
          className="px-3 py-2 border rounded border-white-400"
        >
          <FaBars />
        </button>
      </div>
      <nav
        ref={navRef}
        className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden"
      >
        <ul className="lg:flex-grow">
          <li className="lg:inline-block">
            <Link href="/">
              <a className="block mt-4 lg:inline mr-4 lg:mt-0">Home</a>
            </Link>
          </li>
          <li className="lg:inline-block">
            <Link href="/about">
              <a className="block mt-4 lg:inline mr-4 lg:mt-0">About</a>
            </Link>
          </li>
          <li className="lg:inline-block">
            <Link href="/contact">
              <a className="block mt-4 lg:inline lg:mt-0">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
