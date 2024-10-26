import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          Logo
        </Link>

        {/* for large screens */}
        <Navbar />

        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
