import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Crown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="nav-luxury sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 animate-minimalistic-pulse">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-modern">Abu Hills</span>
              <div className="text-xs text-emerald-600 font-medium">
                Luxury Villas
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive("/")
                  ? "text-emerald-700 bg-emerald-50 shadow-sm"
                  : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive("/about")
                  ? "text-emerald-700 bg-emerald-50 shadow-sm"
                  : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              About
            </Link>

            {/* Property Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("property")}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
              >
                Property
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "property" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "property" && (
                <div className="dropdown-luxury absolute top-full left-0 mt-1 w-48 z-50">
                  <Link
                    to="/amenities"
                    onClick={closeDropdown}
                    className="dropdown-item-luxury"
                  >
                    Amenities
                  </Link>
                  <Link
                    to="/floor-plans"
                    onClick={closeDropdown}
                    className="dropdown-item-luxury"
                  >
                    Floor Plans
                  </Link>
                  <Link
                    to="/gallery"
                    onClick={closeDropdown}
                    className="dropdown-item-luxury"
                  >
                    Gallery
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Dropdown */}
            <div>
              <Link
                to="/contact"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* CTA Button */}
            <Link to="/contact" className="btn-modern px-6 py-2 text-sm">
              Schedule Visit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-700 focus:outline-none focus:text-emerald-700 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-premium border-t border-emerald-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive("/")
                    ? "text-emerald-700 bg-emerald-50"
                    : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive("/about")
                    ? "text-emerald-700 bg-emerald-50"
                    : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                About
              </Link>

              <Link
                to="/amenities"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
              >
                Amenities
              </Link>

              <Link
                to="/floor-plans"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
              >
                Floor Plans
              </Link>

              <Link
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
              >
                Contact
              </Link>

              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-modern w-full text-center"
                >
                  Schedule Visit
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
