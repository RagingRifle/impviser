import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../assets/processes-img.jpg"
import { 
  ArrowRight, 
  MessageSquare, 
  ClipboardList, 
  Code, 
  ShieldCheck, 
  Rocket, 
  Headphones 
} from 'lucide-react';

const ProcessPage = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Consultation',
      description: 'Understanding business goals, challenges, and Salesforce objectives to define a clear project scope.',
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: 'Strategy & Planning',
      description: 'Tailored Salesforce roadmap with actionable steps, timelines, and measurable milestones.',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Design & Development',
      description: 'Custom Salesforce solutions ensuring seamless workflows and efficient processes.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Testing & QA',
      description: 'Rigorous QA to ensure secure, high-performing, fully functional Salesforce system.',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Launch & Go-Live',
      description: 'Smooth deployment with minimal disruption and seamless transition.',
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Ongoing Support',
      description: 'Monitoring, optimization, and support to maximize ROI and long-term success.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section
  className="py-44 bg-center bg-cover text-center text-white relative"
  style={{ backgroundImage: `url(${bg})` }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Process</h1>
    <p className="text-xl max-w-3xl mx-auto leading-relaxed">
      A step-by-step approach to ensure smooth Salesforce implementation and measurable results.
    </p>
  </div>
</section>

      {/* 2-per-row Process Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        {/* Heading and Paragraph */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Implementation Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these six essential steps to ensure smooth Salesforce deployment, optimized workflows, and maximum ROI for your business.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#223794] text-white rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
