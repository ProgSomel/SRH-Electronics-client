import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/" style={({ isActive, isPending, isTransitioning }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "orange",
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct" >Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/mycart">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar  flex justify-between bg-black text-white  font-extrabold">
        <div className="navbar-start py-5">
          <div className="dropdown bg-black text-white">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><span className="italic text-5xl text-orange-400">SRH</span><sup className="italic text-red-300">Tech</sup></a>
        </div>
        <div className="navbar-center hidden lg:flex bg-black text-white">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
