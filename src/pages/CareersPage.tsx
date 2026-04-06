import React from 'react';
import { 
  Users, 
  Award, 
  MapPin,
  TrendingUp,
  HeartPulse,
  GraduationCap,
  Handshake
} from 'lucide-react';

const CareersPage = () => {
  const culture = [
    {
      title: 'Career Growth',
      description: 'We provide clear career paths, mentorship, and opportunities for advancement so our team members can grow with us.',
      icon: TrendingUp,
      color: 'bg-blue-800'
    },
    {
      title: 'Work-Life Balance',
      description: 'We value personal well-being and support flexible working to ensure a healthy balance between work and life.',
      icon: HeartPulse,
      color: 'bg-blue-800'
    },
    {
      title: 'Learning & Development',
      description: 'We foster continuous learning with access to training, certifications, and resources to develop new skills and knowledge.',
      icon: GraduationCap,
      color: 'bg-blue-800'
    },
    {
      title: 'Collaborative Environment',
      description: 'Open communication, knowledge sharing, and teamwork are at the heart of our culture.',
      icon: Handshake,
      color: 'bg-blue-800'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1798c1] to-[#223794]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            "Build What’s Next With Us"
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            We believe success comes from people who are curious, creative, and collaborative. 
            If you’re passionate about making a difference, you’ll feel right at home here.
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>7+ Team Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Remote-First Culture</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Top Employer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#223794] mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that great work comes from great people in a supportive environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((value, index) => (
              <div 
                key={index} 
                className="text-center border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition"
              >
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities + Application Form Side by Side */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-12">
            
            {/* Opportunities Info */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-[#223794] mb-6 text-center">Opportunities With Us</h2>
              <div className="w-full h-full min-h-[400px] bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We’re always excited to meet passionate talents ready to grow and innovate.<br />
                  If you’re eager to make an impact and showcase your skills,<br />
                  share your <span className="font-semibold text-[#1798c1]">resume</span> and 
                  <span className="font-semibold text-[#1798c1]"> portfolio link</span> to:  
                  <br />
                  <span className="block mt-4 text-[#223794] font-bold">info@impviser.com</span>
                </p>
              </div>
            </div>

            {/* Application Form */}
            <div className="flex-1 flex flex-col">
              <h2 className="text-3xl font-bold text-[#223794] mb-6 text-center lg:text-center">Application Form</h2>
              <form className="w-full h-full min-h-[400px] bg-white p-10 rounded-2xl shadow-lg flex flex-col justify-center space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1798c1]" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1798c1]" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                  <textarea className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1798c1]" rows="5" placeholder="Write a short cover letter..."></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="px-6 py-3 bg-[#223794] text-white rounded-lg font-medium hover:opacity-90">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
