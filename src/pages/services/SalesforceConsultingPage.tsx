import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle, ArrowRight, Users, TrendingUp, Shield, Clock, Award } from 'lucide-react';
import adop from "../../assets/icons4/adop.png";
import fast from "../../assets/icons4/fast.png";
import revenue from "../../assets/icons4/revenue.png";
import risk from "../../assets/icons4/risk.png";
import hero from "../../assets/icons4/schero.png";
import processImg from "../../assets/icons4/sc1.png";
import sc2 from "../../assets/icons4/sc2.png";
import sc3 from "../../assets/icons4/sc3.png";
import sc4 from "../../assets/icons4/sc4.png";
import sc5 from "../../assets/icons4/sc5.png";
import HeroSection from "../../components/HeroSection";
import { DollarSign, Zap} from 'lucide-react';

const SalesforceConsultingPage = () => {
  const features = [
    'Strategic Salesforce roadmap development',
    'Business process optimization',
    'Change management and user adoption',
    'ROI analysis and performance metrics',
    'Best practices implementation',
    'Governance and compliance setup'
  ];

const benefits = [
  {
    icon: <DollarSign className="w-8 h-8 text-blue-800" />,
    title: 'Increased Revenue',
    description: 'Average 25% increase in sales productivity within 6 months'
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-800" />,
    title: 'Faster Implementation',
    description: 'Reduce implementation time by 40% with our proven methodologies'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-800" />,
    title: 'Higher Adoption',
    description: '95% user adoption rate through our change management approach'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-800" />,
    title: 'Risk Mitigation',
    description: 'Minimize project risks with experienced guidance and oversight'
  }
];
  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Real Estate',
    'Technology',
    'Non-Profit'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSection
  backgroundImage={hero}
  title="Strategic Salesforce Consulting Services"
  subtitle="Maximize your Salesforce investment with expert strategic guidance, implementation planning, and optimization services from certified Salesforce consultants."
  buttonText="Consult Now"
  buttonLink="/contact"
/>



      {/* Overview Section - Redesigned as a single paragraph */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Image */}
      <div className="flex justify-center lg:justify-start">
        <img
          src={sc5} // replace with the relevant image
          alt="Salesforce Consulting Overview"
          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
        />
      </div>

      {/* Right: Paragraph */}
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          What is Salesforce Consulting?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Salesforce consulting is the practice of leveraging expert guidance to unlock the full potential of your Salesforce platform. It's more than just technical implementation; it's a strategic partnership. Our certified consultants work closely with your organization to develop a comprehensive Salesforce roadmap, ensuring every feature is aligned with your specific business goals. We specialize in business process optimization, streamlining complex workflows to improve efficiency and productivity. Our services include change management and user adoption strategies to ensure your team not only uses the new system but embraces it, leading to higher ROI. We also provide best practices implementation and governance setup to maintain a clean, scalable, and secure Salesforce environment, minimizing long-term risks and maximizing your investment.
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
              Benefits of Expert Salesforce Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic approach delivers measurable business value and long-term success
            </p>
          </div>
          
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {benefits.map((benefit, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
    >
      <div className="flex items-center justify-center mx-auto mb-4">
        {benefit.icon} {/* Render the React component directly */}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
      <p className="text-gray-600 text-sm">{benefit.description}</p>
    </div>
  ))}
</div>

        </div>
      </section>

      

      {/* Our Consulting Process Section with Image on Right */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Proven Consulting Process
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify" >
                Our approach is a collaborative journey designed to ensure your Salesforce solution is a perfect fit for your business. We start with a Discovery Phase to deeply understand your current workflows, challenges, and goals. From there, we move to Solution Design, where we map out a customized Salesforce architecture and a phased implementation plan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                The Implementation & Development phase is where our certified team builds your solution with a focus on best practices. Finally, we provide comprehensive Training & Ongoing Support to ensure high user adoption and long-term success.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src={processImg} alt="Salesforce Consulting Process" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Service Offerings Section - Redesigned with more content */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Comprehensive Salesforce Service Offerings
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We provide a full spectrum of services to meet all your Salesforce needs, from initial strategy and implementation to ongoing optimization and support.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Service 1: Strategic Planning */}
      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-left">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Roadmapping & Consulting</h3>
        <p className="text-gray-600 leading-relaxed text-justify">
          We don't just implement software; we build a clear, long-term Salesforce strategy tailored to your business objectives. This includes a full discovery of your current processes, a future-state vision, and a phased roadmap for implementation and adoption to ensure a scalable solution.
        </p>
      </div>

      {/* Service 2: Implementation & Customization */}
      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-left">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Cycle Implementation & Development</h3>
        <p className="text-gray-600 leading-relaxed text-justify">
          From Sales Cloud to Service Cloud and custom app development, our certified developers and administrators handle every aspect of your Salesforce implementation. We focus on building intuitive, powerful, and scalable solutions with a commitment to best practices.
        </p>
      </div>

      {/* Service 3: Optimization & Support */}
      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-left">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support & Performance Audits</h3>
        <p className="text-gray-600 leading-relaxed text-justify">
          Your Salesforce journey doesn't end at go-live. We offer flexible support packages for ongoing maintenance, user training, and performance audits. We proactively identify areas for improvement and implement enhancements to keep your org running at peak efficiency.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Impviser Section - Icons removed */}
<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column: Bold, high-level value prop */}
      <div className="text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Impviser for Your Salesforce Consulting
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed text-justify">
          We are not just consultants; we are strategic partners dedicated to your long-term success. Our approach is built on a foundation of tangible results, ethical practices, and a partnership model that puts your business goals first.
        </p>
      </div>

      {/* Right Column: Detailed reasons without icons */}
      <div className="space-y-8">
        {/* Expertise */}
        <div className="text-left">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Unmatched Certified Expertise</h3>
          <p className="text-gray-700 text-justify">
            Our team holds the highest levels of Salesforce certifications, ensuring every solution is built on a foundation of deep, up-to-date platform knowledge and industry best practices.
          </p>
        </div>
        
        {/* Results */}
        <div className="text-left">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">A Focus on Measurable ROI</h3>
          <p className="text-gray-700 text-justify">
            We define success by your business outcomes, not just project completion. We use data-driven insights to measure the impact of our work and ensure your Salesforce investment delivers a powerful return.
          </p>
        </div>

        {/* Partnership */}
        <div className="text-left">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Dedicated Partnership, Not Just a Project</h3>
          <p className="text-gray-700 text-justify">
            We work as an extension of your team. Our collaborative approach ensures we deeply understand your needs and build a long-term relationship, providing support and guidance long after the initial rollout.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

            {/* FAQ Section */}
      <section className="py-20 bg-gray-900 text-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
      Frequently Asked Questions
    </h2>
    <div className="space-y-6">
      {[
        {
          q: "How long does a Salesforce implementation take?",
          a: "Timelines vary by project scope, but most implementations take between 8–12 weeks from discovery to go-live.",
        },
        {
          q: "Do you provide ongoing support after implementation?",
          a: "Yes. We offer continuous support, user training, and optimization services to ensure long-term success with Salesforce.",
        },
        {
          q: "Can you help us migrate data from our existing system?",
          a: "Absolutely. Our team specializes in secure data migration, ensuring accuracy and minimal downtime during the transition.",
        },
        {
          q: "Which industries do you serve?",
          a: "We work across multiple industries including finance, healthcare, real estate, manufacturing, technology, and non-profit sectors.",
        },
      ].map((item, idx) => (
        <details
          key={idx}
          className="group bg-gray-800 rounded-lg p-4 cursor-pointer transition"
        >
          <summary className="flex justify-between items-center font-semibold text-lg list-none">
            {item.q}
            <span className="ml-2 text-gray-400 group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>
          <p className="mt-2 text-gray-300">{item.a}</p>
        </details>
      ))}
    </div>
  </div>
</section>


      

    </div>
  );
};

export default SalesforceConsultingPage;