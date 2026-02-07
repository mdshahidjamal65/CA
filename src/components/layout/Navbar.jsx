import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  // MOBILE STATES
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  // SAFE MOBILE RESET
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServices(false);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#1D4ED8] font-semibold"
      : "text-gray-800 hover:text-[#1D4ED8]";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="K&A Financial Advisory"
              className="h-15 w-auto object-contain"
            />
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 relative">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about-us" className={linkClass}>About Us</NavLink>

            {/* SERVICES (CLICK + HOVER) */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              {/* CLICK → /services */}
              <NavLink
                to="/services"
                className="flex items-center gap-1 text-gray-800 hover:text-[#1D4ED8]"
              >
                Services <span className="text-sm">▾</span>
              </NavLink>

              {/* HOVER → DROPDOWN */}
              {servicesOpen && (
                <div className="absolute left-0 top-full w-60 rounded-md bg-white shadow-lg ">
                  <NavLink
                    to="/services/foreign-investmet-approval"
                    className="block px-4 py-2 hover:bg-blue-50"
                  >
                    Foreign Investment Approval
                  </NavLink>
                  <NavLink
                    to="/services/auditing"
                    className="block px-4 py-2 hover:bg-blue-50"
                  >
                    Auditing
                  </NavLink>
                  <NavLink
                    to="/services/corporate-compliance"
                    className="block px-4 py-2 hover:bg-blue-50"
                  >
                    Corporate Compliance
                  </NavLink>
                  <NavLink
                    to="/services/expatriate-taxation"
                    className="block px-4 py-2 hover:bg-blue-50"
                  >
                    Expatriate Taxation
                  </NavLink>
                  <NavLink
                    to="/services/business-taxation"
                    className="block px-4 py-2 hover:bg-blue-50"
                  >
                    Business Taxation
                  </NavLink>
                  <NavLink
                    to="/services/transfer-pricing"
                    className="block px-4 py-2 hover:bg-blue-50"  >
                    Transfer Pricing
                    </NavLink>
                  <NavLink
                    to="/services/business-setup"
                    className="block px-4 py-2 hover:bg-blue-50"
                  >
                    Business Setup
                  </NavLink>
                  <NavLink
                    to="/services/litigation"
                    className="block px-4 py-2 hover:bg-blue-50"
                  >
                    Litigation
                  </NavLink>
                  <NavLink
                    to="/services/virtual-cfo"
                    className="block px-4 py-2 hover:bg-blue-50"
                  >
                    Virtual CFO
                  </NavLink>
                </div>
              )}
            </div>

            
            <NavLink to="/blogs" className={linkClass}>Blogs</NavLink>
            <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>

            <a
              href="tel:+919241303862"
              className="bg-[#1D4ED8] text-white px-5 py-2 rounded-md hover:opacity-90 transition"
            >
              Call Now
            </a>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">

            <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/about-us" onClick={closeMobileMenu}>About Us</NavLink>
            <NavLink to="/blogs" onClick={closeMobileMenu}>Blogs</NavLink>

            {/* MOBILE SERVICES */}
<div className="flex items-center justify-between">
  {/* TEXT → REDIRECT */}
  <NavLink
    to="/services"
    onClick={closeMobileMenu}
    className="font-medium"
  >
    Services
  </NavLink>

  {/* ARROW → TOGGLE */}
  <button
    onClick={() => setMobileServices(!mobileServices)}
    className="text-xl px-2"
    aria-label="Toggle services menu"
  >
    ▾
  </button>
</div>

{mobileServices && (
  <div className="ml-4 mt-2 flex flex-col gap-2">
    <NavLink to="/services/foreign-investmet-approval" onClick={closeMobileMenu}>
      Foreign Investment Approval
    </NavLink>
    <NavLink to="/services/auditing" onClick={closeMobileMenu}>
      Auditing
    </NavLink>
    <NavLink to="/services/corporate-compliance" onClick={closeMobileMenu}>
      Corporate Compliance
    </NavLink>
    <NavLink to="/services/expatriate-taxation" onClick={closeMobileMenu}>
      Expatriate Taxation
    </NavLink>
    <NavLink to="/services/business-taxation" onClick={closeMobileMenu}>
      Business Taxation
    </NavLink>
    <NavLink to="/services/transfer-pricing" onClick={closeMobileMenu}>
      Transfer Pricing
    </NavLink>
    <NavLink to="/services/business-setup" onClick={closeMobileMenu}>
      Business Setup
    </NavLink>
    <NavLink to="/services/litigation" onClick={closeMobileMenu}>
      Litigation
    </NavLink>
    <NavLink to="/services/virtual-cfo" onClick={closeMobileMenu}>
      Virtual CFO
    </NavLink>
  </div>
)}


            <NavLink to="/faq" onClick={closeMobileMenu}>FAQ</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu}>Contact Us</NavLink>

            <a
              href="tel:+919241303862"
              onClick={closeMobileMenu}
              className="mt-3 bg-[#1D4ED8] text-white text-center py-2 rounded-md font-medium"
            >
              Call Now
            </a>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
