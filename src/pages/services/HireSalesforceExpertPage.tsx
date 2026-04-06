import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, ArrowRight, Award, Clock, TrendingUp, Shield } from 'lucide-react';
import HeroSection from "../../components/HeroSection";
import hh from "../../assets/icons5/hihero.png";
import cert from "../../assets/icons5/cert.png";
import flex from "../../assets/icons5/flex.png";
import track from "../../assets/icons5/track.png";
import quality from "../../assets/icons5/quality.png";


const HireSalesforceExpertPage = () => {
  const expertTypes = [
    {
      title: 'Salesforce Developers',
      description: 'Certified developers for custom Salesforce development projects',
      skills: ['Apex programming', 'Lightning development', 'Integration expertise', 'Best practices knowledge']
    },
    {
      title: 'Salesforce Administrators',
      description: 'Experienced admins for ongoing system management and optimization',
      skills: ['System configuration', 'User management', 'Workflow automation', 'Reporting & dashboards']
    },
    {
      title: 'Salesforce Architects',
      description: 'Senior architects for complex implementations and system design',
      skills: ['Solution architecture', 'Technical leadership', 'Integration design', 'Performance optimization']
    },
    {
      title: 'Salesforce Consultants',
      description: 'Business consultants for strategic planning and process optimization',
      skills: ['Business analysis', 'Process design', 'Change management', 'Training delivery']
    }
  ];

  const benefits = [
  {
    icon: cert,
    title: 'Certified Experts',
    description: 'All experts hold current Salesforce certifications'
  },
  {
    icon: flex,
    title: 'Flexible Engagement',
    description: 'Part-time, full-time, or project-based arrangements'
  },
  {
    icon: track,
    title: 'Proven Track Record',
    description: 'Experts with successful project delivery history'
  },
  {
    icon: quality,
    title: 'Quality Assured',
    description: 'Rigorous vetting process ensures top-tier talent'
  }
];


  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={hh}
        title="Hire a Salesforce Expert"
        subtitle="Access top-tier Salesforce talent for your projects. Our certified experts are available for short-term projects or long-term engagements."
        buttonText="Find Your Expert"
        buttonLink="/contact"
      />

      {/* Expert Types */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Salesforce Experts Available
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Choose from our pool of certified Salesforce professionals
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {expertTypes.map((type, index) => (
        <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
          <p className="text-gray-600 leading-relaxed mb-5">{type.description}</p>
          <div className="flex flex-wrap gap-2">
            {type.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Engagement Models */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Engagement Models
      </h2>
      <p className="text-xl text-gray-600">
        Choose how you’d like to collaborate with our Salesforce experts
      </p>
    </div>

    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Full-Time</h3>
        <p className="text-gray-600 leading-relaxed text-justify">
          A dedicated expert joins your team full-time, working closely with you
          on a daily basis. Best suited for organizations with ongoing
          Salesforce projects that require constant attention, deeper
          collaboration, and consistent progress.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Part-Time</h3>
        <p className="text-gray-600 leading-relaxed text-justify">
          Flexible availability for teams that need occasional Salesforce
          support. Ideal when you don’t require a full 40-hour commitment but
          still want access to certified expertise at regular intervals.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Project-Based</h3>
        <p className="text-gray-600 leading-relaxed text-justify">
          Engagement focused on a defined scope of work — whether it’s a system
          migration, new implementation, or optimization project. Our experts
          work toward clear deliverables within agreed timelines.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Benefits */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Why Hire Our Experts?
      </h2>
      <p className="text-xl text-gray-600">
        Benefits of working with our certified Salesforce professionals
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
        >
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <img
              src={benefit.icon}
              alt={benefit.title}
              className="w-16 h-16 object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {benefit.title}
          </h3>
          <p className="text-gray-600 text-sm">{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      
    </div>
  );
};

export default HireSalesforceExpertPage;