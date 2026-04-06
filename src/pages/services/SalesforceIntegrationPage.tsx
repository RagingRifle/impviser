import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, CheckCircle, ArrowRight, Zap, Shield, Clock, TrendingUp } from 'lucide-react';
import sync1 from "../../assets/icons4/sync1.png";
import HeroSection from "../../components/HeroSection";
import {  Repeat, BarChart2 } from 'lucide-react';
import ih from "../../assets/icons4/inthero.png";
import SEO from "../../components/SEO";

const SalesforceIntegrationPage = () => {
  const integrationTypes = [
    {
      title: 'ERP Integration',
      description: 'Connect Salesforce with your ERP systems for unified business processes',
      features: ['Real-time data sync', 'Order management', 'Financial data flow', 'Inventory tracking']
    },
    {
      title: 'Marketing Automation',
      description: 'Integrate marketing platforms with Salesforce for complete lead lifecycle',
      features: ['Lead scoring', 'Campaign tracking', 'Email automation', 'Attribution reporting']
    },
    {
      title: 'E-commerce Integration',
      description: 'Seamless connection between your online store and Salesforce',
      features: ['Customer data sync', 'Order processing', 'Product catalog', 'Support integration']
    },
    {
      title: 'Custom API Development',
      description: 'Build custom integrations for unique business requirements',
      features: ['REST/SOAP APIs', 'Real-time webhooks', 'Batch processing', 'Error handling']
    }
  ];

 const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-blue-800" />, // seccon
    title: 'Real-time Sync',
    description: 'Instant data synchronization across all connected systems'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-800" />, // sync
    title: 'Secure Connections',
    description: 'Enterprise-grade security for all data transfers'
  },
  {
    icon: <Repeat className="w-8 h-8 text-blue-800" />, // flow
    title: 'Automated Workflows',
    description: 'Eliminate manual data entry and reduce errors'
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-blue-800" />, // ins
    title: 'Better Insights',
    description: 'Unified data view for improved business intelligence'
  }
];
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Salesforce Integration Services | Connect Your Systems | Impviser"
        description="Integrate Salesforce with your existing business systems. API integration, middleware, and custom connector development by certified experts."
        canonical="/services/salesforce-integration"
      />
      {/* Hero Section */}
      <HeroSection
  backgroundImage={ih}
  title="Salesforce Integration Services"
  subtitle="Connect Salesforce with your existing business systems for seamless data flow, unified operations, and elimination of data silos. Our expert integration services ensure everything works together effortlessly."
  buttonText="Discuss Integration Needs"
  buttonLink="/contact"
/>

     {/* Integration Types */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title and description */}
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Integration Solutions
      </h2>
      <p className="text-xl lg:text-xl text-gray-600 max-w-5xl mx-auto">
        Comprehensive integration services to seamlessly connect Salesforce with your business ecosystem.
      </p>
    </div>

    {/* Single row of 4 integration cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {integrationTypes.slice(0, 4).map((type, index) => (
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
        Integration Benefits
      </h2>
      <p className="text-xl text-gray-600">
        Transform your business operations with seamless system integration
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
        >
          <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
            {benefit.icon} {/* Render React component directly */}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
          <p className="text-gray-600 text-sm">{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Why Integration Matters Section with Image on Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Salesforce Integration Matters
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                In today's interconnected business world, data silos are a major impediment to efficiency and growth. Integrating Salesforce with your other critical business systems breaks down these barriers, creating a single source of truth for all your customer and operational data. This not only streamlines workflows but also provides comprehensive insights that drive better decision-making.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Seamless integration ensures that your sales, marketing, service, and finance teams are always working with the most current and accurate information. This leads to improved customer experiences, reduced operational costs, and a more agile organization capable of responding quickly to market changes.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              {/* Placeholder for an image that visualizes connected systems or breaking down data silos */}
              <img src={sync1} alt="Connected Systems Integration" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Integration Methodology Section (Text Only) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Robust Integration Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured and secure approach to ensure successful and scalable Salesforce integrations.
            </p>
          </div>
          <div className="space-y-8 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
            <p>
              Our integration methodology is built on best practices to deliver reliable, secure, and scalable solutions. We begin with a thorough Discovery & Planning phase, analyzing your current architecture and defining clear integration requirements and data flow maps. This ensures that every integration serves a strategic purpose and aligns with your business objectives.
            </p>
            <p>
              During Design & Development, we choose the most appropriate integration tools and APIs, whether it's native Salesforce connectors, middleware platforms, or custom API development. We prioritize data security and integrity, implementing robust error handling and monitoring solutions.
            </p>
            <p>
              The Testing & Deployment phase involves rigorous testing scenarios, including unit, integration, and user acceptance testing, to validate functionality and performance. Finally, our Post-Implementation Support ensures your integrated systems operate smoothly, with ongoing maintenance and optimization.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default SalesforceIntegrationPage;