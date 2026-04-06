import React from "react";
import { Link } from "react-router-dom";

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="relative py-32 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-10">{title}</h1>
            <p className="text-xl text-white leading-relaxed mb-14">{subtitle}</p>


            <Link
              to={buttonLink}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
