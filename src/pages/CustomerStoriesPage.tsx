import React from 'react';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, Users, Clock, ArrowRight, Building2, Heart, Factory } from 'lucide-react';

const CustomerStoriesPage = () => {
  const stories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      icon: Building2,
      challenge: 'Struggling with disconnected sales and marketing processes, leading to lost leads and poor customer experience.',
      solution: 'Implemented Salesforce Sales Cloud with Marketing Automation and custom integrations to existing systems.',
      results: [
        { metric: '45%', description: 'Increase in lead conversion' },
        { metric: '60%', description: 'Reduction in sales cycle time' },
        { metric: '30%', description: 'Improvement in customer satisfaction' }
      ],
      quote: "Winfomi transformed our entire sales process. The results exceeded our expectations and the team was professional throughout.",
      author: "Sarah Johnson",
      title: "VP of Sales",
      timeline: "3 months",
      teamSize: "50+ users"
    },
    {
      company: 'Regional Medical Center',
      industry: 'Healthcare',
      icon: Heart,
      challenge: 'Manual patient management processes causing delays in care delivery and poor patient experience.',
      solution: 'Deployed Salesforce Health Cloud with custom patient management workflows and provider communication tools.',
      results: [
        { metric: '50%', description: 'Reduction in patient wait times' },
        { metric: '35%', description: 'Improvement in care coordination' },
        { metric: '25%', description: 'Increase in patient satisfaction scores' }
      ],
      quote: "The patient management system has revolutionized how we deliver care. Our staff is more efficient and patients are happier.",
      author: "Dr. Michael Chen",
      title: "Chief Medical Officer",
      timeline: "4 months",
      teamSize: "200+ users"
    },
    {
      company: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      icon: Factory,
      challenge: 'Lack of visibility into supply chain operations and customer service inefficiencies across multiple locations.',
      solution: 'Implemented Salesforce Manufacturing Cloud with supply chain visibility tools and service automation.',
      results: [
        { metric: '40%', description: 'Improvement in supply chain visibility' },
        { metric: '55%', description: 'Reduction in service response time' },
        { metric: '20%', description: 'Increase in customer retention' }
      ],
      quote: "Winfomi's expertise in manufacturing processes was evident from day one. They understood our unique challenges and delivered solutions that work.",
      author: "Emily Rodriguez",
      title: "Operations Director",
      timeline: "6 months",
      teamSize: "300+ users"
    }
  ];

  const metrics = [
    { number: '98%', label: 'Client Satisfaction Rate', icon: Star },
    { number: '500+', label: 'Successful Projects', icon: TrendingUp },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '5 Years', label: 'Average Client Relationship', icon: Clock },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Customer Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Real businesses, real challenges, real results. See how we've helped organizations across industries achieve their digital transformation goals.
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start Your Success Story</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.number}</div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Story Content */}
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <story.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{story.company}</h2>
                          <p className="text-blue-600 font-medium">{story.industry}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h3>
                          <p className="text-gray-600 leading-relaxed">{story.challenge}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Solution</h3>
                          <p className="text-gray-600 leading-relaxed">{story.solution}</p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl">
                          <blockquote className="text-gray-700 italic mb-4">
                            "{story.quote}"
                          </blockquote>
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                              <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{story.author}</div>
                              <div className="text-gray-600 text-sm">{story.title}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-6">Results Achieved</h3>
                      <div className="space-y-6 mb-8">
                        {story.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-4">
                            <div className="text-3xl font-bold text-blue-600">{result.metric}</div>
                            <div className="text-gray-600">{result.description}</div>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <Clock className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                          <div className="font-semibold text-gray-900">{story.timeline}</div>
                          <div className="text-gray-600 text-sm">Implementation Time</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <Users className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                          <div className="font-semibold text-gray-900">{story.teamSize}</div>
                          <div className="text-gray-600 text-sm">System Users</div>
                        </div>
                      </div>

                      <Link 
                        to="/contact" 
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <span>Discuss Similar Project</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses of all sizes across multiple industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The team's expertise and professionalism made our Salesforce implementation seamless. Highly recommended!",
                author: "Jennifer Walsh",
                title: "CTO, InnovateLabs",
                rating: 5
              },
              {
                quote: "Outstanding results and exceptional support. They truly understand business needs and deliver accordingly.",
                author: "Robert Kim",
                title: "Director of Operations, GrowthCo",
                rating: 5
              },
              {
                quote: "Professional, knowledgeable, and delivered exactly what we needed on time and within budget.",
                author: "Lisa Thompson",
                title: "VP of Technology, DataFlow Inc",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the growing list of satisfied clients who have transformed their business with our help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerStoriesPage;