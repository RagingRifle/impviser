import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle, ArrowRight, Zap, TrendingUp, Bot, Sparkles } from 'lucide-react';
import backgroundImage from "../../assets/Aisalesforcepage/background.webp";
import salesai from "../../assets/Aisalesforcepage/salesai.png";
import marketingai from "../../assets/Aisalesforcepage/marketingai.webp";
import customerserviceai from "../../assets/Aisalesforcepage/customerserviceai.jpg";
import commercialai from "../../assets/Aisalesforcepage/commerceai.jpg";


import SalesIcon from "../../assets/Aisalesforcepage/sales.png";
import CustomerIcon from "../../assets/Aisalesforcepage/customer.png";
import MarketingIcon from "../../assets/Aisalesforcepage/digital-marketing.png";
import DecisionsIcon from "../../assets/Aisalesforcepage/analy.png";
import AutomationIcon from "../../assets/Aisalesforcepage/automation.png";
import SEO from "../../components/SEO";




const AIPoweredSalesforcePage = () => {
  

 

const solutions = [
  {
    title: "Sales AI",
    img: salesai, // replace with your image path
    points: [
      "Identify the Hot Leads: Sales AI analyzes past deals to pinpoint the most promising prospects.",
      "Predict the Future: Uses real-time data to predict closing chances and customer engagement.",
      "Focus on What Matters: Automatically captures emails and calendar entries to save time.",
      "Optimize Outreach: Suggests the best time and method to contact prospects for higher conversions.",
      "Deal Insights: Provides actionable recommendations to close deals faster and more effectively."
    ],
  },
  {
    title: "Marketing AI",
    img: marketingai,
    points: [
      "Uncover Hidden Insights: Discover trends and patterns in customer data.",
      "Personalization Powerhouse: Deliver personalized experiences across all channels.",
      "Campaign Optimization: Automatically adjusts campaigns based on performance data.",
      "Audience Segmentation: Identifies micro-segments for highly targeted marketing.",
      "Content Suggestions: Generates engaging content ideas tailored to your audience."
    ],
  },
  {
    title: "Customer Service AI",
    img: customerserviceai,
    points: [
      "Smart Bots for Simple Issues: Chatbots answer FAQs and resolve basic issues instantly.",
      "Empowered Agents: AI-powered recommendations make service reps faster and more efficient.",
      "24/7 Support: AI ensures customers get help anytime without waiting.",
      "Sentiment Analysis: Understand customer emotions to prioritize responses.",
      "Ticket Automation: Automatically categorizes and routes support tickets for faster resolution."
    ],
  },
  {
    title: "Commerce AI",
    img: commercialai,
    points: [
      "Personal Shopping Assistants: AI-powered assistants provide seamless product searches.",
      "Smart Product Recommendations: Tailored product suggestions to increase sales.",
      "Effortless Web Design: Generative Page Designer creates pages using natural language prompts.",
      "Insightful Commerce Analytics: Analyze purchase patterns to refine strategies.",
      "Dynamic Pricing: Optimizes product prices based on demand, trends, and competitor data.",
      "Inventory Forecasting: Predicts stock needs to reduce overstock or stockouts."
    ],
  },
];
interface Benefit {
  title: string;
  description: string;
  icon: string; // Path to imported icon
}

const benefits: Benefit[] = [
  {
    title: "Accelerate Sales Growth",
    description:
      "Leverage intelligent Sales AI to uncover high-potential leads, predict customer behavior, and close deals faster than ever.",
    icon: SalesIcon,
  },
  {
    title: "Enhance Customer Experience",
    description:
      "Use Customer Service AI to provide personalized, proactive support that resolves issues quickly and keeps clients satisfied.",
    icon: CustomerIcon,
  },
  {
    title: "Optimize Marketing Campaigns",
    description:
      "Reach the right audience with data-driven Marketing AI, improving targeting, engagement, and overall campaign ROI.",
    icon: MarketingIcon,
  },
  {
    title: "Make Smarter Decisions",
    description:
      "Gain actionable insights from AI analytics to guide business strategies, forecast trends, and make informed decisions in real time.",
    icon: DecisionsIcon,
  },
  {
    title: "Automate Routine Tasks",
    description:
      "Free your team from repetitive processes with AI-driven automation, increasing productivity and allowing focus on high-value activities.",
    icon: AutomationIcon,
  },
];



  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="AI-Powered Salesforce Implementation | Impviser"
        description="Leverage AI and machine learning within Salesforce. Einstein AI, predictive analytics, and intelligent automation by Impviser."
        canonical="/services/ai-powered-salesforce"
      />
      {/* Hero Section */}
      <section className="relative py-20 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Gradient Overlay (optional for better contrast) */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            
           <h1 className="text-4xl lg:text-5xl font-bold mb-6">
  AI-Powered Salesforce Implementation
</h1>
<p className="text-xl text-purple-100 leading-relaxed mb-8">
  At Impviser, we deliver next-generation Salesforce implementations enhanced with artificial intelligence. Harness AI to automate workflows, predict business outcomes, and provide personalized experiences that drive growth.
</p>

            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
      Revolutionize with Salesforce's AI Powered Solutions
    </h2>

    <div className="space-y-16">
      {solutions.map((solution, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          {/* Left Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={solution.img}
              alt={solution.title}
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-justify w-full">
              {solution.title}
            </h3>
            <ul className="space-y-2 text-gray-700 mb-4 text-justify">
              {solution.points.map((point, i) => (
                <li key={i} className="text-justify w-full">
                  • {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        AI Implementation Benefits
      </h2>
      <p className="text-xl text-gray-600">
        Transform your business with AI-enhanced Salesforce capabilities
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="w-18 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
            <img
  src={benefit.icon}
  alt={benefit.title}
  className="w-18 h-10 object-contain"
/>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
          <p className="text-gray-600 text-sm text-justify">{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
   {/* <section className="bg-blue-900 text-white py-16 px-6 text-center rounded-lg mx-4 md:mx-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Get Started on the Power of Salesforce AI for Your Business?
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
        Contact <span className="font-semibold">Impviser</span> today and let's discuss your specific requirements. We'll show you how Salesforce AI can transform your sales, customer service, and marketing efforts, driving success and growth for your Indian business!
      </p>
      <a
        href="/contact" 
        className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
      >
        Get in Touch
      </a>
    </section>*/}

    
    </div>
  );
};

export default AIPoweredSalesforcePage;