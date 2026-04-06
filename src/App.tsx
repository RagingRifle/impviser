import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Favicon from "./components/Favicon";   // <-- add this import
// Pages...
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";
import ProcessPage from "./pages/ProcessPage";
import CertificationsPage from "./pages/CertificationsPage";
import CustomerStoriesPage from "./pages/CustomerStoriesPage";
import InsightsPage from "./pages/InsightsPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

// Individual Service Pages...
import SalesforceConsultingPage from "./pages/services/SalesforceConsultingPage";
import SalesforceMigrationPage from "./pages/services/SalesforceMigrationPage";
import SalesforceIntegrationPage from "./pages/services/SalesforceIntegrationPage";
import AppExchangePage from "./pages/services/AppExchangePage";
import SalesforceAdminSupportPage from "./pages/services/SalesforceAdminSupportPage";
import SalesforceCPQPage from "./pages/services/SalesforceCPQPage";
import SalesforceDevelopmentPage from "./pages/services/SalesforceDevelopmentPage";
import SalesforceIssueSupportPage from "./pages/services/SalesforceIssueSupportPage";
import DataAnalyticsPage from "./pages/services/DataAnalyticsPage";
import HireSalesforceExpertPage from "./pages/services/HireSalesforceExpertPage";
import AIPoweredSalesforcePage from "./pages/services/AIPoweredSalesforcePage";
import ZohoPage from "./pages/services/ZohoPage";
import HubSpotPage from "./pages/services/HubSpotPage";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopement";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import PowerBIPage from "./pages/services/PowerBIPage";
import TableauPage from "./pages/services/TableauPage"; 



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Favicon />   {/* <-- your favicon is applied here */}
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/customer-stories" element={<CustomerStoriesPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Individual Service Pages */}
            <Route path="/services/salesforce-consulting" element={<SalesforceConsultingPage />} />
            <Route path="/services/salesforce-migration" element={<SalesforceMigrationPage />} />
            <Route path="/services/salesforce-integration" element={<SalesforceIntegrationPage />} />
            <Route path="/services/appexchange-development" element={<AppExchangePage />} />
            <Route path="/services/salesforce-admin-support" element={<SalesforceAdminSupportPage />} />
            <Route path="/services/salesforce-cpq-implementation" element={<SalesforceCPQPage />} />
            <Route path="/services/salesforce-development" element={<SalesforceDevelopmentPage />} />
            <Route path="/services/salesforce-issue-support" element={<SalesforceIssueSupportPage />} />
            <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
            <Route path="/services/hire-salesforce-expert" element={<HireSalesforceExpertPage />} />
            <Route path="/services/ai-powered-salesforce" element={<AIPoweredSalesforcePage />} />
            <Route path="/services/zoho" element={<ZohoPage />} />
            <Route path="/services/hubspot" element={<HubSpotPage />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/web-app-development" element={<WebDevelopmentPage />} />
            <Route path="/services/power-bi" element={<PowerBIPage />} />
            <Route path="/services/tableau" element={<TableauPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
