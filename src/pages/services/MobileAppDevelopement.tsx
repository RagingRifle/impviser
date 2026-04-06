import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Code, Cpu, Shield, Rocket } from 'lucide-react';
import SEO from "../../components/SEO";

const MobileAppDevelopment = () => {
  const benefits = [
    { icon: Code, title: 'Crafted with Care', desc: 'Built thoughtfully, not rushed' },
    { icon: Cpu, title: 'Smart Tech', desc: 'Always the latest tools' },
    { icon: Shield, title: 'Safe & Secure', desc: 'Your data stays yours' },
    { icon: Rocket, title: 'Fast Launch', desc: 'From idea to reality quickly' }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Mobile App Development | iOS & Android | Impviser"
        description="Custom mobile application development for iOS and Android. Cross-platform apps built with Flutter and React Native by Impviser."
        canonical="/services/mobile-app-development"
      />

      {/* Hero with background image */}
      <section
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-left">
          <div className="flex justify-start mb-6">
            
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Mobile App Development That Feels Human
          </h1>
          <p className="text-lg text-pink-100 leading-relaxed mb-6">
            We don’t just build apps — we craft experiences. Our team designs apps that feel natural,
            intuitive, and built with care. From early ideas to launch, we walk with you at every step.
            Every line of code we write, every interface we design, and every interaction we shape
            is guided by one goal: creating meaningful digital products that people love to use.
            Whether you’re a startup with a fresh idea or an established brand looking to innovate,
            we ensure your app not only functions seamlessly but also leaves a lasting impression.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition"
          >
            Let’s Talk
          </Link>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Business team collaborating on mobile app ideas"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Paragraph */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
              We design and develop mobile applications that go beyond functionality —
              we focus on creating smooth, human-centered experiences. Every app we build
              is tailored to meet business needs while ensuring users love the journey.
              From intuitive interfaces to seamless integrations, our goal is to deliver
              apps that don’t just work — they delight. Whether you need a custom business
              tool, a customer-facing app, or an innovative product, we’ve got you covered.
              Our process is collaborative, transparent, and focused on results.
              Together, we transform your vision into an app that feels natural and
              performs beautifully.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why People Love Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 rounded-xl border bg-gray-50 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-blue-800" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech We Trust */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tech We Trust</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 max-w-3xl mx-auto text-justify">
            Behind every great app is a powerful technology stack. We carefully choose frameworks and tools 
            that ensure scalability, speed, and security — so your app is ready for today and tomorrow.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            From cross-platform solutions like <span className="font-semibold">React Native</span> 
            and <span className="font-semibold">Flutter</span>, to native development in 
            <span className="font-semibold"> Swift</span> and <span className="font-semibold">Kotlin</span>, 
            we use tech that aligns with your vision. Our backend choices like 
            <span className="font-semibold"> Firebase</span>, <span className="font-semibold">Node.js</span>, 
            and cloud platforms ensure apps that perform, adapt, and scale with ease.
          </p>
        </div>
      </section>

      {/* Process Section */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-16">
      Our Mobile App Development Full-fledged Process
    </h2>

    <div className="flex flex-col md:flex-row md:justify-between md:items-start relative">
      {/* horizontal connector line for desktop */}
      <div className="hidden md:block absolute top-[45px] left-0 w-full h-[2px] bg-gray-200 z-0"></div>

      {/* vertical connector line for mobile */}
      <div className="absolute md:hidden left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 z-0 transform -translate-x-1/2"></div>

      {[
        {
          title: "Conceptualization",
          points: ["Ideation", "Planning", "Strategy"],
        },
        {
          title: "Design",
          points: ["UI/UX", "Prototyping", "Branding"],
        },
        {
          title: "Development",
          points: ["Coding", "Testing", "Refinement"],
        },
        {
          title: "Deployment",
          points: ["Launch Design", "Distribution", "Optimization"],
        },
      ].map((step, i) => (
        <div
          key={i}
          className="relative z-10 bg-white shadow-md rounded-2xl p-6 md:p-8 flex flex-col justify-between items-start text-left mb-10 md:mb-0 md:flex-1 md:mx-2 min-h-[240px]"
        >
          {/* step indicator dot */}
          <div className="absolute md:static left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 -top-5 md:-mt-12 bg-blue-600 text-white font-semibold w-10 h-10 flex items-center justify-center rounded-full shadow-md">
            {i + 1}
          </div>

          <div className="w-full flex flex-col justify-between">
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-4 text-center md:text-left">
              {step.title}
            </h3>
            <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside pl-2 md:pl-4 w-full">
              {step.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





      {/* CTA 
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Let’s Build Something Meaningful</h2>
        <p className="text-gray-600 mb-8">Apps that matter. For people who care.</p>
        <Link
          to="/contact"
          className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Start Now
        </Link>
      </section>*/}
    </div>
  );
};

export default MobileAppDevelopment;
