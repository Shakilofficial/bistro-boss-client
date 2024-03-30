import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/menu">Our Menu</Link>
      </li>
      <li className="font-semibold">
        <Link to="/order/dessert">Order Food</Link>
      </li>
      <li className="font-semibold">
        <Link to="/dashboard/mycart" className="flex items-center">
          <FaCartShopping />
          <span className="ml-1">Cart</span>
          <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start flex items-center space-x-4">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-orange-400"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className=" text-orange-500 text-lg font-semibold">
            Bistro Boss
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-orange-500">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          {user ? (
            <>
              <span className="font-semibold text-orange-500">
                {user.displayName}
              </span>
              <button
                onClick={handleLogOut}
                className="btn btn-sm font-semibold ml-4 text-red-600 hover:text-red-800 focus:outline-none"
              >
                LogOut
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm font-semibold text-blue-600 hover:text-blue-800 focus:outline-none"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
