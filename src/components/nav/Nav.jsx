import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/context";

const Nav = () => {
  const {
    authState: { isLoggedIn, user },
    logoutHandler,
  } = useAuth();
  const { pathname } = useLocation();
  const [dropdownToggle, setDropdownToggle] = useState(true);

  return (
    <nav className="px-24 bg-gray-900 flex justify-between items-center p-5 border-b-2 border-cyan-900">
      <Link className="text-sky-400 text-2xl font-bold" to="/">
        <span className="text-stone-50">My</span>Jobs
      </Link>
      {isLoggedIn ? (
        <div className="relative">
          <span className="inline-block text-center rounded-full p-1 bg-sky-100 mr-2 w-8">
            {user.name[0]}
          </span>
          <img
            src="./assets/Icon awesome-caret-down.svg"
            alt="caret-down"
            className="inline cursor-pointer"
            loading="lazy"
            onClick={() => setDropdownToggle(!dropdownToggle)}
          />
          <span
            className={`${
              dropdownToggle && "hidden"
            } absolute top-10 right-0 bg-stone-50 cursor-pointer rounded-md p-2 pr-5 hover:bg-gray-200`}
            onClick={() => {
              setDropdownToggle(!dropdownToggle);
              logoutHandler();
            }}
          >
            Logout
          </span>
        </div>
      ) : (
        pathname !== "/login" && (
          <Link
            className="bg-slate-700 border-sky-400 py-1 px-5 rounded-md text-stone-50 outline-none outline-sky-400"
            to="/login"
          >
            Login/Signup
          </Link>
        )
      )}
    </nav>
  );
};

export { Nav };
