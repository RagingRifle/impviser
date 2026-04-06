import React from "react";
import { Link } from "react-router-dom";
import { Users, Target, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { FaHandshake, FaShieldAlt, FaLightbulb, FaUsers } from "react-icons/fa";
import about from "../assets/about.jpg"
import social from "../assets/social.webp"
import office from "../assets/office.jpg"
import SEO from "../components/SEO";



const AboutPage = () => {
  const values = [
    {
      icon: <FaHandshake className="w-10 h-10 text-white" />,
      title: "Customer Success",
      description:
        "Your success defines ours. We are dedicated to understanding your business needs and delivering solutions that create measurable value and long-term impact.",
      color: "from-[#223794] to-[#29ec48]",
    },
    {
      icon: <FaShieldAlt className="w-10 h-10 text-white" />,
      title: "Integrity & Trust",
      description:
        "Trust is the foundation of enduring relationships. Guided by integrity, transparency, and professionalism, we put client goals first and honor every commitment with accountability and excellence.",
      color: "from-[#29ec48] to-[#223794]",
    },
    {
      icon: <FaLightbulb className="w-10 h-10 text-white" />,
      title: "Innovation",
      description:
        "We embrace creativity and forward-thinking, leveraging Salesforce and emerging technologies to deliver solutions that inspire progress and keep businesses future-ready.",
      color: "from-[#223794] to-[#29ec48]",
    },
    {
      icon: <FaUsers className="w-10 h-10 text-white" />,
      title: "Collaboration",
      description:
        "We believe success is built together. Through teamwork, open communication, and shared vision, we create strong partnerships that achieve meaningful outcomes.",
      color: "from-[#29ec48] to-[#223794]",
    },
  ];

  const team = [
    { name: "Ramesh R", role: "Founder & CEO", experience: "15+ Years", certifications: ["Salesforce Certified"] },
    { name: "Vinith L", role: "Technical Lead", experience: "10+ Years", certifications: ["Azure Certified"] },
    { name: "Gowtham V", role: "Module Lead", experience: "8+ Years", certifications: ["AWS Certified"] },
    { name: "Chandhru G", role: "Solutions Expert", experience: "7+ Years", certifications: ["Google Cloud Certified"] },
    { name: "Siva S", role: "Delivery & Support Specialist", experience: "6+ Years", certifications: ["ITIL Certified"] },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-blue-50 to-green-50">
      <SEO
        title="About Impviser | Trusted Salesforce Consulting Partner"
        description="Learn about Impviser's mission, values, and certified team dedicated to Salesforce and digital transformation."
        canonical="/about"
      />
      {/* Hero Section */}
       <section
      className="py-48 relative overflow-hidden text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${office})` }}
    >
      {/* Overlay if needed */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide">
          About Impviser
        </h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
          Implement Vision. Empower Business.
        </p>
      </div>
    </section>


{/* About Us Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Image / Illustration */}
    <div>
      <img
        src={about} // 👉 replace with your own image path
        alt="Impviser Team"
        className="rounded-2xl shadow-lg"
      />
    </div>

    {/* Text Content */}
    <div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        About Us – 
      </h2>
      
      <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
        Impviser is a trusted Salesforce consulting company dedicated to helping
        businesses unlock the full potential of the Salesforce ecosystem. With
        proven expertise and a team of certified professionals, we deliver
        innovative, customer-focused solutions that create measurable business value.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
        We combine technical excellence with business insight to ensure every
        solution fits your goals. Whether it’s implementation, integration,
        customization, or optimization, we partner with you throughout your
        Salesforce journey to drive measurable growth.
      </p>
  
    </div>
  </div>
</section>


{/* Mission & Vision */}
<section className="py-20 bg-blue-900 text-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Mission */}
    <div className="p-10 rounded-2xl shadow-xl bg-blue-800 border border-gray-700 hover:shadow-2xl transition">
      <div className="flex items-center gap-4 mb-6">
        
        <h2 className="text-3xl font-bold text-white">Our Mission</h2>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
      Empowering businesses to achieve success by delivering innovative CRM solutions, exceptional services, and seamless digital experiences. </p>
      <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
      We are committed to building a skilled and passionate team, fostering a culture of collaboration and continuous learning, and creating lasting value for our customers, employees, and communities.   </p>
    </div>

    {/* Vision */}
    <div className="p-10 rounded-2xl shadow-xl bg-blue-800 border border-gray-700 hover:shadow-2xl transition">
      <div className="flex items-center gap-4 mb-6">
       
        <h2 className="text-3xl font-bold text-white">Our Vision</h2>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
     To help organizations worldwide unlock the full potential of their customer   relationships through innovative CRM solutions and digital transformation.
   </p>
    </div>
  </div>
</section>



      {/* Values */}
 <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Core Values</h2>
    <p className="text-lg text-gray-600 mb-16">
      The principles that drive our culture, decisions, and client partnerships.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {values.map((value, index) => (
        <div
          key={index}
          className="p-1 rounded-2xl hover:scale-105 transition-transform"
        >
          <div className="h-full bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-900 shadow-lg">
              {React.cloneElement(value.icon, { className: "w-10 h-10 text-[#ffff]" })}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
            <p className="text-gray-600 text-justify">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Team 
    <section className="py-20 bg-sky-100 text-gray-900">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
    <p className="text-xl text-gray-600 mb-16">
      Industry veterans with deep expertise and proven track records
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {team.map((member, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1"
        >
         
          <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-[#223794] flex items-center justify-center shadow-md">
           
          </div>

          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
          <p className="text-[#000000] font-medium mb-2">{member.role}</p>
          <p className="text-gray-500 text-sm mb-4">{member.experience}</p>

          <div className="flex flex-wrap justify-center gap-2">
            {member.certifications.map((cert, i) => (
              <span
                key={i}
                className="text-xs bg-[#c5c5c5]/20 text-[#000000] px-3 py-1 rounded-full inline-block"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>*/}


      {/* Social Impact / CSR Section */}
<section className="py-20  bg-sky-100">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
    {/* Text Content */}
    <div>
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Social Impact</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
        At Impviser, we believe in making a difference beyond business. Through our corporate 
        social responsibility (CSR) initiatives, we are committed to giving back to the communities 
        and environment around us.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
        We focus on supporting local initiatives and organizations that often go unnoticed or 
        underserved by larger institutions, ensuring that the less fortunate receive equal care and 
        opportunity. Guided by the values of our team, we listen to employees’ priorities and 
        embrace the causes that matter most.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <span className="text-xs bg-sky-300 text-black px-3 py-1 rounded-full inline-block">
          Community Support
        </span>
        <span className="text-xs bg-sky-300 text-black px-3 py-1 rounded-full inline-block">
          Environment
        </span>
        <span className="text-xs bg-sky-300 text-black px-3 py-1 rounded-full inline-block">
          Employee Initiatives
        </span>
      </div>
    </div>

    {/* Image / Illustration */}
    <div>
      <img
        src={social} // replace with your CSR image path
        alt="Social Impact"
        className="rounded-2xl shadow-lg"
      />
    </div>
  </div>
</section>



    </div>
  );
};

export default AboutPage;
