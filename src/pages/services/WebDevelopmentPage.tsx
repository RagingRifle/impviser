import React from "react";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react"; // Removed ArrowRight import
import SEO from "../../components/SEO";

const WebAppDevelopmentPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Web Application Development Services | Impviser"
        description="Custom web application development with modern frameworks. Responsive, scalable, and SEO-friendly web apps built by Impviser."
        canonical="/services/web-app-development"
      />
      {/* Hero Section with Background Image */}
      <section
        className="py-20 bg-cover bg-center text-white relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-cyan-200 font-medium">
                Web App Development by Impviser
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Transform Ideas into Functional Web Apps
            </h1>
            <p className="text-xl text-cyan-100 leading-relaxed mb-8">
              In today's digital age, web app development is the cornerstone of
              online success. Engage users, streamline processes, and achieve
              business objectives with Impviser’s expert services.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
            >
              <span>Get Started</span>
            </Link>
          </div>

          {/* Removed the right-side image completely */}
        </div>
      </section>
      
      {/* Section 1 - How It Works */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Image Left (always first on mobile) */}
    <div className="order-1 lg:order-none w-full">
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        alt="Planning Strategy"
        className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
      />
    </div>
    {/* Text Right */}
    <div className="order-2 lg:order-none w-full">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        How It Works
      </h2>
      <p className="text-lg text-gray-700 mb-4 text-justify">
        Our web app development process is carefully designed to deliver
        both quality and efficiency. It begins with detailed planning and
        strategy sessions where we align your business goals with a clear
        roadmap. This ensures every step of the process has direction and
        purpose. We then move into design and prototyping, focusing on
        user-friendly interfaces and smooth navigation. At this stage, we
        create interactive prototypes so you can visualize the app and
        make adjustments before coding begins. Once the design is
        finalized, our developers build the application using scalable
        frameworks and efficient coding practices. We prioritize speed,
        security, and maintainability so your web app can grow along with
        your business. Rigorous testing and quality assurance follow,
        where we conduct performance checks, security audits, and user
        testing.
      </p>
    </div>
  </div>
</section>

{/* Section 2 - Technologies */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Text Left (mobile: after image!) */}
    <div className="order-2 lg:order-none w-full">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        Technologies We Use
      </h2>
      <p className="text-lg text-gray-700 mb-4 text-justify">
        At Impviser, we rely on a modern technology stack to craft web
        applications that are fast, secure, and highly scalable. Our
        approach ensures that each solution is not only tailored to your
        current needs but is also ready for future growth. From front-end
        technologies like HTML5, CSS3, and JavaScript to advanced
        frameworks such as React, Angular, and Vue.js, we deliver
        interactive and visually appealing user experiences. On the
        back-end, we use Node.js, Python, and Django to build reliable and
        high-performance applications. We also specialize in integrating
        REST APIs and GraphQL for smooth communication between systems and
        utilize cloud platforms like AWS, Azure, and Google Cloud to make
        your applications flexible, secure, and globally accessible.
      </p>
    </div>
    {/* Image Right (mobile: always first) */}
    <div className="order-1 lg:order-none w-full">
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        alt="Technologies"
        className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
      />
    </div>
  </div>
</section>

{/* Section 3 - Benefits */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Image Left (mobile: always first) */}
    <div className="order-1 lg:order-none w-full">
      <img
        src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
        alt="Benefits"
        className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
      />
    </div>
    {/* Text Right */}
    <div className="order-2 lg:order-none w-full">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        Why Choose Impviser for Web App Development?
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed text-justify">
        Choosing the right partner for web app development can make all
        the difference in turning your vision into a successful digital
        solution. At Impviser, we combine technical expertise with a deep
        understanding of user experience and business goals. Our team
        ensures that every project we deliver is secure, scalable, and
        tailored to meet your unique requirements. With a focus on
        innovation, quality, and timely delivery, we empower businesses to
        enhance productivity, engage their customers more effectively, and
        stay ahead in the competitive digital landscape. From startups to
        enterprises, Impviser is committed to building web applications
        that create lasting impact and measurable growth.
      </p>
    </div>
  </div>
</section>

     
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Web App with Impviser?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Share your requirements with us and let’s bring your idea to life.
          </p>
          <Link
            to="/contact"
            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-flex items-center"
          >
            <span>Get Started</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebAppDevelopmentPage;
