import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, CheckCircle, ArrowRight, Database, Shield, Clock, Users, TrendingUp } from 'lucide-react';
import time from "../../assets/icons4/time.png";
import secure from "../../assets/icons4/secure.png";
import adop from "../../assets/icons4/adop.png";
import perf from "../../assets/icons4/perf.png";
import mihero from "../../assets/icons4/mihero.png";
import whatWeDoImg from "../../assets/icons4/wwd.png";
import approachImg from "../../assets/icons4/approach.png";
import HeroSection from "../../components/HeroSection";
import { Gauge,  ShieldCheck } from 'lucide-react'; 

const SalesforceMigrationPage = () => {
  const migrationTypes = [
    {
      title: 'Platform Migration',
      description: 'Migration from other platforms to Salesforce',
      features: ['Platform assessment', 'Architecture planning', 'Integration setup', 'Performance optimization']
    },
    {
      title: 'Org-to-Org Migration',
      description: 'Migration between Salesforce organizations',
      features: ['Metadata migration', 'Data consolidation', 'User management', 'Configuration transfer']
    },
    {
      title: 'Data Migration',
      description: 'Seamless transfer of your existing data to Salesforce',
      features: ['Data mapping and transformation', 'Quality validation', 'Incremental migration', 'Rollback capabilities']
    },
    {
      title: 'System Migration',
      description: 'Complete migration from legacy CRM systems',
      features: ['Legacy system analysis', 'Process re-engineering', 'User training', 'Change management']
    },
    
    
  ];


const benefits = [
  {
    icon: <Gauge className="w-8 h-8 text-blue-800" />,
    title: 'Improved Performance',
    description: 'Enhanced system performance and user experience'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-800" />,
    title: 'User Adoption',
    description: 'Smooth transition with comprehensive training and support'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-800" />,
    title: 'Data Integrity',
    description: '100% data accuracy with comprehensive validation processes'
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-800" />,
    title: 'Minimal Downtime',
    description: 'Strategic migration approach ensures business continuity'
  }
];


  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={mihero}
        title="Salesforce Migration Services"
        subtitle="Seamlessly migrate your data, processes, and users to Salesforce with zero data loss and minimal business disruption. Our proven migration methodology ensures a smooth transition."
        buttonText="Plan Your Migration"
        buttonLink="/contact"
      />

      {/* Migration Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Migration Services We Offer
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto">
              We provide comprehensive migration solutions tailored for every business need. From data and system migrations to workflow and application transitions, we ensure a smooth and efficient process with minimal disruption to your operations.
            </p>
          </div>

          {/* Single row of 4 services as cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationTypes.slice(0, 4).map((type, index) => (
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
              Migration Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Why choose our migration services for your Salesforce transition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {benefits.map((benefit, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
    >
      <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
        {benefit.icon} {/* Render the component directly */}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
      <p className="text-gray-600 text-sm">{benefit.description}</p>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Understanding the Migration Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Understanding the Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we make your Salesforce transition smooth, reliable, and stress-free.
            </p>
          </div>

          <div className="text-gray-700 text-lg leading-relaxed space-y-6 text-justify">
            <p>
              Migrating to Salesforce isn’t just about moving data—it’s about making the change seamless for your business. We start with <strong>Discovery & Planning</strong>, diving deep into your current systems, data structures, and workflows to map out the best approach for your migration.
            </p>
            <p>
              Next comes <strong>Data Cleansing & Preparation</strong>, ensuring the data we move is accurate, organized, and free of duplicates. This step is key to avoiding future headaches and keeping your new system running smoothly.
            </p>
            <p>
              Then we move into <strong>Migration & Validation</strong>, executing the migration with precision and verifying everything along the way to maintain data integrity. Our goal is zero disruption, so your business keeps moving without hiccups.
            </p>
            <p>
              Finally, during <strong>Go-Live & Post-Migration Support</strong>, we stay by your side, helping your team adjust and ensuring the new system delivers exactly what you need. With our process, Salesforce isn’t just implemented—it’s adopted confidently.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section with Image on Right */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  What We Do: Beyond the Code
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0">
                  Our role in your Salesforce migration goes beyond simple technical execution.
                </p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                We act as your strategic partners, ensuring that the migration aligns with your long-term business goals. We specialize in <strong>process re-engineering</strong> to identify opportunities for automation and efficiency gains that your legacy system couldn't support. This involves working closely with your stakeholders to understand their pain points and design a solution that not only meets but exceeds their expectations. By focusing on a holistic approach, we ensure that the new Salesforce environment is optimized for your specific workflows, empowering your team to work smarter and more productively.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src={whatWeDoImg} alt="Data flow diagram" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Approach Section with Image on Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Proven Approach
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0">
                  A methodology designed to minimize risk and maximize success.
                </p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Our proven methodology is designed to minimize risk and maximize success. We believe in an agile, iterative approach that allows for flexibility and continuous improvement throughout the project lifecycle. Our team of certified Salesforce consultants follows best practices for data security and privacy, ensuring your sensitive information is protected at every stage. <strong>Rigorous quality assurance</strong> is a cornerstone of our process, with multiple rounds of testing, including user acceptance testing, to confirm that all functionalities and data are working as intended before the final deployment. This meticulous approach guarantees a reliable and robust Salesforce instance.
              </p>
            </div>
            <div>
              <img
                src={approachImg}
                alt="Collaborative team on a dashboard"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivering Tangible Value Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Delivering Tangible Value
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock new growth opportunities with a modern, scalable platform.
            </p>
          </div>
          <div className="text-gray-700 text-lg leading-relaxed mb-8">
            <p className="mb-4 text-justify">
              Choosing our Salesforce migration services is an investment in your company's future. By upgrading to a modern, scalable platform, you're not just improving your technology; you're unlocking new growth opportunities. The benefits are tangible: reduced operational costs due to improved efficiency, enhanced decision-making with real-time analytics, and a 360-degree view of your customers that allows for more personalized and effective interactions. We don't just migrate your data; we migrate your business to a position of strength, helping you stay competitive and agile in a rapidly evolving market.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesforceMigrationPage;
