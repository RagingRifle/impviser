import { Helmet } from "react-helmet-async";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Impviser",
    legalName: "Impviser Technologies",
    url: "https://impviser.com",
    logo: "https://impviser.com/impviser_logo.png",
    description:
      "Impviser is a certified Salesforce consulting company offering CRM, AI, data analytics, and custom app development solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No-9/3604-17, Third Floor, KN NEST, Lalgudi Road, No 1 Tollgate",
      addressLocality: "Tiruchirappalli",
      addressRegion: "Tamil Nadu",
      postalCode: "621216",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919363039754",
      contactType: "sales",
      email: "info@impviser.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/impviser-technologies/",
      "https://x.com/impviser",
      "https://www.instagram.com/impviserofficial",
    ],
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 7,
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 10.8743,
        longitude: 78.7081,
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default OrganizationSchema;
