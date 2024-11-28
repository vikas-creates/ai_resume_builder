import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'; // Import theme icons from React Icons

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown menu
  const buttonRef = useRef(null); // Ref for the Templates button

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close the dropdown if clicked outside 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false); // close dropdown if clicked outside
      }
    };

    // Add event listener for the outside clicks
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg ${darkMode ? 'bg-transparent' : ''} m-0 p-4 w-full`}
    >
      <div className="flex justify-between items-center max-w-full">
        {/* Logo Section with Transparent Background */}
        <div className="text-2xl font-bold hover:scale-105 duration-200">
          <Link to="/">VR Resumes</Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li className="hover:scale-110 duration-200">
            <Link to="/" className="hover:text-gray-200 transition duration-200 ">
              Home
            </Link>
          </li>

          <li className="relative">
            <button
              ref={buttonRef} // attach ref to the templates button
              className="text-white dark:text-white transition hover:scale-105 hover:text-gray-200 duration-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Templates
            </button>

            {dropdownOpen && (
              <div
                ref={dropdownRef} // attach ref to the dropdown
                className="absolute left-0 w-48 mt-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg transition-all duration-200"
              >
                <ul className="space-y-2 p-2">
                  <li>
                    <button className="w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md p-2 transition duration-200">
                      <Link to="/templates/fresher" >Fresher Templates</Link>
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md p-2 transition duration-200">
                    <Link to="/templates/experienced" >Experienced Templates</Link>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="hover:scale-110 duration-200">
            <Link to="/about" className="hover:text-gray-200 transition duration-200 ">
              About Us
            </Link>
          </li>
          <li className="hover:scale-110 duration-200">
            <Link to="/contact" className="hover:text-gray-200 transition duration-200">
              Contact
            </Link>
          </li>
          <li className="hover:scale-110 duration-200">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 bg-transparent dark:bg-transparent hover:shadow-lg transition duration-200 flex items-center transform translate-y-[-4px]"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <FiSun className="w-6 h-6 text-yellow-500" />
              ) : (
                <FiMoon className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => alert('Mobile Menu Open')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
