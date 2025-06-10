import { useLocation } from "react-router-dom";
import MainNavbar from "../navbars/mainNavbar";


const NavbarSwitcher = () => {
  const { pathname } = useLocation();

  // Define your route-to-navbar mappings
  const navbarComponents = {
    "/admin": AdminNavbar,
    "/agent": AgentNavbar,
    "/rider": RiderHeader,
    "/shopowner": ShopOwnerNavbar,
  };


  const [matchedPath, NavbarComponent] = Object.entries(navbarComponents).find(
    ([path]) => pathname.startsWith(path)
  ) || [null, MainNavbar];

  return <NavbarComponent />;
};

export default NavbarSwitcher;