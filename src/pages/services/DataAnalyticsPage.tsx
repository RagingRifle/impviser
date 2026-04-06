import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle, ArrowRight, Database, TrendingUp, Eye, Brain } from 'lucide-react';
import HeroSection from "../../components/HeroSection";
import dh from "../../assets/icons5/dathero.png";
import sideImg from "../../assets/icons5/sideImg.png";
import udv from "../../assets/icons5/udv.png";
import ins from "../../assets/icons5/insights.png";
import dd from "../../assets/icons5/dd.png";
import vb from "../../assets/icons5/visibility.png";
import SEO from "../../components/SEO";

const DataAnalyticsPage = () => {
  const analyticsServices = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      features: ['Custom dashboards', 'KPI tracking', 'Trend analysis', 'Executive reporting']
    },
    {
      title: 'Data Visualization',
      description: 'Interactive charts and graphs for better data understanding',
      features: ['Interactive charts', 'Real-time dashboards', 'Mobile analytics', 'Self-service BI']
    },
    {
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting and predictions',
      features: ['Sales forecasting', 'Customer behavior', 'Risk assessment', 'Demand planning']
    },
    {
      title: 'Data Warehousing',
      description: 'Centralized data storage and management solutions',
      features: ['Data modeling', 'ETL processes', 'Data quality', 'Performance optimization']
    }
  ];

  const benefits = [
  {
    icon: vb,
    title: 'Better Visibility',
    description: 'Clear insights into business performance and trends'
  },
  {
    icon: dd,
    title: 'Data-Driven Decisions',
    description: 'Make informed decisions based on accurate data analysis'
  },
  {
    icon: ins,
    title: 'Predictive Insights',
    description: 'Forecast future trends and opportunities'
  },
  {
    icon: udv,
    title: 'Unified Data View',
    description: 'Single source of truth for all business data'
  }
];


  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Data Analytics Solutions | Business Intelligence | Impviser"
        description="Transform your data into actionable insights with data analytics services. Custom dashboards, predictive analytics, and reporting."
        canonical="/services/data-analytics"
      />
      {/* Hero Section */}
      <HeroSection
        backgroundImage={dh}
        title="Data & Analytics Solutions"
        subtitle="Transform your business data into powerful insights with advanced analytics, business intelligence, and data visualization solutions."
        buttonText="Explore Analytics Solutions"
        buttonLink="/contact"
      />

      {/* Analytics Services */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Analytics Services
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Comprehensive data and analytics solutions to drive business intelligence
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      {analyticsServices.map((service, index) => (
        <div
          key={index}
          className="p-8 rounded-2xl border border-gray-200 bg-gray-50 hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-5">{service.description}</p>
          <div className="space-y-2">
            {service.features.map((feature, i) => (
              <p key={i} className="text-gray-700 text-sm border-l-4 border-blue-500 pl-3">
                {feature}
              </p>
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
              Analytics Benefits
            </h2>
            <p className="text-xl text-gray-600">
              How data analytics transforms your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
  <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 object-contain" />
</div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* sec1 */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <img src={sideImg} alt="Data Analytics Process" className="rounded-2xl shadow-lg w-full" />
    </div>
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Empower Your Business with Data
      </h2>
      <p className="text-lg text-gray-600 mb-6 text-justify">
        Our solutions help you turn complex datasets into clear, actionable insights. 
        Whether you want to improve operations, enhance customer experiences, or forecast market trends, 
        we provide the right tools and expertise to make it happen.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span>Real-time insights tailored for your goals</span>
        </li>
        <li className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span>Seamless integration with your business apps</span>
        </li>
        <li className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span>Future-ready analytics infrastructure</span>
        </li>
      </ul>
    </div>
  </div>
</section>

{/* sec2 */}
<section className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
      Why Data Analytics Matters
    </h2>
    <p className="text-lg text-gray-600 mb-8">
      In today's competitive world, data is the backbone of successful decision-making. 
      By unlocking insights hidden in your data, you can stay ahead of the competition, 
      improve operational efficiency, and deliver better value to your customers.
    </p>
    <div className="grid md:grid-cols-3 gap-8 text-left">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Efficiency</h3>
        <p className="text-gray-600">Optimize processes and reduce costs with smarter workflows.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
        <p className="text-gray-600">Use predictive analytics to develop new strategies and products.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
        <p className="text-gray-600">Unlock new revenue streams and scale with confidence.</p>
      </div>
    </div>
  </div>
</section>

      
    </div>
  );
};

export default DataAnalyticsPage;