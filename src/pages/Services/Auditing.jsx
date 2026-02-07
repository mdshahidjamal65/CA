import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";

const Auditing = () => {
  return (
    <>
      {/* 6.1 Breadcrumb */}
      <ServiceBreadcrumb service="Auditing" />

      {/* 6.2 Service Banner */}
      <ServiceBanner
        title="Professional Auditing Services in India"
        description="Comprehensive statutory, internal, and tax audit services delivered by experienced Chartered Accountants to ensure compliance, transparency, and financial accuracy."
        ctaText="Get Auditing Consultation"
      />

      {/* 6.3 Service Content */}
      <ServiceContent
        heading="What are Auditing Services?"
        content={[
          "Auditing is an independent examination of financial statements, records, and processes to ensure accuracy, compliance, and reliability.",
          "Our auditing services help businesses meet statutory requirements, strengthen internal controls, and enhance stakeholder confidence.",
          "We provide statutory audits, internal audits, tax audits, and special audits in accordance with applicable laws and accounting standards."
        ]}
      />

      {/* 6.4 Service Highlights */}
      <ServiceHighlights
        items={[
          {
            icon: "📊",
            title: "Types of Audits",
            text: "Statutory Audit, Internal Audit, Tax Audit & Special Audits",
          },
          {
            icon: "⚖️",
            title: "Regulatory Compliance",
            text: "Income Tax Act, Companies Act, GST & applicable standards",
          },
          {
            icon: "🏢",
            title: "Industries Served",
            text: "Startups, SMEs, corporates & professional firms",
          },
          {
            icon: "🔍",
            title: "Audit Approach",
            text: "Risk-based audit with detailed analysis & reporting",
          },
          {
            icon: "📞",
            title: "Expert Support",
            text: "Dedicated Chartered Accountant & ongoing guidance",
          },
        ]}
      />

      {/* 6.5 Contact Form (Auto-selected service) */}
      <section id="contact-form">
        <ContactLeadForm defaultService="Auditing" />
      </section>

      {/* 6.6 FAQs */}
      <ServiceFAQs
        faqs={[
          {
            q: "Is statutory audit mandatory for all businesses?",
            a: "Statutory audit is mandatory for companies and certain entities as per the Companies Act and other applicable laws.",
          },
          {
            q: "What is the difference between internal audit and statutory audit?",
            a: "Statutory audit focuses on legal compliance, while internal audit evaluates internal controls, risk management, and operational efficiency.",
          },
          {
            q: "Do you provide tax audit services?",
            a: "Yes, we provide tax audit services as per the Income Tax Act, including audit report preparation and filing.",
          },
          {
            q: "Can you handle audits for startups and SMEs?",
            a: "Absolutely. We offer customized audit solutions for startups, SMEs, and growing businesses.",
          },
        ]}
      />

      {/* 6.7 CTA */}
      <ServiceCTA />
    </>
  );
};

export default Auditing;
