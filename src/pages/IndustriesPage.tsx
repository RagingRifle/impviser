import React from 'react';
import { Link } from 'react-router-dom';
import { Banknote, Shield, Home, Heart, Beaker, Handshake, BookOpen, Truck, ShoppingCart, Film } from "lucide-react"; // example icons
import indu from "../assets/industries1.jpg"
import HeroSection from "../components/HeroSection";

const IndustriesPage = () => {
 const industries = [
  {
    name: "Banking, Finance & Legal",
    description: "Enhance client onboarding, compliance, and advisory services with intelligent CRM workflows.",
    icon: Banknote,
  },
  {
    name: "Insurance",
    description: "Streamline policy administration, claims processing, and customer experience with industry-ready Salesforce tools.",
    icon: Shield,
  },
  {
    name: "Real Estate & Property",
    description: "Manage leads, track deals, and optimize property portfolios with customized CRM solutions.",
    icon: Home,
  },
  {
    name: "Healthcare & Life Sciences",
    description: "Deliver better patient experiences, care coordination, and regulatory compliance with secure Salesforce systems.",
    icon: Heart,
  },
  {
    name: "Pharmaceuticals & Biotech",
    description: "Accelerate research, regulatory approvals, and sales enablement through tailored automation.",
    icon: Beaker,
  },
  {
    name: "Non-Profits & NGOs",
    description: "Boost donor engagement, fundraising campaigns, and impact reporting with Salesforce Nonprofit Cloud.",
    icon: Handshake,
  },
  {
    name: "Education & EdTech",
    description: "Transform admissions, student engagement, and alumni management with CRM-powered solutions.",
    icon: BookOpen,
  },
  {
    name: "Manufacturing & Supply Chain",
    description: "Digitize operations, streamline production, and strengthen distributor partnerships.",
    icon: Truck,
  },
  {
    name: "Retail & E-Commerce",
    description: "Personalize shopping journeys and unify digital and physical sales channels for maximum impact.",
    icon: ShoppingCart,
  },
  {
    name: "Media & Entertainment",
    description: "Engage audiences, manage subscriptions, and boost advertising sales with data-driven insights.",
    icon: Film,
  },
];

  return (
    <div className="min-h-screen pt-20">

       <HeroSection
              backgroundImage={indu}
              title="Industry Expertise"
              subtitle=" Deep industry knowledge combined with technical expertise to deliver solutions that address your sector's unique challenges and opportunities."
              buttonText="Connect with us"
              buttonLink="/contact"
            />
      
      {/* Hero Section */}
      
      {/* Industries Grid */}
     <section className="py-20 bg-gradient-to-br from-white via-sky-100 to-sky-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Heading & Description */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        We provide tailored Salesforce solutions across a wide range of industries, helping businesses unlock their full potential.
      </p>
    </div>

    {/* Grid of Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industries.map((industry, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-lg bg-sky-400/20">
            <industry.icon className="w-8 h-8 text-sky-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
        </div>
      ))}
    </div>
    
  </div>
</section>



      {/* Industry Stats 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cross-Industry Impact
            </h2>
            <p className="text-xl text-gray-600">
              Delivering measurable results across all sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#223794] mb-2">6+</div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#29ec48] mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#223794] mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#29ec48] mb-2">150+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA Section 
      <section className="py-20 bg-gradient-to-r from-[#223794] to-[#29ec48]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our industry expertise can drive success for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-[#223794] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link 
              to="/customer-stories" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#223794] transition-all duration-200"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default IndustriesPage;