import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import Logo from "../assets/Imviser_Logo.png";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
  const salesforceServices = [
    { name: "Salesforce Consulting", link: "/services/salesforce-consulting" },
    { name: "Salesforce Development", link: "/services/salesforce-development" },
    { name: "Salesforce Migration", link: "/services/salesforce-migration" },
    { name: "Salesforce Integration", link: "/services/salesforce-integration" },
    { name: "Salesforce CPQ", link: "/services/salesforce-cpq-implementation" },
    { name: "AppExchange Development", link: "/services/appexchange-development" },
    { name: "Salesforce Admin Support", link: "/services/salesforce-admin-support" },
    { name: "Salesforce Issue Support", link: "/services/salesforce-issue-support" },
    { name: "Hire Salesforce Expert", link: "/services/hire-salesforce-expert" },
    { name: "AI-Powered Salesforce", link: "/services/ai-powered-salesforce" },
  ];

  // Show first 5 or all


const Footer = () => {
  
const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? salesforceServices : salesforceServices.slice(0, 5);
  return (
    <footer className="bg-white text-gray-600">
      <div className="max-w-8xl mx-auto px-2 sm:px-8 lg:px-6 py-16 ml-6 mr-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={Logo} 
                alt="Logo" 
                className="h-auto w-52" 
              />
            </div>
            <p className="leading-relaxed text-gray-600">
              Empowering businesses through innovative technology solutions and expert consulting services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/impviser-technologies/people/?viewAsMember=true" className="text-gray-500 hover:text-[#223794] transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/impviser?t=D-TEh7tEMTUxVkP6CCRjag&s=08" className="text-gray-500 hover:text-[#223794] transition-colors duration-200">
                <RiTwitterXLine className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/impviserofficial?igsh=cGlrZ28yc3Rxdmxh" className="text-gray-500 hover:text-[#223794] transition-colors duration-200">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

           {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#223794]">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#223794] transition-colors duration-200">About Us</Link></li>
              <li><Link to="/process" className="hover:text-[#223794] transition-colors duration-200">Our Process</Link></li>
              <li><Link to="/certifications" className="hover:text-[#223794] transition-colors duration-200">Certifications</Link></li>
              <li><Link to="/careers" className="hover:text-[#223794] transition-colors duration-200">Careers</Link></li>
              <li><Link to="/customer-stories" className="hover:text-[#223794] transition-colors duration-200">Customer Stories</Link></li>
            </ul>
          </div>

          {/* Services */}
        <div>
      <h3 className="text-lg font-semibold mb-4 text-[#223794]">Salesforce</h3>
      <ul className="space-y-2">
        {visibleServices.map((service, index) => (
          <li key={index}>
            <Link 
              to={service.link} 
              className="hover:text-[#223794] transition-colors duration-200"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* View All / Show Less button */}
      {salesforceServices.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-3 text-[#223794] font-medium hover:underline"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      )}
    </div>


<div>
  {/* Other Services */}
  <h3 className="text-lg font-semibold mb-4 text-[#223794]">Other Services</h3>
  <ul className="space-y-2">
    <li><Link to="/services/data-analytics" className="hover:text-[#223794] transition-colors duration-200">Data & Analytics</Link></li>
    <li><Link to="/services/web-app-development" className="hover:text-[#223794] transition-colors duration-200">Web Development</Link></li>
    <li><Link to="/services/mobile-app-development" className="hover:text-[#223794] transition-colors duration-200">Mobile App Development</Link></li>
    <li><Link to="/services/zoho" className="hover:text-[#223794] transition-colors duration-200">Zoho CRM</Link></li>
    <li><Link to="/services/hubspot" className="hover:text-[#223794] transition-colors duration-200">HubSpot CRM</Link></li>
  </ul>
</div>

<div> <h3 className="text-lg font-semibold mb-4 text-[#223794]">Resources</h3>
 <ul className="space-y-2"> 
  <li>
    <Link to="/insights" className="hover:text-[#223794] transition-colors duration-200">Insights</Link>
  </li> 
  <li>
    <Link to="/industries" className="hover:text-[#223794] transition-colors duration-200">Industries</Link></li>
   
   </ul> 
   </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#223794]">Contact</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#223794]" />
                <span className="hover:text-[#223794] transition-all">info@impviser.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#223794]" />
                <span className="hover:text-[#223794] transition-all">+91 93630 39754</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-12 h-12 text-[#223794] mt-1" />
                <span className="hover:text-[#223794] transition-all">
                  No-9/3604-17, Third Floor, KN NEST, Lalgudi Road, No 1 Tollgate,<br />
                  Trichy, Tamil Nadu – 621 216
                </span>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-6 bg-[#223794] text-white px-6 py-2 rounded-md font-medium hover:bg-[#223794]/90 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 Impviser. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-[#29ec48] text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#29ec48] text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-[#29ec48] text-sm transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
