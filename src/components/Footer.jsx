import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="p-4 shadow md:p-6 bg-black">
      <div className="md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">
          © {new Date().getFullYear() + " "}
          <a href="https://coinbase.com" className="hover:underline">
            Coinbase.
          </a>
        </span>
        <span className="text-white ml-2">Made with ❤️ in Mexico City.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
          <li className="lg:inline-block">
            <Link href="/">
              <a className="mr-4 hover:underline md:mr-6">Home</a>
            </Link>
          </li>
          <li className="lg:inline-block">
            <Link href="/about">
              <a className="mr-4 hover:underline md:mr-6">About</a>
            </Link>
          </li>
          <li className="lg:inline-block">
            <Link href="/contact">
              <a className="mr-4 hover:underline md:mr-6">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-white mt-2 text-sm">
        Google Play and the Google Play logo are trademarks of Google LLC.
        <br />
        The Apple Logo and App Store are trademarks of Apple Inc., registered in
        the U.S. and other countries.
      </div>
    </footer>
  );
};

export default Footer;
