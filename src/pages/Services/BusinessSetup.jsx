import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";

const BusinessSetup = () => {
  return (
    <>
      {/* Breadcrumb */}
      <ServiceBreadcrumb service="Business Setup" />

      {/* Banner */}
      <ServiceBanner
        title="Business Setup & Company Registration Services"
        description="End-to-end assistance for company incorporation, registrations, and compliance to help you start your business the right way."
        ctaText="Start Your Business"
      />

      {/* Content */}
      <ServiceContent
        heading="What is Business Setup?"
        content={[
          "Business setup involves choosing the right legal structure and completing mandatory registrations.",
          "We assist with company incorporation, LLP registration, GST, PAN, TAN, and other statutory compliances.",
          "Our experts ensure a smooth and hassle-free setup so you can focus on growing your business."
        ]}
      />

      {/* Highlights */}
      <ServiceHighlights
        items={[
          {
            icon: "🏢",
            title: "Company Incorporation",
            text: "Private Limited, LLP & Partnership firms",
          },
          {
            icon: "📄",
            title: "Statutory Registrations",
            text: "PAN, TAN, GST & other licenses",
          },
          {
            icon: "🚀",
            title: "Startup Advisory",
            text: "Business structuring & compliance planning",
          },
          {
            icon: "🧾",
            title: "Accounting Setup",
            text: "Books of accounts & system setup",
          },
          {
            icon: "🤝",
            title: "Ongoing Support",
            text: "Compliance & advisory post setup",
          },
        ]}
      />

      {/* Contact Form */}
      <section id="contact-form">
        <ContactLeadForm defaultService="Business Setup" />
      </section>

      {/* FAQs */}
      <ServiceFAQs
        faqs={[
          {
            q: "Which business structure is best for startups?",
            a: "Private Limited Company or LLP is generally preferred, depending on business needs and future plans.",
          },
          {
            q: "How long does company registration take?",
            a: "Company incorporation typically takes 7–15 working days, subject to document readiness.",
          },
          {
            q: "Do you provide GST registration?",
            a: "Yes, we handle GST registration and other statutory registrations.",
          },
          {
            q: "Can you help after business setup?",
            a: "Absolutely. We provide ongoing accounting, taxation, and compliance services.",
          },
        ]}
      />

      {/* CTA */}
      <ServiceCTA />
    </>
  );
};

export default BusinessSetup;
