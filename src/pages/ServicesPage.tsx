import React from 'react';
import { Link } from 'react-router-dom';
import serv from "../assets/service.webp";

import { 
  Building2, 
  Shield, 
  Award, 
  Code2, 
  Headphones, 
  Brain, 
  Globe, 
  Smartphone, 
  ArrowRight 
} from 'lucide-react';
import { BsFillPersonCheckFill, BsPersonPlus } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import { AiOutlineCloudSync } from "react-icons/ai";

import ZohoLogo from "../assets/icons2/Zoho.webp";
import HubSpotLogo from "../assets/icons2/Hubspot.webp";
import PowerBILogo from "../assets/icons2/PowerBI.webp";
import TableauLogo from "../assets/icons2/Tableau.webp";
import DataAnalyticsLogo from "../assets/icons2/analytics.png";

// ✅ CRM / Data icons as components
const ZohoIcon = () => <img src={ZohoLogo} alt="Zoho" className="w-5 h-3" />;
const HubSpotIcon = () => <img src={HubSpotLogo} alt="HubSpot" className="w-5 h-5" />;
const PowerBPIcon = () => <img src={PowerBILogo} alt="Power BI" className="w-5 h-5" />;
const TableauIcon = () => <img src={TableauLogo} alt="Tableau" className="w-5 h-5" />;
const AnalyticsIcon = () => <img src={DataAnalyticsLogo} alt="Data & Analytics" className="w-5 h-5" />;

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'Salesforce Services',
      description: 'Comprehensive Salesforce consulting, implementation, and support services',
      services: [
        { name: 'Salesforce Consulting', description: 'Strategic planning and optimization for Salesforce implementations', icon: BsFillPersonCheckFill, link: '/services/salesforce-consulting' },
        { name: 'Salesforce Migration', description: 'Seamless data and system migrations to Salesforce', icon: AiOutlineCloudSync, link: '/services/salesforce-migration' },
        { name: 'Salesforce Integration', description: 'Connect Salesforce with your existing business systems', icon: Building2, link: '/services/salesforce-integration' },
        { name: 'AppExchange App Development', description: 'Custom Salesforce applications for the AppExchange marketplace', icon: FiGift, link: '/services/appexchange-development' },
        { name: 'Salesforce Admin Support', description: 'Ongoing administrative support and system maintenance', icon: Shield, link: '/services/salesforce-admin-support' },
        { name: 'Salesforce CPQ Implementation', description: 'Configure, Price, Quote implementation and optimization', icon: Award, link: '/services/salesforce-cpq-implementation' },
        { name: 'Salesforce Development', description: 'Custom Apex, Lightning, and platform development', icon: Code2, link: '/services/salesforce-development' },
        { name: 'Salesforce Issue Support', description: 'Expert troubleshooting and issue resolution services', icon: Headphones, link: '/services/salesforce-issue-support' },
        { name: 'Hire a Salesforce Expert', description: 'Dedicated Salesforce experts for your projects', icon: BsPersonPlus, link: '/services/hire-salesforce-expert' },
        { name: 'AI-Powered Salesforce Implementation', description: 'Next-generation AI-enhanced Salesforce solutions', icon: Brain, link: '/services/ai-powered-salesforce' },
      ]
    },
    {
      title: 'CRM Services',
      description: 'Expert implementation and support for alternative CRM platforms',
      services: [
        { name: 'Zoho', description: 'Zoho CRM implementation and customization services', icon: ZohoIcon, link: '/services/zoho' },
        { name: 'HubSpot', description: 'HubSpot CRM implementation and marketing automation', icon: HubSpotIcon, link: '/services/hubspot' },
      ]
    },
    {
      title: 'Data & Analytics',
      description: 'Turn your business data into actionable insights with analytics and visualization solutions',
      services: [
        { name: 'Data Analytics', description: 'Data-driven insights and predictive analytics for smarter decisions', icon: AnalyticsIcon, link: '/services/data-analytics' },
        { name: 'Power BI', description: 'Interactive dashboards and reports with Microsoft Power BI', icon: PowerBPIcon, link: '/services/power-bi' },
        { name: 'Tableau', description: 'Advanced data visualization and business intelligence using Tableau', icon: TableauIcon, link: '/services/tableau' },
      ]
    },
    {
      title: 'App Development',
      description: 'Custom application development for web and mobile platforms',
      services: [
        { name: 'Web App Development', description: 'Modern, responsive web applications built for scale', icon: Globe, link: '/services/web-app-development' },
        { name: 'Mobile App Development', description: 'iOS and Android applications for your business needs', icon: Smartphone, link: '/services/mobile-app-development' },
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="py-44 relative bg-gradient-to-br from-blue-50 to-indigo-50"
        style={{
          backgroundImage: `url(${serv})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-100 to-sky-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to={service.link}
                    className="bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-sky-300 group backdrop-blur-md"
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md border border-gray-200 group-hover:border-sky-400 group-hover:shadow-lg transition-all duration-300">
  {typeof service.icon === "function" ? (
    <service.icon className="w-6 h-6 text-sky-600" />
  ) : (
    <service.icon className="w-6 h-6 text-sky-600" />
  )}
</div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sky-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
