import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";

const CorporateCompliance = () => {
  return (
    <>
      {/* Breadcrumb */}
      <ServiceBreadcrumb service="Corporate Compliance" />

      {/* Service Banner */}
      <ServiceBanner
        title="Corporate Compliance Services in India"
        description="End-to-end corporate compliance, ROC filings, and governance support delivered by experienced Chartered Accountants."
        ctaText="Get Compliance Support"
      />

      {/* Service Content */}
      <ServiceContent
        heading="What is Corporate Compliance?"
        content={[
          "Corporate compliance refers to adherence to statutory laws, regulations, and governance requirements applicable to companies and LLPs.",
          "Timely compliance helps businesses avoid penalties, legal risks, and ensures smooth operations with regulatory authorities.",
          "We manage ROC filings, annual compliances, board-related filings, and ongoing statutory requirements under applicable laws."
        ]}
      />

      {/* Service Highlights */}
      <ServiceHighlights
        items={[
          {
            icon: "🏛️",
            title: "Entities Covered",
            text: "Private Limited, Public Limited, LLPs & startups",
          },
          {
            icon: "📑",
            title: "Compliance Services",
            text: "ROC filings, annual returns & statutory registers",
          },
          {
            icon: "⚖️",
            title: "Regulatory Framework",
            text: "Companies Act, LLP Act & MCA guidelines",
          },
          {
            icon: "📅",
            title: "Timely Filings",
            text: "On-time compliance to avoid penalties & notices",
          },
          {
            icon: "📞",
            title: "Dedicated Support",
            text: "Expert CA assistance with proactive reminders",
          },
        ]}
      />

      {/* Contact Form */}
      <section id="contact-form">
        <ContactLeadForm defaultService="Corporate Compliance" />
      </section>

      {/* FAQs */}
      <ServiceFAQs
        faqs={[
          {
            q: "Who needs corporate compliance services?",
            a: "All companies and LLPs registered in India are required to comply with statutory filings and governance norms.",
          },
          {
            q: "What happens if compliances are missed?",
            a: "Non-compliance can lead to penalties, late fees, and legal complications with regulatory authorities.",
          },
          {
            q: "Do you handle annual ROC filings?",
            a: "Yes, we handle complete annual ROC filings including AOC-4, MGT-7, and other applicable forms.",
          },
          {
            q: "Can you manage compliance for startups?",
            a: "Absolutely. We provide tailored compliance solutions for startups and growing businesses.",
          },
        ]}
      />

      {/* CTA */}
      <ServiceCTA />
    </>
  );
};

export default CorporateCompliance;
