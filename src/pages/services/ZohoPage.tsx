import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  TrendingUp,
  Clock,
  Shield,
  HelpCircle,
  CheckCircle,
  Layers,
  Zap,
  Headphones,
} from "lucide-react";

const ZohoPage = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Sales Productivity",
      description:
        "Boost sales efficiency by 30% with automation and AI-driven insights.",
    },
    {
      icon: Clock,
      title: "Faster Deployment",
      description:
        "Accelerate CRM rollout by 40% with our proven Zoho methodologies.",
    },
    {
      icon: Users,
      title: "Higher User Adoption",
      description:
        "Achieve 95% adoption rates through training & change management.",
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description:
        "Enterprise-grade security with scalability for future growth.",
    },
  ];

  const whyChoose = [
    {
      icon: CheckCircle,
      title: "Certified Zoho Experts",
      description:
        "Our team brings hands-on experience across industries and understands how to map your unique business processes into Zoho CRM.",
    },
    {
      icon: Layers,
      title: "Tailored CRM Solutions",
      description:
        "We don’t believe in one-size-fits-all. We customize Zoho CRM to align with your workflows, sales cycles, and customer engagement strategies.",
    },
    {
      icon: Zap,
      title: "Quick & Seamless Implementation",
      description:
        "We follow a phased, agile approach to ensure a smooth transition, with minimal disruption to your ongoing operations.",
    },
    {
      icon: Headphones,
      title: "End-to-End Support",
      description:
        "From planning and customization to training and post-deployment support, we stay with you every step of the way.",
    },
  ];

  const faqs = [
    {
      q: "How long does a Zoho CRM implementation take?",
      a: "Typically 4–12 weeks, depending on complexity.",
    },
    {
      q: "Do you provide ongoing support after implementation?",
      a: "Yes — we offer flexible support packages including training, troubleshooting, and upgrades.",
    },
    {
      q: "Can you migrate data from our existing CRM?",
      a: "Absolutely. We ensure seamless and secure migration with zero data loss.",
    },
    {
      q: "Which industries do you serve?",
      a: "IT, healthcare, retail, manufacturing, real estate, and more.",
    },
    {
      q: "Is Zoho CRM customizable to our business processes?",
      a: "Yes — we tailor modules, workflows, reports, and dashboards to your needs.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center space-x-2 mb-6 bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm">
            <span className="text-white font-medium">
              Zoho CRM Consulting Services
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Zoho CRM Consulting That Scales With You
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            From strategy to support — build a CRM ecosystem that drives sales,
            streamlines processes, and improves collaboration.
          </p>

          <Link
            to="/contact"
            className="bg-white text-[#223794] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center space-x-2 text-lg shadow-lg"
          >
            <span>Consult a Zoho Expert</span>
          </Link>
        </div>
      </section>

      {/* Section 1: What is Zoho CRM Consulting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is Zoho CRM Consulting?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify" >
              Zoho CRM consulting is more than just setting up software—it’s
              about building a strategic, future-ready roadmap for your
              business. Our certified consultants dive deep into your existing
              workflows, sales cycles, and customer interactions to identify
              inefficiencies, gaps, and untapped opportunities. With this
              insight, we design a customized Zoho CRM ecosystem that not only
              supports your operations but drives measurable growth, revenue
              acceleration, and cross-team collaboration. Unlike traditional
              implementations, our approach focuses on change management, user
              adoption, and scalability. We understand that CRM success depends
              on how well your team embraces it.
            </p>
          </div>

          {/* Illustration */}
          <div className="rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-50">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Zoho CRM Consulting Illustration"
              className="object-cover w-full h-60 md:h-[300px] lg:h-[350px]"
            />
          </div>
        </div>
      </section>

      {/* New Section: Why Choose Impviser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Impviser for Zoho CRM?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Your trusted partner in Zoho CRM success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#1798c1]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#1798c1]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm text-justify">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Implementation & Development */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <div className="rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-50">
            <img
              src="https://images.unsplash.com/photo-1559526324-593bc073d938"
              alt="Zoho Implementation Illustration"
              className="object-cover w-full h-60 md:h-[300px] lg:h-[350px]"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Implementation & Development
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify">
              Successful CRM implementation is not just about configuration—it’s
              about aligning technology with your unique business goals and
              processes. Our Zoho CRM implementation methodology begins with a
              deep discovery phase, where we map your sales funnels, marketing
              campaigns, and customer support journeys. This ensures that every
              workflow, module, and dashboard is purpose-built to reflect how
              your organization actually operates. Our certified experts handle
              the full setup—from data migration and workflow automation to
              custom module creation and role-based permissions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Benefits of Zoho CRM Consulting
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Delivering measurable outcomes with Zoho
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#1798c1]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-[#1798c1]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-[#1798c1] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                    <p className="text-gray-600">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform with Zoho CRM?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a consultation and unlock the full potential of Zoho CRM.
          </p>
          <Link
            to="/contact"
            className="bg-[#223794] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2d73] transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Book a Free Consultation</span>
          </Link>
        </div>
      </section>*/}
    </div>
  );
};

export default ZohoPage;
