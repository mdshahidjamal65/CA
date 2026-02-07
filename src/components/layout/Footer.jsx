import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* FOOTER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COLUMN 1 – COMPANY INFO */}
          <div>
            <img src={logo} alt="K&A Financial Advisory" className="h-30 mb-4" />
            <p className="text-sm leading-relaxed text-gray-400">
              K&amp;A Financial Advisory is a trusted Chartered Accountancy firm
              providing expert taxation, auditing, compliance, and financial
              advisory services with transparency and professional integrity.
            </p>
          </div>

          {/* COLUMN 2 – SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-[#1D4ED8] inline-block pb-1">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/services/auditing" className="hover:text-[#60A5FA]">
                  Auditing
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/business-taxation" className="hover:text-[#60A5FA]">
                  Business Taxation
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/corporate-compliance" className="hover:text-[#60A5FA]">
                  Corporate Compliance
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/transfer-pricing" className="hover:text-[#60A5FA]">
                  Transfer Pricing
                </NavLink>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 – IMPORTANT LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-[#1D4ED8] inline-block pb-1">
              Important Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/about-us" className="hover:text-[#60A5FA]">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-[#60A5FA]">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="hover:text-[#60A5FA]">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" className="hover:text-[#60A5FA]">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms-conditions" className="hover:text-[#60A5FA]">
                  Terms & Conditions
                </NavLink>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 – CONTACT DETAILS */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-[#1D4ED8] inline-block pb-1">
              Contact Details
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+919241303862" className="hover:text-[#60A5FA]">
                  📞 +91 9241303862
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ayazkh1226@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#60A5FA]"
                >
                  ✉ ayazkh1226@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">
                📍 Office # Patna, Bihar, India
              </li>
            </ul>
          </div>

        </div>

        {/* FOOTER BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} K&amp;A Financial Advisory. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed & Managed by K&amp;A Financial Advisory
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

