import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
      <SEO
        title="Page Not Found | Impviser"
        description="The page you're looking for doesn't exist. Return to the Impviser homepage to explore our Salesforce consulting and CRM solutions."
        noindex={true}
      />
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-[#223794] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#223794] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a2b73] transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
