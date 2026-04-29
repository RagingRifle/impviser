import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { BsFillPersonCheckFill } from "react-icons/bs";
import Logo from "../assets/impviser_logo.png";
import { FiGift } from "react-icons/fi";
import { BsPersonPlus } from "react-icons/bs";
import { AiOutlineCloudSync } from "react-icons/ai";
import {
  Building2,
  Shield,
  Award,
  Code2,
  Headphones,
  Brain,
  Globe,
  Smartphone,
} from "lucide-react";

import ZohoLogo from "../../src/assets/icons2/Zoho.webp";
import HubSpotLogo from "../assets/icons2/Hubspot.webp";
import PowerBILogo from "../assets/icons2/PowerBI.webp";
import TableauLogo from "../assets/icons2/Tableau.webp";
import DataAnalyticsLogo from "../assets/icons2/analytics.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  // Ref for dropdown timer to fix flicker in desktop
  const dropdownTimeoutRef = useRef(null);

  // Icon components
  const ZohoIcon = () => <img src={ZohoLogo} alt="Zoho" className="w-5 h-3" />;
  const HubSpotIcon = () => (
    <img src={HubSpotLogo} alt="HubSpot" className="w-5 h-5" />
  );
  const PowerBPIcon = () => (
    <img src={PowerBILogo} alt="Power BI" className="w-5 h-5" />
  );
  const TableauIcon = () => (
    <img src={TableauLogo} alt="Tableau" className="w-5 h-5" />
  );
  const AnalyticsIcon = () => (
    <img src={DataAnalyticsLogo} alt="Data & Analytics" className="w-5 h-5" />
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceCategories = [
    {
      title: "Salesforce",
      services: [
        { name: "Salesforce Consulting", link: "/services/salesforce-consulting", icon: BsFillPersonCheckFill },
        { name: "Salesforce Migration", link: "/services/salesforce-migration", icon: AiOutlineCloudSync },
        { name: "Salesforce Integration", link: "/services/salesforce-integration", icon: Building2 },
        { name: "AppExchange App Development", link: "/services/appexchange-development", icon: FiGift },
        { name: "Salesforce Admin Support", link: "/services/salesforce-admin-support", icon: Shield },
        { name: "Salesforce CPQ Implementation", link: "/services/salesforce-cpq-implementation", icon: Award },
        { name: "Salesforce Development", link: "/services/salesforce-development", icon: Code2 },
        { name: "Salesforce Issue Support", link: "/services/salesforce-issue-support", icon: Headphones },
        { name: "Hire a Salesforce Expert", link: "/services/hire-salesforce-expert", icon: BsPersonPlus },
        { name: "AI-Powered Salesforce Implementation", link: "/services/ai-powered-salesforce", icon: Brain },
      ],
    },
    {
      title: "CRM",
      services: [
        { name: "Zoho", link: "/services/zoho", icon: ZohoIcon },
        { name: "HubSpot", link: "/services/hubspot", icon: HubSpotIcon },
      ],
    },
    {
      title: "Data & Analytics",
      services: [
        { name: "Data & Analytics Solutions", link: "/services/data-analytics", icon: AnalyticsIcon },
        { name: "Power BI", link: "/services/power-bi", icon: PowerBPIcon },
        { name: "Tableau", link: "/services/tableau", icon: TableauIcon },
      ],
    },
    {
      title: "App Development",
      services: [
        { name: "Web App Development", link: "/services/web-app-development", icon: Globe },
        { name: "Mobile App Development", link: "/services/mobile-app-development", icon: Smartphone },
      ],
    },
  ];

  // Desktop dropdown hover handlers with timeout to reduce flicker
  const handleServicesMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const handleBookNow = () => {
    setShowModal(true);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="w-full bg-[#223794] text-white text-sm py-2 flex justify-center items-center">
  <p className="font-medium custom-pulse">Implement Vision. Empower Business.</p>
</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={Logo} alt="Impviser Logo" className="h-auto w-44" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }].map(
                (link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative font-medium transition-transform duration-200 hover:scale-105
                      ${
                        location.pathname === link.path
                          ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#223794]"
                          : ""
                      } text-gray-700`}
                  >
                    {link.name}
                  </Link>
                )
              )}

              {/* Services Dropdown for Desktop */}
              <div
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className={`relative flex items-center space-x-1 font-medium transition-transform duration-200 hover:scale-105
                    ${
                      location.pathname.startsWith("/services")
                        ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#223794]"
                        : ""
                    } text-gray-700 cursor-pointer`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    } text-gray-500`}
                  />
                </button>

                {isServicesOpen && (
                  <div
                    className="absolute top-full left-0 -ml-60 mt-2 w-[900px] bg-white text-gray-900 rounded-xl shadow-xl border border-gray-200 py-6 px-8 z-50 min-h-[300px]"
                  >
                  <div className="grid grid-cols-3 gap-8">

                      {serviceCategories.map((category) => (
                        <div key={category.title}>
                          <h4 className="text-[#1798c1] font-semibold mb-3">
                            {category.title}
                          </h4>
                          <ul className="space-y-2">
                            {category.services.map((service) => (
                              <li key={service.name}>
                                <Link
                                  to={service.link}
                                  className="hover:text-[#1798c1] flex items-center gap-2"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <service.icon size={18} className="text-gray-900" /> {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Other Links */}
              {[
                { name: "Industries", path: "/industries" },
                { name: "Process", path: "/process" },
                { name: "Insights", path: "/insights" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-medium transition-transform duration-200 hover:scale-105
                    ${
                      location.pathname === link.path
                        ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#223794]"
                        : ""
                    } text-gray-700`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Book Now Button */}
              <button
                onClick={handleBookNow}
                aria-label="Book a meeting with us"
                className="px-6 py-2 rounded-lg font-medium bg-[#223794] text-white hover:bg-[#121a3e] transition-all"
              >
                Book Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div 
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 rounded-b-lg p-4 flex flex-col items-center text-center"
            >
              {/* Mobile Nav Links */}
              {["Home", "About", "Services", "Industries", "Process", "Insights"].map((link) => {
                if (link === "Services") {
                  return (
                    <div key="Services" className="mb-2 w-full flex flex-col items-left">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex items-center justify-center w-full font-medium text-gray-700 text-center"
                      >
                        <span>Services</span>
                        <ChevronDown
                          size={18}
                          className={`ml-2 transition-transform ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          } text-gray-500`}
                          style={{ minWidth: 18 }}
                        />
                      </button>
                      {isMobileServicesOpen && (
  <div className="mt-2 bg-gray-100 rounded-lg shadow-md p-4 max-h-72 overflow-y-auto border border-gray-300 w-full flex flex-col items-center">
    {serviceCategories.map((category) => (
      <div key={category.title} className="mb-4 last:mb-0 w-full flex flex-col items-center">
        {/* ↓ Decreased font size for category title */}
        <h4 className="font-semibold mb-2 text-gray-800 text-xs">{category.title}</h4>
        <ul className="w-full flex flex-col items-center">
          {category.services.map((service) => (
            <li key={service.name} className="w-full">
              <Link
                to={service.link}
                className="block py-1 text-gray-700 hover:text-gray-900 transition-colors flex items-center justify-center text-xs"
                onClick={() => setIsMenuOpen(false)}
              >
                <service.icon size={14} className="inline-block mr-1 text-gray-700" /> 
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)}

                    </div>
                  );
                }
                return (
                  <Link
                    key={link}
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="block text-gray-700 hover:text-[#1798c1] font-medium mb-2 w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                className="block bg-[#1798c1] text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-[#1582bb] mt-2 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>

              <button
                onClick={() => {
                  handleBookNow();
                  setIsMenuOpen(false);
                }}
                aria-label="Book a meeting with us"
                className="block bg-[#223794] text-white px-4 py-2 rounded-lg font-medium text-center w-full hover:bg-[#121a3e] transition-all mt-2"
              >
                Book Now
              </button>
            </div>
          )}
        </div>

        {/* 🔹 Sub Navbar with Pulsing Title */}

      </header>

      {/* Popup Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2"
          onClick={() => setShowModal(false)}
        >
          {/* Close Button Outside */}
          <button
            className="absolute top-6 right-6 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl z-50"
            onClick={() => setShowModal(false)}
          >
            ×
          </button>

          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-[800px] h-[600px] max-h-[90vh] relative overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side - Logo and Info */}
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-6">
              <img
                src={Logo}
                alt="Logo"
                className="w-40 md:w-64 mb-4"
              />
              <h2 className="text-lg md:text-xl font-semibold text-gray-700 text-center">
                Empower with Salesforce – Discussion
              </h2>
              <p className="text-xs md:text-sm text-gray-500 text-center mt-2">
                We value your time. You will be very happy about it.
              </p>
            </div>
            {/* Right Side - Calendly Embed */}
            <div className="md:w-1/2 w-full flex-1 h-full">
              <iframe
                src="https://calendly.com/ramsfdcnetwork/30min?hide_event_type_details=1&hide_landing_page_details=1&hide_gdpr_banner=1"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                title="Book a Meeting"
                className="rounded-b-xl md:rounded-b-none md:rounded-r-xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
