import { NavLink, useLocation, useParams } from "react-router-dom";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

const NavBar = () => {
  const location = useLocation();
  const param = useParams();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "underline decoration-2" : isPending ? "pending" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isActive
              ? "underline decoration-2 decoration-[#9538E2]/50"
              : isPending
              ? "pending"
              : ""
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isActive
              ? "underline decoration-2 decoration-[#9538E2]/50"
              : isPending
              ? "pending"
              : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive, isPending }) =>
            isActive
              ? "underline decoration-2 decoration-[#9538E2]/50"
              : isPending
              ? "pending"
              : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={
        location.pathname === "/" || location.pathname === `/${param.category}`
          ? "navbar z-10 max-w-7xl lg:absolute top-5 left-0 right-0 mx-auto"
          : "navbar max-w-7xl mx-auto"
      }
    >
      <div
        className={
          location.pathname === "/" ||
          location.pathname === `/${param.category}`
            ? "navbar-start lg:text-white"
            : "navbar-start"
        }
      >
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          Gadget Heaven
        </NavLink>
      </div>
      <div
        className={
          location.pathname === "/" ||
          location.pathname === `/${param.category}`
            ? "navbar-center hidden lg:flex text-white"
            : "navbar-center hidden lg:flex "
        }
      >
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-4">
        <a className=" p-2 hover:scale-115 transition-all duration-300 rounded-full bg-white cursor-pointer">
          <MdOutlineShoppingCart />
        </a>
        <a className=" p-2 hover:scale-115 transition-all duration-300 rounded-full bg-white cursor-pointer">
          <MdFavoriteBorder />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
