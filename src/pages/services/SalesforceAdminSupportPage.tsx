import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Settings, Clock } from 'lucide-react';
import ah from "../../assets/icons4/adminhero.png";
import sa from "../../assets/icons4/sa.png";
import HeroSection from "../../components/HeroSection";
import administrator from "../../assets/icons4/administrator.png";
import retain from "../../assets/icons4/retain.png";
import supportPlan from "../../assets/icons4/end-to-end-support.png"; 
import {BookOpen} from 'lucide-react';

const SalesforceAdminSupportPage = () => {
  const supportServices = [
    {
      title: 'Ongoing Administration',
      description: 'Day-to-day Salesforce administration and maintenance',
      features: ['User management', 'Permission sets', 'Data maintenance', 'System monitoring']
    },
    {
      title: 'Configuration Support',
      description: 'Custom fields, workflows, and process automation setup',
      features: ['Custom fields', 'Workflow rules', 'Process builder', 'Validation rules']
    },
    {
      title: 'Reporting & Dashboards',
      description: 'Custom reports and dashboards for business insights',
      features: ['Custom reports', 'Dashboard creation', 'Scheduled reports', 'Data visualization']
    },
    {
      title: 'Training & Adoption',
      description: 'User training and change management support',
      features: ['User training', 'Best practices', 'Adoption strategies', 'Documentation']
    }
  ];

 const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-blue-800" />,
    title: '24/7 Support',
    description: 'Round-the-clock support for critical business operations'
  },
  {
    icon: <BookOpen className="w-8 h-8 text-blue-800" />,
    title: 'Expert Knowledge',
    description: 'Certified administrators with deep Salesforce expertise'
  },
  {
    icon: <Settings className="w-8 h-8 text-blue-800" />,
    title: 'Proactive Maintenance',
    description: 'Regular system optimization and performance monitoring'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-800" />,
    title: 'Dedicated Support',
    description: 'Assigned administrator for consistent service delivery'
  }
];
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={ah}
        title="Salesforce Admin Support Services"
        subtitle="Dedicated Salesforce administration support to keep your system running smoothly. From daily maintenance to strategic optimization, we've got you covered."
        buttonText="Get Admin Support"
        buttonLink="/contact"
      />

{/* Support Services */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Admin Support Services
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Comprehensive Salesforce administration services to optimize your system
      </p>
    </div>

    {/* 4-card layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {supportServices.slice(0, 4).map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <div className="space-y-2 text-gray-700 text-sm">
            {service.features.map((feature, featureIndex) => (
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
              Support Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why choose our Salesforce admin support services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
  {benefit.icon} {/* Render icons directly */}
</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why You Need a Dedicated Admin Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why You Need a Dedicated Admin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated Salesforce administrator is more than just a support resource; they are a strategic asset.
            </p>
          </div>
          <div className="space-y-8 text-lg text-gray-700 max-w-4xl mx-auto text-justify">
            <p>
              Hiring a full-time, in-house Salesforce administrator can be costly and challenging. Our dedicated admin support services provide you with a cost-effective solution without compromising on quality or expertise. We give you access to a team of certified professionals who stay up-to-date with the latest Salesforce releases, security protocols, and best practices. This ensures your Salesforce org is not just maintained but continuously optimized for peak performance.
            </p>
            <p>
              By offloading administrative tasks to us, your internal team can focus on their core business activities. We handle everything from user management and security to data integrity and system enhancements, allowing you to maximize your Salesforce investment and drive business growth without the operational overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Our Proactive Approach Section with Image on Right */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Proactive and Strategic Approach
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                We believe that great admin support is proactive, not just reactive. Our methodology is designed to anticipate your needs and identify opportunities for improvement before issues arise. We regularly monitor your system's health, analyze performance metrics, and provide strategic recommendations to enhance your org's efficiency and usability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Our team works closely with you to understand your evolving business goals. We're not just here to fix problems; we're here to help you get more out of your Salesforce platform, building custom reports, automating tedious tasks, and ensuring user adoption remains high.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              {/* This is a placeholder for your image */}
              <img src={sa} alt="Proactive Salesforce Administration" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Support Plans Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Flexible Support Plans
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Choose the plan that best fits your business needs, budget, and desired level of support.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
        <img src={supportPlan} alt="On-Demand Support" className="w-16 h-16 mx-auto mb-4 object-contain" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">On-Demand Support</h3>
        <p className="text-gray-600">Perfect for businesses that need assistance with specific tasks or occasional issues.</p>
        <ul className="mt-6 text-left space-y-2 text-gray-700">
          <li className="flex items-start space-x-2">
            <span className="text-green-600">✔</span> <span>Ticket-based system</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-600">✔</span> <span>Pay-as-you-go model</span>
          </li>
        </ul>
      </div>
      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
        <img src={retain} alt="Retainer Packages" className="w-16 h-16 mx-auto mb-4 object-contain" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Retainer Packages</h3>
        <p className="text-gray-600">Ideal for ongoing administration needs and minor enhancements each month.</p>
        <ul className="mt-6 text-left space-y-2 text-gray-700">
          <li className="flex items-start space-x-2">
            <span className="text-green-600">✔</span> <span>Fixed number of hours per month</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-600">✔</span> <span>Dedicated resource access</span>
          </li>
        </ul>
      </div>
      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
        <img src={administrator} alt="Full-Time Admin" className="w-16 h-16 mx-auto mb-4 object-contain" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Full-Time Admin</h3>
        <p className="text-gray-600">Your solution for comprehensive, daily administration and strategic partnership.</p>
        <ul className="mt-6 text-left space-y-2 text-gray-700">
          <li className="flex items-start space-x-2">
            <span className="text-green-600">✔</span> <span>Full-time certified administrator</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-600">✔</span> <span>Customized support agreement</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


      
    </div>
  );
};

export default SalesforceAdminSupportPage;