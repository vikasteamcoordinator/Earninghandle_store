import React, { useState } from "react";
import { useEffect, useRef } from "react";
import "./Navbar.css";

import { useSelector } from "react-redux";

import logo from "../../Assets/earning.png";
import { Link } from "react-router-dom";

import { RiMenu2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";

import Badge from "@mui/material/Badge";
import { Tooltip } from "@mui/material";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const options = [
    "T-Shirts",
    "Crop Tops",
    "Jeans",
    "Dresses",
    "Shoes",
    "Bags",
    "Watches",
    "Accessories",
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === "") {
      setFilteredOptions([]);
    } else {
      const filtered = options.filter((opt) =>
        opt.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  };

  const handleOptionClick = (option) => {
    setQuery(option);
    setFilteredOptions([]);
    toggleMobileMenu();
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setQuery("");
    setFilteredOptions([]);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // scrolling down
        setShowNavbar(false);
        setShowSearch(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className={`navBar ${showNavbar ? "visible" : "hidden"}`}>
        <div className="logoLinkContainer">
          <div className="logoContainer">
            <Link to="/" onClick={scrollToTop}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="linkContainer">
            <ul>
              <li>
                <Link to="/" onClick={scrollToTop}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/shop" onClick={scrollToTop}>
                  SHOP
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={scrollToTop}>
                  BLOG
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="iconContainer">
          <Tooltip title="Search" arrow>
            <div
              className={`header-search ${
                showSearch ? "header-search-visible" : ""
              }`}
              ref={searchRef}
            >
              {!showSearch && (
                <FiSearch
                  size={22}
                  onClick={toggleSearch}
                  className="icon-search"
                />
              )}

              {showSearch && (
                <form action="#" method="get" className="header-search-wrapper">
                  <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    className="form-control-nav"
                    name="q"
                    id="q"
                    placeholder="Search in...g"
                    required
                  />

                  {filteredOptions.length > 0 && (
                    <div className="search-dropdown">
                      {filteredOptions.map((option, index) => (
                        <Link
                          key={index}
                          onMouseDown={() => handleOptionClick(option)}
                          to="/Shoplist"
                          className="search-suggestion"
                        >
                          {option}
                        </Link>
                      ))}
                    </div>
                  )}
                </form>
              )}
            </div>
          </Tooltip>
          <Tooltip title="Account" arrow>
            <Link to="/account" onClick={scrollToTop}>
              <FaRegUser size={22} />
            </Link>
          </Tooltip>
          <Tooltip title="Cart" arrow>
            <Link to="/cart" onClick={scrollToTop}>
              <Badge
                badgeContent={cart.items.length === 0 ? "0" : cart.items.length}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#FBE7B5",
                    color: "black",
                  },
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <RiShoppingBagLine size={22} />
              </Badge>
            </Link>
          </Tooltip>
          <Tooltip title="Wishlist" arrow>
            <Link to="/wishlist" onClick={scrollToTop}>
              <Badge
                badgeContent={cart.items.length === 0 ? "0" : cart.items.length}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#FBE7B5",
                    color: "black",
                  },
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <FiHeart size={22} />
              </Badge>
            </Link>
          </Tooltip>
          <Tooltip title="Logout" arrow>
            <Link to="/auth" onClick={scrollToTop}>
              <GiExitDoor size={30} />
            </Link>
          </Tooltip>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav>
        <div className={`mobile-nav ${showNavbar ? "visible" : "hidden"}`}>
          {mobileMenuOpen ? (
            <MdOutlineClose size={22} onClick={toggleMobileMenu} />
          ) : (
            <RiMenu2Line size={22} onClick={toggleMobileMenu} />
          )}
          <div className="logoContainer">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <Link to="/cart">
            <Badge
              badgeContent={cart.items.length === 0 ? "0" : cart.items.length}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#FBE7B5",
                  color: "black",
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <RiShoppingBagLine size={22} color="black" />
            </Badge>
          </Link>
        </div>
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menuTop">
            <div className="mobile-menuSearchBar">
              <div className="">
                <div className={`w-100 header-search header-search-visible`}>
                  <form
                    action="#"
                    method="get"
                    className="header-search-wrapper"
                  >
                    <input
                      type="text"
                      value={query}
                      onChange={handleSearch}
                      className="form-control-nav"
                      name="q"
                      id="q"
                      placeholder="Search in...g"
                      required
                    />

                    {filteredOptions.length > 0 && (
                      <div className="search-dropdown">
                        {filteredOptions.map((option, index) => (
                          <Link
                            key={index}
                            onMouseDown={() => handleOptionClick(option)}
                            to="/shop"
                            className="search-suggestion"
                          >
                            {option}
                          </Link>
                        ))}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
            <div className="mobile-menuList">
              <ul>
                <li>
                  <Link to="/" onClick={toggleMobileMenu}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/shop" onClick={toggleMobileMenu}>
                    SHOP
                  </Link>
                </li>
                <li>
                  <Link to="/blog" onClick={toggleMobileMenu}>
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={toggleMobileMenu}>
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={toggleMobileMenu}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mobile-menuFooter">
            <div className="mobile-menuFooterLogin">
              <Link to="/account" onClick={toggleMobileMenu}>
                <FaRegUser />
                <p>My Account</p>
              </Link>
            </div>
            <div className="mobile-menuFooterLogin">
              <Link to="/auth" onClick={toggleMobileMenu}>
                <GiExitDoor />
                <p>Logout</p>
              </Link>
            </div>
            <div className="mobile-menuSocial_links">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
