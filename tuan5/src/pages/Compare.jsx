import { useReducer, useCallback } from "react";
import { Link } from "react-router-dom";
import logoChefify from "../assets/images/chefify.png";
import avatar from "../assets/images/avatar.png";
import check from "../assets/images/check.png";
import React from "react";

const menuReducer = (state, action) => {
  console.log("[Reducer] Reducer action received:", action);
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, menuOpen: !state.menuOpen };
    default:
      return state;
  }
};

const NavLinks = React.memo(() => {
  console.log("[Memo] NavLinks component rendered");
  return (
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-pink-500">What to cook</a></li>
        <li><a href="#" className="hover:text-pink-500">Recipes</a></li>
        <li><a href="#" className="hover:text-pink-500">Ingredients</a></li>
        <li><a href="/contact" className="hover:text-pink-500">Contact</a></li>
        <li><a href="/about" className="hover:text-pink-500">About Us</a></li>
      </ul>
    </nav>
  );
});

const Header = () => {
  const [state, dispatch] = useReducer(menuReducer, { menuOpen: false });

  const toggleMenu = useCallback(() => {
    console.log("[Callback] ToggleMenu function executed");
    dispatch({ type: "TOGGLE_MENU" });
  }, []);

  return (
    <header className="bg-gray-100 shadow-sm">
      <div className="container mx-auto py-3 flex items-center justify-between">
        <a href="#" className="navbar-brand">
          <img src={logoChefify} alt="logo" className="h-10" />
        </a>

        <div className="hidden lg:flex items-center space-x-6">
          <input
            type="text"
            className="border rounded-lg px-3 py-2 focus:outline-none"
            placeholder="What would you like to cook?"
          />
          <NavLinks />
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/your-recipe-box" className="border border-pink-500 text-pink-500 px-4 py-2 rounded-lg flex items-center">
            <img src={check} alt="" className="h-5 mr-2" />
            Your Recipe Box
          </Link>
          <div className="relative">
            <img src={avatar} alt="" className="h-10 rounded-full cursor-pointer" onClick={toggleMenu} />
            {state.menuOpen && (
              <ul className="absolute right-0 bg-white shadow-md rounded-lg p-2">
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-200">Logout</button>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden flex items-center">
          <button className="p-2" onClick={toggleMenu}>
            <i className={state.menuOpen ? "bi bi-x" : "bi bi-list"}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
