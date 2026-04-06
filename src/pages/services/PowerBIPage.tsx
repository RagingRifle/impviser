import React from "react";
import { Link } from "react-router-dom";
import pbi from "../../assets/pbi.png"
import powerbiImg from "../../assets/PowerBI.png"
import HeroSection from "../../components/HeroSection";


const PowerBIPageImpviser = () => {
  const keyFeatures = [
    {
      title: "Real-Time Interactive Dashboards",
      description:
        "Design live dashboards to monitor KPIs, detect anomalies, and make timely decisions.",
    },
    {
      title: "Extensive Data Source Connectivity",
      description:
        "Connect with over 100+ data sources including Excel, SharePoint, Azure, Salesforce, SAP, Google Analytics, and more.",
    },
    {
      title: "Built-In AI and Machine Learning",
      description:
        "Use Power BI’s AI features to identify trends, predict future outcomes, and receive smart insights powered by Microsoft Azure.",
    },
    {
      title: "Custom Visuals and Embedding Options",
      description:
        "Create and embed custom visuals into your websites, portals, or apps for a unified analytics experience.",
    },
    {
      title: "Advanced Security and Compliance",
      description:
        "Rely on Microsoft’s enterprise-grade security, governance, and compliance standards to protect your sensitive data.",
    },
    {
      title: "Seamless Collaboration & Sharing",
      description:
        "Easily share reports and dashboards with teams across your organization, enabling collaborative decision-making and alignment.",
    },
  ];

  const services = [
    {
      title: "Power BI Implementation & Consulting",
      description:
        "From strategy to execution – we help you implement Power BI aligned with your business needs.",
    },
    {
      title: "Dashboard & Report Development",
      description:
        "Get custom dashboards designed for your key metrics, tailored to your industry.",
    },
    {
      title: "Data Modeling & ETL",
      description:
        "We build scalable data models and streamline your data preparation for accurate analytics.",
    },
    {
      title: "Power BI Training & Support",
      description:
        "Upskill your team with expert-led training and ongoing support.",
    },
  ];

  const industries = [
    {
      name: "Healthcare & Life Sciences",
      points: [
        "Track patient outcomes, reduce wait times, monitor staff productivity.",
        "Integrate with EHR, hospital management systems, and IoT devices.",
        "Enable real-time performance dashboards for hospital administrators and clinical directors.",
      ],
    },
    {
      name: "Insurance & Financial Services",
      points: [
        "Monitor claims processing, fraud detection, and customer retention.",
        "Create regulatory-compliant reports with drill-downs by region or risk category.",
        "Forecast cash flow and assess underwriting performance.",
      ],
    },
    {
      name: "Retail & E-Commerce",
      points: [
        "Analyze sales, customer behavior, and campaign ROI.",
        "View real-time inventory status, regional performance, and channel-wise sales.",
        "Predict demand and personalize marketing efforts.",
      ],
    },
    {
      name: "Manufacturing & Logistics",
      points: [
        "Track production efficiency, machine downtime, and supply chain movement.",
        "Monitor raw material costs vs output performance.",
        "Improve quality control through data-driven defect tracking.",
      ],
    },
    {
      name: "Real Estate & Property Management",
      points: [
        "Gain visibility into occupancy rates, lease renewals, and rental income.",
        "Compare property performance across locations.",
        "Use visual heat maps to manage maintenance requests and tenant issues.",
      ],
    },
    {
      name: "Technology & SaaS Companies",
      points: [
        "Measure product usage, user adoption, and support efficiency.",
        "Build executive dashboards with MRR, churn, and CAC insights.",
        "Align sales and customer success teams with unified views.",
      ],
    },
    {
      name: "Education & e-Learning",
      points: [
        "Track student engagement, course completion rates, and academic performance.",
        "Analyze enrollment trends, faculty workloads, and resource allocation.",
        "Visualize learning outcomes and feedback to enhance curriculum effectiveness.",
      ],
    },
    {
      name: "Hospitality & Travel",
      points: [
        "Track hotel occupancy rates, revenue per available room (RevPAR), and booking patterns.",
        "Monitor airline and travel agency performance across regions.",
        "Enhance guest experience by analyzing customer feedback and loyalty programs.",
      ],
    },
  ];

  const whyChooseImpviser = [
    "Certified Power BI Experts & Microsoft Partners",
    "Proven Experience Across Multiple Industries",
    "End-to-End BI Solutions (Consulting, Development, Training)",
    "Deep Integration Expertise with Salesforce, Azure, and Other Platforms",
    "Custom Solutions Designed for Business Impact",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
    <HeroSection
        backgroundImage={pbi}
        title="Unlock the Power of Data with Microsoft Power BI"
        subtitle="Microsoft Power BI is more than just a visualization tool – it’s a
          complete analytics platform. At Impviser, we deliver
          end-to-end Power BI services that help organizations transform their
          data into intelligent, actionable insights."
        buttonText="Connect with us"
        buttonLink="/contact"
      />

       <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-6 md:px-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">
            What is <span className="text-yellow-400">Power BI</span>?
          </h2>
          <p className="text-lg mb-6 text-justify">
            Microsoft Power BI is a powerful business analytics tool that allows organizations to visualize their data, share insights, and make informed decisions. It transforms raw data into interactive dashboards and reports for smarter decision-making.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-yellow-400 text-white rounded-lg font-bold"
          >
            Learn More
          </Link>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={powerbiImg}
            alt="Power BI Illustration"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>


      {/* About Power BI */}
      <section className="py-2 pb-10 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features of Power BI</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {keyFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col space-y-2 p-6 rounded-lg bg-gray-100 text-justify">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-yellow-400">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Power BI Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Industries We Empower with Power BI
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {industries.map((industry, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{industry.name}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {industry.points.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Impviser 
      <section className="py-20 bg-green-400 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Impviser?</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          We specialize in business intelligence, Salesforce integration, cloud
          solutions, and digital transformation. Our team combines technical
          depth with business acumen to deliver scalable, impactful analytics
          solutions using Power BI.
        </p>
        <ul className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {whyChooseImpviser.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="mt-12 inline-block px-10 py-5 bg-white text-blue-700 rounded-xl font-bold"
        >
          Get Your Free Consultation
        </Link>
      </section>*/}
    </div>
  );
};

export default PowerBIPageImpviser;
