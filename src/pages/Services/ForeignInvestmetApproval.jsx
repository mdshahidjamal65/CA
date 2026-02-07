import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";

const ForeignInvestmetApproval = () => {
  return (
    <>
      {/* Breadcrumb */}
      <ServiceBreadcrumb service="Foreign Investment Approval" />

      {/* Service Banner */}
      <ServiceBanner
        title="Foreign Investment Approval Services in India"
        description="Expert assistance for foreign direct investment (FDI), FEMA compliance, RBI filings, and regulatory approvals in India."
        ctaText="Get FDI Advisory"
      />

      {/* Service Content */}
      <ServiceContent
        heading="What is Foreign Investment Approval?"
        content={[
          "Foreign Investment Approval involves regulatory compliance and approvals required for foreign entities or individuals investing in Indian businesses.",
          "It includes compliance under FEMA, RBI regulations, and sector-specific guidelines issued by the Government of India.",
          "We assist with FDI structuring, approval route filings, reporting requirements, and ongoing compliance for foreign investors."
        ]}
      />

      {/* Service Highlights */}
      <ServiceHighlights
        items={[
          {
            icon: "🌐",
            title: "Investment Types",
            text: "FDI under Automatic & Approval routes",
          },
          {
            icon: "🏛️",
            title: "Regulatory Bodies",
            text: "RBI, FEMA, DPIIT & concerned authorities",
          },
          {
            icon: "📑",
            title: "Compliance Support",
            text: "FC-GPR, FC-TRS, FLA & related filings",
          },
          {
            icon: "⚖️",
            title: "Legal Framework",
            text: "FEMA regulations & FDI policy guidelines",
          },
          {
            icon: "📞",
            title: "Expert Advisory",
            text: "End-to-end support from experienced CAs",
          },
        ]}
      />

      {/* Contact Form */}
      <section id="contact-form">
        <ContactLeadForm defaultService="Foreign Investment Approval" />
      </section>

      {/* FAQs */}
      <ServiceFAQs
        faqs={[
          {
            q: "What is FDI under the automatic route?",
            a: "Under the automatic route, foreign investors do not require prior government approval but must comply with RBI reporting requirements.",
          },
          {
            q: "When is government approval required for foreign investment?",
            a: "Government approval is required for investments in restricted sectors or when conditions under the FDI policy apply.",
          },
          {
            q: "Do you assist with RBI filings?",
            a: "Yes, we assist with all RBI and FEMA-related filings including FC-GPR, FC-TRS, and FLA returns.",
          },
          {
            q: "Can you help startups with foreign investment?",
            a: "Absolutely. We provide complete foreign investment advisory and compliance support for startups and growing businesses.",
          },
        ]}
      />

      {/* CTA */}
      <ServiceCTA />
    </>
  );
};

export default ForeignInvestmetApproval;
