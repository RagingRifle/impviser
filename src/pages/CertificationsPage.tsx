import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, Star, CheckCircle, ArrowRight, Users, TrendingUp } from 'lucide-react';

const CertificationsPage = () => {
  const certifications = [
    {
      category: 'Salesforce',
      certifications: [
        { name: 'Salesforce Certified Technical Architect', level: 'Expert', holders: 3 },
        { name: 'Salesforce Certified Application Architect', level: 'Expert', holders: 5 },
        { name: 'Salesforce Certified System Architect', level: 'Expert', holders: 4 },
        { name: 'Salesforce Certified Platform Developer II', level: 'Advanced', holders: 8 },
        { name: 'Salesforce Certified Administrator', level: 'Professional', holders: 12 },
        { name: 'Salesforce Certified Sales Cloud Consultant', level: 'Professional', holders: 10 },
        { name: 'Salesforce Certified Service Cloud Consultant', level: 'Professional', holders: 8 },
      ]
    },
    {
      category: 'Cloud Platforms',
      certifications: [
        { name: 'AWS Solutions Architect Professional', level: 'Expert', holders: 4 },
        { name: 'Google Cloud Professional Cloud Architect', level: 'Expert', holders: 3 },
        { name: 'Microsoft Azure Solutions Architect Expert', level: 'Expert', holders: 3 },
        { name: 'AWS Certified Developer Associate', level: 'Professional', holders: 6 },
      ]
    },
    {
      category: 'Data & Analytics',
      certifications: [
        { name: 'Snowflake SnowPro Advanced Architect', level: 'Expert', holders: 2 },
        { name: 'Tableau Desktop Certified Professional', level: 'Professional', holders: 5 },
        { name: 'Microsoft Power BI Data Analyst Associate', level: 'Professional', holders: 4 },
        { name: 'AWS Certified Machine Learning Specialty', level: 'Specialty', holders: 3 },
      ]
    },
    {
      category: 'Process Automation',
      certifications: [
        { name: 'UiPath Advanced RPA Developer', level: 'Advanced', holders: 4 },
        { name: 'UiPath Solution Architect', level: 'Expert', holders: 2 },
        { name: 'Microsoft Power Platform Solution Architect', level: 'Expert', holders: 2 },
      ]
    }
  ];

  const partnerships = [
    {
      name: 'Salesforce Consulting Partner',
      level: 'Gold',
      description: 'Recognized for excellence in Salesforce implementations and customer success.',
      benefits: ['Priority support', 'Early access to new features', 'Co-marketing opportunities']
    },
    {
      name: 'AWS Advanced Consulting Partner',
      level: 'Advanced',
      description: 'Validated expertise in AWS cloud solutions and migrations.',
      benefits: ['Technical support', 'Training credits', 'Go-to-market support']
    },
    {
      name: 'Microsoft Gold Partner',
      level: 'Gold',
      description: 'Demonstrated competency in Microsoft technologies and solutions.',
      benefits: ['Technical presales support', 'Marketing resources', 'Training benefits']
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-purple-100 text-purple-800';
      case 'Advanced': return 'bg-blue-100 text-blue-800';
      case 'Professional': return 'bg-green-100 text-green-800';
      case 'Specialty': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Certifications & Partnerships
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Our team's expertise is validated by industry-leading certifications and strategic partnerships with top technology vendors.
          </p>
      {/*    <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span>50+ Certified Professionals</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Star className="w-4 h-4" />
              <span>Gold-Level Partnerships</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <TrendingUp className="w-4 h-4" />
              <span>Continuous Learning</span>
            </div>
          </div>  */}
        </div>
      </section>

      {/* Certifications by Category */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Team Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Industry-recognized expertise across all major technology platforms
            </p>
          </div>
          
          <div className="space-y-12">
            {certifications.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.certifications.map((cert, certIndex) => (
                    <div key={certIndex} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm leading-tight">{cert.name}</h4>
                        </div>
                    {/*    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(cert.level)}`}>
                          {cert.level}
                        </span>   */}
                      </div>
                  {/*    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{cert.holders} certified team members</span>
                      </div>*/}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Trusted partnerships that enhance our service delivery capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{partnership.name}</h3>
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {partnership.level} Level
                  </span>
                </div>
                <p className="text-gray-600 text-center mb-6">{partnership.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Partnership Benefits:</h4>
                  <ul className="space-y-2">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Commitment to Excellence
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Commitment to Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We invest heavily in our team's continuous learning and certification maintenance. This ensures we stay current with the latest platform updates, best practices, and emerging technologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Quarterly certification updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Annual training budget per team member</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Regular vendor training sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Industry conference participation</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-gray-600">Active Certifications</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-gray-600">Certification Maintenance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Work with Certified Experts
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the confidence that comes with working with industry-certified professionals.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Connect with Our Experts</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default CertificationsPage;