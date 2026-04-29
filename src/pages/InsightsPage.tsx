import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, TrendingUp, Lightbulb, BookOpen, Clock } from 'lucide-react';
import SEO from "../components/SEO";

const InsightsPage = () => {
  const featuredPost = {
    title: 'The Future of Salesforce: AI and Automation Trends for 2025',
    excerpt: 'Explore the latest AI capabilities in Salesforce and how businesses can leverage automation to drive growth and efficiency.',
    author: 'Alex Thompson',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Salesforce',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
  };

 const posts = [
  {
    title: 'What to Expect During a Salesforce Migration (And How to Make It Go Smoothly)',
    excerpt: 'A complete walkthrough of the Salesforce migration process, from planning and data cleanup to training and post-launch support.',
    author: 'Impviser Team',
    date: '—',
    readTime: '7 min read',
    category: 'Salesforce Migration',
    slug: '/insights/salesforce-migration-guide',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: "Still Using a Legacy CRM? Here's Why It Might Be Holding Your Business Back",
    excerpt: 'Legacy CRMs can slow down growth with scattered data, manual work, and poor visibility. Learn why modern CRM systems are essential.',
    author: 'Impviser Team',
    date: '—',
    readTime: '7 min read',
    category: 'CRM Strategy',
    slug: '/insights/legacy-crm-holding-business-back',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Salesforce vs HubSpot vs Zoho: Which CRM Is Actually Right for Your Business?',
    excerpt: 'An honest comparison of Salesforce, HubSpot, and Zoho to help you choose the right CRM based on your business size and needs.',
    author: 'Impviser Team',
    date: '—',
    readTime: '7 min read',
    category: 'CRM Comparison',
    slug: '/insights/salesforce-vs-hubspot-vs-zoho',
    image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

  const categories = [
    'All Posts',
    'Salesforce',
    'Implementation',
    'Strategy',
    'AI/ML',
    'Analytics',
    'Security',
    'Mobile'
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Insights & Resources | Salesforce & CRM Best Practices | Impviser"
        description="Expert insights on Salesforce trends, CRM strategy, AI automation, and digital transformation. Stay ahead with Impviser thought leadership."
        canonical="/insights"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Insights & Resources
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay ahead of the curve with expert insights, best practices, and thought leadership on the latest technology trends and implementation strategies.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-blue-200">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Expert Insights</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Industry Trends</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-4 h-4" />
              <span>Best Practices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-2xl overflow-hidden text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Article
                </div>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-blue-100 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex items-center space-x-6 text-sm text-blue-200 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-blue-800 text-white' 
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>
<Link 
  to={post.slug}
  className="text-blue-800 font-medium hover:text-blue-900 transition-colors duration-200 flex items-center space-x-2 group"
>
  <span>Read More</span>
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 lg:p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Insights
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest industry insights, best practices, and technology updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
              />
              <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section 
      <section className="py-20 bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Expert Guidance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is ready to help you implement the strategies and best practices discussed in our insights.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>*/}
    </div>
  );
};

export default InsightsPage;
