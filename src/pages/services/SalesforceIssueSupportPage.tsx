import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, CheckCircle, ArrowRight, AlertTriangle,Users } from 'lucide-react';
import time from "../../assets/icons4/time.png";
import exp from "../../assets/icons4/exp.png";
import sec from "../../assets/icons4/seccon.png";
import iss from "../../assets/icons4/iss.png";
import fix from "../../assets/icons4/fix.png";
import { Clock, UserCheck, Shield, AlertCircle } from 'lucide-react';
import { FaRegLightbulb, FaRocket, FaCogs, FaCheckCircle } from 'react-icons/fa';
import HeroSection from "../../components/HeroSection";
import ch from "../../assets/icons5/support-service.png";
import SEO from "../../components/SEO";

const SalesforceIssueSupportPage = () => {
   const howItWorks = [
  { icon: <FaRegLightbulb size={24} />, title: 'Idea Generation', description: 'Brainstorm and conceptualize ideas' },
  { icon: <FaRocket size={24} />, title: 'Launch', description: 'Deploy your product quickly and efficiently' },
  { icon: <FaCogs size={24} />, title: 'Optimize', description: 'Fine-tune processes and improve performance' },
  { icon: <FaCheckCircle size={24} />, title: 'Achieve', description: 'Reach your goals with measurable results' },
];
  const supportPlans = [
    {
      title: "Basic",
      price: "$499/mo",
      features: ["Email support", "Issue diagnosis", "Monthly health check"]
    },
    {
      title: "Standard",
      price: "$999/mo",
      features: ["Phone + Email support", "Bug fixes", "Performance optimization", "Quarterly review"]
    },
    {
      title: "Premium",
      price: "$1999/mo",
      features: ["24/7 emergency support", "Dedicated consultant", "Custom enhancements", "Monthly strategy sessions"]
    }
  ];

  const supportTypes = [
    {
      title: 'Critical Issue Resolution',
      description: 'Immediate response for business-critical Salesforce issues',
      features: ['24/7 emergency support', 'Root cause analysis', 'Rapid resolution', 'Prevention strategies']
    },
    {
      title: 'Performance Optimization',
      description: 'Identify and resolve performance bottlenecks',
      features: ['Performance audits', 'Query optimization', 'Data cleanup', 'System tuning']
    },
    {
      title: 'Bug Fixes & Troubleshooting',
      description: 'Expert diagnosis and resolution of system issues',
      features: ['Code debugging', 'Configuration fixes', 'Data integrity issues', 'User access problems']
    },
    {
      title: 'Preventive Maintenance',
      description: 'Proactive monitoring and maintenance to prevent issues',
      features: ['Health checks', 'Monitoring setup', 'Best practices review', 'Regular maintenance']
    }
  ];

 const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-blue-800" />,
    title: 'Rapid Response',
    description: 'Average 2-hour response time for critical issues'
  },
  {
    icon: <UserCheck className="w-8 h-8 text-blue-800" />,
    title: 'Expert Resolution',
    description: 'Certified experts with deep troubleshooting experience'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-800" />,
    title: 'Minimal Disruption',
    description: 'Quick fixes that keep your business running smoothly'
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-blue-800" />,
    title: 'Issue Prevention',
    description: 'Proactive monitoring to prevent future problems'
  }
];
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Salesforce Issue Support & Troubleshooting | Impviser"
        description="Expert Salesforce troubleshooting and issue resolution. Fast turnaround on bugs, performance issues, and system errors by Impviser."
        canonical="/services/salesforce-issue-support"
      />

      <HeroSection
        backgroundImage={ch}
        title="Salesforce Issue Support Services"
        subtitle="Expert troubleshooting and issue resolution for your Salesforce org. Get rapid support when problems arise and proactive monitoring to prevent them."
        buttonText="Get Issue Support"
        buttonLink="/contact"
      />
   

      {/* Support Types */}
   <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="mb-16 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-sky-700 mb-4">
        Issue Support Services
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Reliable Salesforce support designed to resolve issues quickly and keep your system running smoothly.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {supportTypes.map((type, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
        >
          {/* Accent bar */}
          <div className="h-2 w-full bg-gradient-to-r from-sky-400 to-sky-600 rounded-t-lg"></div>

          <div className="p-8">
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {type.title}
            </h3>
            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {type.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Support Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why choose our Salesforce issue support services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
  {benefit.icon}
</div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Proactive & Strategic Approach Section with Image Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Proactive and Strategic Approach
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                We believe that great support is proactive, not just reactive. Our methodology is designed to anticipate your needs and identify opportunities for improvement before issues arise. We regularly monitor your system's health, analyze performance metrics, and provide strategic recommendations to enhance your org's efficiency and usability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Our team works closely with you to understand your evolving business goals. We're not just here to fix problems; we're here to help you get more out of your Salesforce platform, building custom reports, automating tedious tasks, and ensuring user adoption remains high.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
              src={fix} 
              alt="An individual working on a computer screen to resolve an issue" 
              className="w-full h-96 object-contain rounded-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
    <section className="py-20 bg-sky-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-sky-900 mb-4">
        How Our Support Process Works
      </h2>
      <p className="text-xl text-sky-700 max-w-3xl mx-auto">
        Simple steps to get the help you need, when you need it.
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {howItWorks.map((step, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-sky-100 hover:shadow-lg transition-shadow"
        >
          {/* Step Icon */}
          <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4 text-sky-600">
            {step.icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-sky-900 mb-2">{step.title}</h3>

          {/* Description */}
          <p className="text-sm text-sky-700">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      
    </div>
  );
};

export default SalesforceIssueSupportPage;