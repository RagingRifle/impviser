import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, Clock, Shield,Scale } from 'lucide-react';

import ch from "../../assets/icons5/cpqhero.jpg";
import HeroSection from "../../components/HeroSection";
import SEO from "../../components/SEO";

const SalesforceCPQPage = () => {
  const cpqFeatures = [
    {
      title: 'Product Configuration',
      description: 'Complex product and service configuration management',
      features: ['Product bundles', 'Option constraints', 'Configuration rules', 'Guided selling']
    },
    {
      title: 'Dynamic Pricing',
      description: 'Automated pricing with discounts and approval workflows',
      features: ['Price books', 'Discount schedules', 'Approval processes', 'Volume pricing']
    },
    {
      title: 'Quote Generation',
      description: 'Professional quote documents with automated generation',
      features: ['Quote templates', 'Document generation', 'E-signature integration', 'Quote analytics']
    },
    {
      title: 'Contract Management',
      description: 'End-to-end contract lifecycle management',
      features: ['Contract templates', 'Amendment tracking', 'Renewal management', 'Compliance monitoring']
    }
  ];

  const benefits = [
  {
    icon: <Scale className="w-8 h-8 text-blue-800" />,
    title: '40% Faster Quotes',
    description: 'Reduce quote generation time with automation'
  },
  {
    icon: <Calculator className="w-8 h-8 text-blue-800" />,
    title: '99% Pricing Accuracy',
    description: 'Eliminate pricing errors with automated calculations'
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-800" />,
    title: 'Shorter Sales Cycles',
    description: 'Accelerate deals with streamlined quoting process'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-800" />,
    title: 'Compliance Assured',
    description: 'Built-in approval workflows ensure pricing compliance'
  }
];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Salesforce CPQ Implementation | Configure, Price, Quote | Impviser"
        description="Implement Salesforce CPQ for faster quoting, accurate pricing, and streamlined sales operations with Impviser's certified CPQ experts."
        canonical="/services/salesforce-cpq-implementation"
      />
      {/* Hero Section */}
      <HeroSection
        backgroundImage={ch}
        title="Salesforce CPQ Implementation"
        subtitle="Streamline your Configure, Price, Quote process with expert Salesforce CPQ implementation. Accelerate sales cycles and ensure pricing accuracy."
        buttonText="Implement CPQ"
        buttonLink="/contact"
      />

      {/* CPQ Features */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        CPQ Implementation Services
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Complete Configure, Price, Quote implementation and optimization
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {cpqFeatures.map((feature, index) => (
        <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
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
        CPQ Implementation Benefits
      </h2>
      <p className="text-xl text-gray-600">
        Measurable improvements to your sales process and accuracy
      </p>
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

      
      {/* Unique Value Proposition Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Our Next-Generation CPQ Approach
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We don't just implement; we engineer your sales engine for future growth.
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Beyond Standard Implementation
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
          While many focus on basic setup, our team dives deep into your business logic. We design a solution that isn't just about quoting, but about scaling your entire revenue operation. Our approach is built on a foundation of clean architecture and a deep understanding of the Salesforce ecosystem, ensuring your CPQ org is fast, stable, and ready for future innovations.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start space-x-4">
            <TrendingUp className="flex-shrink-0 w-8 h-8 text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Scalable Architecture</h4>
              <p className="text-gray-600 text-sm">We build with the future in mind, ensuring your CPQ solution can handle exponential growth without performance degradation.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <Clock className="flex-shrink-0 w-8 h-8 text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Automation-First Mindset</h4>
              <p className="text-gray-600 text-sm">From configuration to contract, we eliminate manual bottlenecks to accelerate your deal velocity from day one.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <Shield className="flex-shrink-0 w-8 h-8 text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Robust & Error-Proof</h4>
              <p className="text-gray-600 text-sm">Our rigorous quality assurance protocols ensure your pricing and quoting rules are 100% accurate, every single time.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="order-1 lg:order-2">
        <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl">
          <div className="w-96 h-96 bg-gradient-to-tr from-[#223794] to-[#29ec48] rounded-full absolute -top-16 -right-16 opacity-30 animate-pulse"></div>
          <div className="w-64 h-64 bg-gradient-to-bl from-[#29ec48] to-[#1798c1] rounded-full absolute -bottom-16 -left-16 opacity-40 animate-pulse-slow"></div>
          <div className="relative text-[#223794] z-10 p-8 text-center backdrop-filter backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-2xl font-bold">"Engineered for the future of your business."</p>
            <p className="text-sm mt-2 text-[#223794]">From day one, we build for scale.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      
    </div>
  );
};

export default SalesforceCPQPage;