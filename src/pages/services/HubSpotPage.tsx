import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  CheckCircle,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Share2,
  ChevronDown,
  LayoutDashboard, // End-to-End Implementation
  Briefcase,       // Industry-Specific Solutions
  User,            // Certified HubSpot Experts
} from "lucide-react";

const HubSpotPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const whyHubspot = [
    {
      icon: TrendingUp,
      title: "All-in-One Platform",
      description:
        "HubSpot unifies CRM, marketing, sales, and customer service in one easy-to-use cloud system.",
    },
    {
      icon: Clock,
      title: "Powerful Automation",
      description:
        "Automate lead nurturing, campaigns, email marketing, and follow-ups to boost efficiency.",
    },
    {
      icon: Shield,
      title: "Seamless Integrations",
      description:
        "Connect with Salesforce, Microsoft Dynamics, Shopify, and 1000+ popular business tools.",
    },
    {
      icon: Zap,
      title: "AI-Driven Insights",
      description:
        "Use real-time analytics, AI-based lead scoring, and chatbots for smarter business decisions.",
    },
    {
      icon: Users,
      title: "Scalability & Cost-Effectiveness",
      description:
        "HubSpot grows with your business and maximizes ROI through flexible pricing and easy expansion.",
    },
  ];

  const process = [
    {
      step: "Discovery & Planning",
      description:
        "Understand your goals, map requirements, and design a custom HubSpot strategy.",
    },
    {
      step: "HubSpot Setup & Configuration",
      description:
        "Configure CRM, pipelines, dashboards, automations, and set up marketing, sales, and service hubs.",
    },
    {
      step: "Data Migration & Integration",
      description:
        "Secure migration and synchronization with your existing systems and third-party platforms.",
    },
    {
      step: "Customization & Automation",
      description:
        "Personalize workflows, automate key tasks, and deploy AI-powered solutions.",
    },
    {
      step: "Training & Adoption",
      description:
        "Hands-on training and onboarding to ensure high adoption across your team.",
    },
    {
      step: "Ongoing Support & Optimization",
      description:
        "Continuous support and proactive optimization to maximize ROI and business value.",
    },
  ];

  const faqs = [
    {
      question: "Why do I need HubSpot implementation for my business?",
      answer:
        "HubSpot implementation helps you unlock the full potential of the platform. From setting up automation workflows to aligning sales and marketing, proper implementation ensures you maximize ROI and streamline your business processes.",
    },
    {
      question: "Can you migrate data from my existing CRM to HubSpot?",
      answer:
        "Yes, we provide secure and seamless migration from CRMs like Salesforce, Zoho, Pipedrive, and more. Our team ensures your data is cleaned, mapped correctly, and transferred without any loss.",
    },
    {
      question: "Why should I choose Impviser for HubSpot implementation?",
      answer:
        "At Impviser, we are HubSpot-certified experts with proven experience across industries. We don’t just set up HubSpot—we customize, train, and provide ongoing support so your team can achieve measurable growth.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="py-20 text-white relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            HubSpot Implementation Services
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Transform Your Business with HubSpot <br />
            At Impviser, we go beyond simple software deployment—we help you
            unlock HubSpot’s full potential. Our certified experts ensure a
            seamless implementation that streamlines your marketing, sales, and
            customer service processes.
          </p>
          <Link
            to="/contact"
            className="bg-[#223794] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2d6d] transition-colors duration-200 inline-flex items-center"
          >
            <span>Book Your Free Consultation Today!</span>
          </Link>
        </div>
      </section>

      {/* Why HubSpot Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex items-center justify-center w-[600px] h-[600px] mx-auto">
            <div className="absolute w-40 h-40 rounded-full bg-[#223794] text-white shadow-lg flex items-center justify-center font-bold text-xl">
              HubSpot
            </div>

            {whyHubspot.map((item, i) => {
              const angle = (i / whyHubspot.length) * (2 * Math.PI);
              const radius = 230;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={i}
                  className="absolute w-40 h-40 bg-white shadow-md rounded-full flex flex-col items-center justify-center text-center p-4"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <item.icon className="w-10 h-10 text-black mb-2" />
                  <span className="text-base font-semibold">{item.title}</span>
                </div>
              );
            })}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why HubSpot is the Ultimate Choice for Your Business
            </h2>
            <ul className="space-y-4 text-gray-700">
              {whyHubspot.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Our HubSpot Implementation Process
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Our proven 6-step process ensures that your HubSpot setup is
            seamless, customized, and ready to deliver value from day one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-lg shadow-md border"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.step}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Why Choose Us for HubSpot Implementation?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-lg shadow-md border p-6 text-center">
              <User className="w-10 h-10 text-black mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Certified HubSpot Experts
              </h3>
              <p className="text-sm text-gray-600 text-justify">
                Our team consists of HubSpot-certified professionals.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md border p-6 text-center">
              <LayoutDashboard className="w-10 h-10 text-black mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                End-to-End Implementation
              </h3>
              <p className="text-sm text-gray-600 text-justify">
                We handle everything from setup to optimization.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md border p-6 text-center">
              <Briefcase className="w-10 h-10 text-black mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Industry-Specific Solutions
              </h3>
              <p className="text-sm text-gray-600 text-justify">
                Tailored implementation for technology, healthcare, insurance,
                and more.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md border p-6 text-center">
              <Share2 className="w-10 h-10 text-black mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Seamless CRM Integration
              </h3>
              <p className="text-sm text-gray-600 text-justify">
                We ensure HubSpot works flawlessly with your systems.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md border p-6 text-center">
              <CheckCircle className="w-10 h-10 text-black mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Proven Success
              </h3>
              <p className="text-sm text-gray-600 text-justify">
                Helping businesses accelerate sales, improve ROI, and enhance
                customer experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-6 text-left">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <p className="mt-4 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Grow with HubSpot?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your HubSpot journey with expert implementation and support.
          </p>
          <Link
            to="/contact"
            className="bg-[#223794] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2d6d] transition-colors duration-200 inline-flex items-center"
          >
            <span>Start HubSpot Implementation</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HubSpotPage;
