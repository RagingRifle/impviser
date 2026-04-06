import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle, ArrowRight, Zap, TrendingUp, Shield, Clock, Bot } from 'lucide-react';

const AIMLAgentsPage = () => {
  const solutions = [
    {
      title: 'Intelligent Chatbots',
      description: 'AI-powered customer service and support automation',
      features: ['Natural language processing', '24/7 customer support', 'Multi-language support', 'Seamless handoff to humans']
    },
    {
      title: 'Predictive Analytics',
      description: 'Machine learning models for business forecasting and insights',
      features: ['Sales forecasting', 'Customer churn prediction', 'Demand planning', 'Risk assessment']
    },
    {
      title: 'Process Automation',
      description: 'Intelligent automation of repetitive business processes',
      features: ['Document processing', 'Data entry automation', 'Workflow optimization', 'Exception handling']
    },
    {
      title: 'Recommendation Engines',
      description: 'Personalized recommendations for customers and internal users',
      features: ['Product recommendations', 'Content personalization', 'Next best action', 'Cross-sell optimization']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '40% Efficiency Gain',
      description: 'Average productivity improvement through intelligent automation'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'AI agents work around the clock to serve your customers'
    },
    {
      icon: Brain,
      title: 'Continuous Learning',
      description: 'Models improve over time with more data and interactions'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built with enterprise-grade security and compliance standards'
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      challenge: 'Manual customer support overwhelming team',
      solution: 'AI chatbot handling 80% of customer inquiries',
      result: '60% reduction in support costs'
    },
    {
      industry: 'Financial Services',
      challenge: 'Fraud detection taking too long',
      solution: 'Real-time ML fraud detection system',
      result: '95% fraud detection accuracy'
    },
    {
      industry: 'Healthcare',
      challenge: 'Patient scheduling inefficiencies',
      solution: 'AI-powered scheduling optimization',
      result: '30% improvement in appointment utilization'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-purple-200 font-medium">AI/ML & AI Agents</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                AI/ML Solutions & Intelligent Agents
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed mb-8">
                Transform your business operations with cutting-edge artificial intelligence and machine learning solutions. From intelligent chatbots to predictive analytics, we build AI that drives real business value.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Bot className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium">Intelligent Business Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our AI/ML Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions designed to automate processes and enhance decision-making
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Capabilities:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              AI Implementation Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Measurable impact on your business operations and outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              See how AI is transforming businesses across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.industry}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">AI Solution:</h4>
                    <p className="text-gray-600 text-sm">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Result:</h4>
                    <p className="text-green-600 font-semibold text-sm">{useCase.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our AI/ML Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              We work with the latest and most powerful AI/ML platforms and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'TensorFlow',
              'PyTorch',
              'OpenAI GPT',
              'AWS SageMaker',
              'Google AI Platform',
              'Azure ML',
              'Hugging Face',
              'LangChain',
              'Pinecone',
              'Anthropic Claude',
              'Salesforce Einstein',
              'Python/R'
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's explore how AI and machine learning can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200"
            >
              Discuss AI Strategy
            </Link>
            <Link 
              to="/customer-stories" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
            >
              View AI Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMLAgentsPage;