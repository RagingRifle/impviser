import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

import AX from "../../assets/icons4/ax.png";
import AP from "../../assets/icons4/apphero.png";
import HeroSection from "../../components/HeroSection";
import proven from "../../assets/icons4/proven-expertise.png";
import security from "../../assets/icons4/security-first.png";
import support from "../../assets/icons4/end-to-end-support.png";
import { DollarSign, Globe,Layers } from 'lucide-react';
import SEO from "../../components/SEO";

const AppExchangePage = () => {
  const appTypes = [
    {
      title: 'Business Process Apps',
      description: 'Custom applications that automate and optimize business workflows',
      features: ['Workflow automation',  'Process builder', 'Approval processes']
    },
    {
      title: 'Industry Solutions',
      description: 'Specialized applications for specific industry requirements',
      features: ['Industry templates', 'Compliance features', 'Sector-specific workflows', 'Regulatory reporting']
    },
    {
      title: 'Integration Apps',
      description: 'Applications that connect Salesforce with external systems',
      features: ['API connectors', 'Data synchronization', 'Real-time updates', 'Error handling']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Advanced reporting and analytics applications',
      features: ['Custom dashboards', 'Advanced analytics', 'Data visualization', 'Automated reports']
    }
  ];

 const benefits = [
  {
    icon: <DollarSign className="w-8 h-8 text-blue-800" />,
    title: 'Revenue Generation',
    description: 'Monetize your Salesforce expertise through AppExchange sales'
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-800" />,
    title: 'Global Reach',
    description: 'Access to millions of Salesforce users worldwide'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-800" />,
    title: 'Security Reviewed',
    description: 'Salesforce security review ensures enterprise-grade security'
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-800" />,
    title: 'Scalable Architecture',
    description: 'Multi-tenant architecture that scales with customer growth'
  }
];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="AppExchange App Development | Custom Salesforce Apps | Impviser"
        description="Build and publish custom Salesforce AppExchange applications. ISV partner development and marketplace listing by Impviser."
        canonical="/services/appexchange-development"
      />
      {/* Hero Section */}
      <HeroSection
        backgroundImage={AP}
        title="AppExchange App Development"
        subtitle="Build and publish custom Salesforce applications on the AppExchange marketplace. From concept to security review, we handle the complete development lifecycle."
        buttonText="Build Your App"
        buttonLink="/contact"
      />

      {/* Types of Apps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Types of Apps We Build
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto">
              Custom Salesforce applications designed for the AppExchange marketplace. We craft solutions tailored to your business, ensuring scalability, efficiency, and seamless integration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.slice(0, 4).map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <p className="font-semibold text-gray-900 text-lg mb-3">{type.title}</p>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="space-y-2 text-gray-700 text-sm">
                  {type.features.map((feature, featureIndex) => (
                    <p key={featureIndex}>{feature}</p>
                  ))}
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
              AppExchange Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why develop for the Salesforce AppExchange marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
  {benefit.icon} {/* Directly render the React icon */}
</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our App Development Process
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                Building a successful AppExchange application requires a meticulous and structured approach. We begin with a Discovery and Ideation phase to refine your app concept, define its features, and create a clear roadmap. The Design and Development phase follows, where our certified developers build a robust, scalable, and secure application using Salesforce best practices.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                A critical part of our process is the Security Review Preparation, where we ensure your app meets all of Salesforce's stringent security and technical requirements. Finally, we assist with the Publishing and Marketing of your app, helping you get it live on the AppExchange and ready for customers.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src={AX} alt="App Development Process" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Impviser Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Impviser
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Our experienced team understands the Salesforce ecosystem and the AppExchange marketplace, helping organizations implement scalable CRM solutions and integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-18 h-16 flex items-center justify-center mx-auto mb-4">
                <img src={proven} alt="Proven Expertise" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Proven Expertise</h3>
              <p className="text-gray-600 text-sm">
                Our developers have a deep understanding of the Salesforce platform and AppExchange requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-18 h-16 flex items-center justify-center mx-auto mb-4">
                <img src={security} alt="Security First Approach" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Security First Approach</h3>
              <p className="text-gray-600 text-sm">
                We build apps with security in mind, ensuring a smooth and successful security review process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-18 h-16 flex items-center justify-center mx-auto mb-4">
                <img src={support} alt="End-to-End Support" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">End-to-End Support</h3>
              <p className="text-gray-600 text-sm">
                We guide you through the entire lifecycle, from initial idea to app publication and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppExchangePage;
