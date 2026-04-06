import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  LayoutDashboard,
  Database,
  Settings,
  GraduationCap,
  ChevronDown,
  Activity,
  Server,
  Sliders,
  BookOpen,
} from "lucide-react";
import SEO from "../../components/SEO";

const TableauPage = () => {
  const faqs = [
    {
      question: "What does a Tableau implementation partner do?",
      answer:
        "A Tableau implementation partner helps businesses adopt and optimize Tableau by setting up infrastructure, integrating data sources, creating dashboards, and training users for long-term success.",
    },
    {
      question: "Can Tableau be integrated with Salesforce?",
      answer:
        "Yes, Tableau integrates seamlessly with Salesforce, allowing businesses to analyze CRM data with advanced visualizations and create powerful, real-time dashboards.",
    },
    {
      question: "Is Tableau suitable for business intelligence?",
      answer:
        "Absolutely. Tableau is one of the leading business intelligence tools, enabling organizations to make data-driven decisions through real-time, interactive dashboards and reports.",
    },
    {
      question: "Does Impviser offer dashboard customization?",
      answer:
        "Yes, Impviser specializes in creating customized Tableau dashboards that align with your business goals and KPIs, making data insights more actionable.",
    },
    {
      question: "What industries does Impviser serve with Tableau?",
      answer:
        "Impviser serves multiple industries including finance, healthcare, retail, manufacturing, and technology — providing tailored Tableau solutions for each sector’s unique needs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      <SEO
        title="Tableau Consulting & Visualization Services | Impviser"
        description="Tableau consulting and advanced data visualization services. Interactive dashboards and business intelligence by certified experts."
        canonical="/services/tableau"
      />
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.openai.com/thumbnails/url/9Y5G8nicu5meUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4OLcj2KioKLzdONvQqzjB2z8oPMEr0LrEoLy1Ozo00cPOpSvaIMs1KqUxJVyu2NTQAACFhJco')",
          minHeight: "80vh",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col justify-center h-full text-left">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-blue-200 font-medium">Tableau Services</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Tableau Development & Consulting
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Unlock the full potential of Tableau with custom dashboards,
              integrations, and training that empower your business with
              data-driven decision-making.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
            >
              <span>Start Tableau Project</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Paragraph Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-gray-700 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Your Trusted Tableau Consulting Partner
          </h2>
          <p className="text-justify">
            We’re not just a Tableau service provider — we’re your strategic
            analytics partner. Backed by real-world experience in Tableau data
            visualization software, Impviser delivers complete, customized
            solutions that make your data easy to understand — and even easier
            to act on.
          </p>
          <p className="text-justify">
            Whether you’re starting fresh or exploring advanced Tableau
            integration with Salesforce, our team ensures a seamless rollout,
            tailored dashboards, and scalable performance to meet your unique
            business goals.
          </p>
          <p className="text-justify">
            As one of the most trusted names in business intelligence, Tableau
            software empowers organizations to move from static reports to
            real-time, interactive dashboards. From decision-makers to analysts,
            businesses rely on Tableau implementation services to uncover
            trends, streamline reporting, and turn data into strategic
            advantage. At Impviser, we make that transformation simple.
          </p>
        </div>
      </section>

      {/* Tableau Solutions Section with Black Icons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tableau Solutions We Offer
            </h2>
            <p className="text-lg text-gray-600">
              Our Tableau experts provide end-to-end business intelligence
              solutions that turn your data into actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dashboard Development */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-8">
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Dashboard Development
              </h3>
              <p className="text-gray-600 text-justify">
                Custom Tableau dashboards tailored to your business KPIs,
                ensuring clear and actionable insights.
              </p>
            </div>

            {/* Data Integration */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-8">
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Server className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Integration</h3>
              <p className="text-gray-600 text-justify">
                Seamless connection of Tableau with databases, APIs, and cloud
                data sources for unified reporting.
              </p>
            </div>

            {/* Tableau Optimization */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-8">
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Sliders className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Tableau Optimization
              </h3>
              <p className="text-gray-600 text-justify">
                Improve dashboard performance, query speed, and design for
                better usability and scalability.
              </p>
            </div>

            {/* Training & Support */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-8">
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Training & Support</h3>
              <p className="text-gray-600 text-justify">
                Hands-on Tableau training and ongoing support for your teams to
                maximize adoption and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Tableau Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              End-to-End Tableau Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help you unlock the full power of Tableau through expert
              strategy, scalable implementation, and intelligent insights — all
              tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="https://www.kindpng.com/picc/m/358-3586534_tableau-end-to-end-consulting-services-tableau-dashboard.png"
                alt="Comprehensive Tableau Dashboard"
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1 gap-8 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 mt-1 bg-black rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    1. Analytics Strategy & Governance
                  </h3>
                  <p className="text-justify">
                    Get strategic Tableau consulting to align your analytics
                    vision with business goals. We ensure secure, governed, and
                    scalable data collaboration across teams.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 mt-1 bg-black rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2. Custom Data Visualizations
                  </h3>
                  <p className="text-justify">
                    Transform raw data into impactful dashboards. Impviser
                    delivers best-practice Tableau visualizations that accelerate
                    decision-making and bring clarity to complex metrics.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 mt-1 bg-black rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    3. Data Management & Access
                  </h3>
                  <p className="text-justify">
                    Establish a single source of truth. From structured pipelines
                    to data cataloging, we empower your teams to access accurate,
                    real-time data for confident execution.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 mt-1 bg-black rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    4. Tableau Cloud Enablement
                  </h3>
                  <p className="text-justify">
                    Ready to scale? We support your journey to Tableau Cloud — with
                    step-by-step migration, platform optimization, and hybrid
                    model support to future-proof your analytics stack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b pb-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="text-gray-600 mt-3">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TableauPage;
