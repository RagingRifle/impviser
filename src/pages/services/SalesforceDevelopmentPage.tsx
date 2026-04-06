import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiLayers, FiCode, FiCloud } from "react-icons/fi";
import { Zap, Shield, Users, Scale } from 'lucide-react';
// Icons & Assets
import fast from "../../assets/icons4/fast.png";
import risk from "../../assets/icons4/risk.png";
import user from "../../assets/icons4/user.png";
import scale from "../../assets/icons4/scale.png";
import wcu from "../../assets/icons4/wcu.png";
import per from "../../assets/icons4/performance.png";
import di from "../../assets/icons4/datint.png";
import mig from "../../assets/icons4/mig.png";
import dih from "../../assets/icons4/dih.png";
import sw from "../../assets/icons5/software.png";
import cd from "../../assets/icons5/cloud.png";
import ma from "../../assets/icons5/mobapp.png";
import wd from "../../assets/icons5/wd.png";

import HeroSection from "../../components/HeroSection";
import SEO from "../../components/SEO";

const SalesforceDevelopmentPage = () => {
 const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-blue-800" />,
    title: 'Enhanced Performance',
    description: 'Optimized code that runs efficiently at enterprise scale'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-800" />,
    title: 'Security First',
    description: 'Built with Salesforce security best practices and guidelines'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-800" />,
    title: 'User Experience',
    description: 'Intuitive interfaces that drive user adoption and productivity'
  },
  {
    icon: <Scale className="w-8 h-8 text-blue-800" />,
    title: 'Scalable Solutions',
    description: 'Architecture designed to grow with your business needs'
  }
];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Custom Salesforce Development | Apex & Lightning | Impviser"
        description="Custom Salesforce development services including Apex, Lightning Web Components, and platform development for scalable business solutions."
        canonical="/services/salesforce-development"
      />
      {/* Hero Section */}
      <HeroSection
        backgroundImage={dih}
        title="Salesforce Development Services"
        subtitle="Custom Salesforce development including Apex, Lightning components, Visualforce, and API development. Build powerful solutions that extend Salesforce capabilities."
        buttonText="Start Development Project"
        buttonLink="/contact"
      />

      {/* Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver high-quality development services to transform your ideas into reality.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              
              { icon: cd, title: "Cloud Solutions", desc: "Secure cloud architecture and deployment." },
              { icon: wd, title: "Web Development", desc: "Modern, responsive websites tailored to your business." },
              { icon: ma, title: "Mobile Apps", desc: "Native & cross-platform apps for iOS and Android." },
              { icon: sw, title: "Custom Software", desc: "Tailored software solutions to scale your business." }
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain border-2 border-blue-500 rounded-lg p-2"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Development Process */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A clear, proven workflow to deliver high-quality, scalable solutions.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-10 h-px bg-gray-300 z-0"></div>
              <div className="relative flex justify-between items-start z-10">
                {[
                  { title: "Discovery & Strategy", desc: "We align on goals, business needs, and technical requirements.", icon: FiSearch },
                  { title: "Solution Design", desc: "We design a scalable architecture and outline integrations.", icon: FiLayers },
                  { title: "Build & Test", desc: "Our certified devs build iteratively with rigorous testing.", icon: FiCode },
                  { title: "Deployment & Support", desc: "Smooth go-live plus long-term support for evolving needs.", icon: FiCloud }
                ].map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="flex-1 px-4 text-center">
                      <div className="relative inline-block">
                        <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-800 shadow-md flex items-center justify-center mx-auto mb-4 relative z-10">
                          <Icon className="w-6 h-6 text-blue-800" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <div className="relative border-l border-gray-300 max-w-md mx-auto">
              {[
                { title: "Discovery & Strategy", desc: "We align on goals, business needs, and technical requirements.", icon: FiSearch },
                { title: "Solution Design", desc: "We design a scalable architecture and outline integrations.", icon: FiLayers },
                { title: "Build & Test", desc: "Our certified devs build iteratively with rigorous testing.", icon: FiCode },
                { title: "Deployment & Support", desc: "Smooth go-live plus long-term support for evolving needs.", icon: FiCloud }
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="mb-10 ml-6">
                    <div className="absolute -left-3 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white z-10">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-20 bg-white bg-[url('/grid-pattern.svg')] bg-top bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Team?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our commitment to quality, security, and collaboration sets us apart.
            </p>
            <ul className="space-y-6 text-gray-600">
              <li>Experienced, certified developers</li>
              <li>Transparent processes & communication</li>
              <li>Solutions designed for scalability</li>
              <li>Post-launch support & maintenance</li>
            </ul>
          </div>
          <div>
            <img
              src={wcu}
              alt="Why Choose Us"
              className="rounded-2xl shadow-lg w-full border-4 border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Development Benefits</h2>
            <p className="text-xl text-gray-600">Why choose our Salesforce development services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
  {benefit.icon} {/* Directly render the React component */}
</div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Development Expertise 
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Development Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Deep expertise across the Salesforce ecosystem to deliver solutions that scale.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: mig, title: "Platform Migration", desc: "Smooth transition from legacy systems to Salesforce." },
              { icon: di, title: "Integration Services", desc: "Seamlessly connect Salesforce with business systems." },
              { icon: per, title: "Continuous Improvement", desc: "Enhancements and support to stay ahead of change." }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition"
              >
                <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 object-contain border-2 border-blue-500 rounded-lg p-2"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default SalesforceDevelopmentPage;
