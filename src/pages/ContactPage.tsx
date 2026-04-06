
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle,Layers } from 'lucide-react';
import { Link } from "react-router-dom";
import contact from "../assets/contact.png"
import SEO from "../components/SEO";
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [status, setStatus] = useState("");




  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    let value = e.target.value;
  if (e.target.name === "phone" && !value.startsWith("+")) {
    value = "+91 " + value.replace(/\D/g, "");
  }
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("https://impviser-back.onrender.com/api/hubspot-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <SEO
        title="Contact Us | Get a Free Consultation | Impviser"
        description="Reach out to Impviser for a free Salesforce consultation. Email, call, or visit us in Trichy, Tamil Nadu. We respond within 2 hours."
        canonical="/contact"
      />
      {/* HERO */}
      <section className="py-16 bg-gradient-to-br from-[#17a5d4]/20 via-[#3450a1]/20 to-[#3ce75e]/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#223794] mb-4">
            Your Future, Our Expertise
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Let’s shape your success together. Connect with us for a free consultation and start your journey toward transformation.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT: Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-[#223794] mb-6">Connect With Us</h2>

              {isSubmitted && (
                <div className="mb-4 p-3 rounded-lg bg-green-100 border border-green-200 text-green-700 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Thank you! We'll get back to you within 24 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#223794] mb-2">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1798c1] focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#223794] mb-2">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1798c1] focus:border-transparent transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#223794] mb-2">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1798c1] focus:border-transparent transition"
                  />
                </div>

                

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#223794] mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and how we can help..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1798c1] focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#223794] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-95 transition"
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Get in Touch
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT: Illustration + Info */}
            <div className="space-y-6">
              
              {/* Illustration */}
              <div className="flex justify-center">
                <img 
                  src={contact}
                  alt="Contact illustration"
                  className="max-w-sm"
                />
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Email */}
                <div className="p-6 border rounded-xl bg-[#e6f7fc] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#1798c1]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#223794]">Email</h3>
                      <p className="text-gray-700">info@impviser.com</p>
                      <p className="text-sm text-gray-500">Response within 2 hours</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-6 border rounded-xl bg-[#e8fbe9] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full  flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#2ad546]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#223794]">Phone</h3>
                      <p className="text-gray-700">+919363039754</p>
                      <p className="text-sm text-gray-500">Mon - Fri, 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="p-6 border rounded-xl bg-[#edf0fb] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#223794]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#223794]">Address</h3>
                      <p className="text-gray-700">No-9/3604-17, Third Floor, KN NEST, Lalgudi Road, No 1 Tollgate,
Trichy, Tamil Nadu – 621 216</p>
                      <p className="text-sm text-gray-500">By appointment only</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-6 border rounded-xl bg-[#f1f9ff] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#1798c1]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#223794]">Business Hours</h3>
                      <p className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-gray-500">Support available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
             <div className="bg-[#f0f9f5] p-5 rounded-xl">
  <div className="flex gap-4 justify-center">
    <a 
      href="mailto:info@impviser.com" 
      className="flex items-center gap-2 px-6 py-3 bg-[#223794] text-white rounded-lg font-medium hover:opacity-95 transition"
    >
      <Mail size={18} /> Email Now
    </a>

    <a 
      href="tel:+9193630 39754" 
      className="flex items-center gap-2 px-6 py-3 bg-[#23b73b] text-white rounded-lg font-medium hover:opacity-95 transition"
    >
      <Phone size={18} /> Call Now
    </a>

    <Link 
      to="/services" 
      className="flex items-center gap-2 px-6 py-3 bg-[#1798c1]  text-white rounded-lg font-medium hover:opacity-95 transition"
    >
      <Layers size={18} /> Explore Services
    </Link>
  </div>
</div>
            </div>
                ``
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6 text-gray-800"> Our Location</h2>
    <p className="text-lg text-gray-600 mb-10">
      No-9/3604-17, Third Floor, KN NEST, Lalgudi Road, No 1 Tollgate, Tiruchirappalli, Tamil Nadu – 621 216
    </p>

    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1751442649684!2d78.70805067485841!3d10.874279789280472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf70ebec3267d%3A0xe281ec72d476f74c!2sKN%20Nest!5e0!3m2!1sen!2sin!4v1760289670464!5m2!1sen!2sin"
    className="w-full h-full"
    allowFullScreen
    loading="lazy"
    title="KN Nest Location Map"
  ></iframe>
</div>

  </div>
</section>

    </div>
  );
};

export default ContactPage;
