import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";

const TransferPricing = () => {
  return (
    <>
      {/* Breadcrumb */}
      <ServiceBreadcrumb service="Transfer Pricing" />

      {/* Service Banner */}
      <ServiceBanner
        title="Transfer Pricing Services in India"
        description="Comprehensive transfer pricing documentation, compliance, and advisory services for multinational enterprises and group companies."
        ctaText="Get Transfer Pricing Support"
      />

      {/* Service Content */}
      <ServiceContent
        heading="What is Transfer Pricing?"
        content={[
          "Transfer pricing refers to the pricing of transactions between related entities or group companies, especially across international borders.",
          "Indian transfer pricing regulations require such transactions to be conducted at arm’s length price and properly documented.",
          "We assist businesses with transfer pricing studies, benchmarking analysis, documentation, compliance, and representation before tax authorities."
        ]}
      />

      {/* Service Highlights */}
      <ServiceHighlights
        items={[
          {
            icon: "🔁",
            title: "Covered Transactions",
            text: "International & specified domestic related-party transactions",
          },
          {
            icon: "📊",
            title: "Documentation",
            text: "TP study, benchmarking & arm’s length analysis",
          },
          {
            icon: "⚖️",
            title: "Regulatory Framework",
            text: "Income Tax Act & OECD transfer pricing guidelines",
          },
          {
            icon: "📑",
            title: "Compliance Support",
            text: "Form 3CEB, TP reports & audit support",
          },
          {
            icon: "📞",
            title: "Expert Assistance",
            text: "Specialized CA support for assessments & litigation",
          },
        ]}
      />

      {/* Contact Form */}
      <section id="contact-form">
        <ContactLeadForm defaultService="Transfer Pricing" />
      </section>

      {/* FAQs */}
      <ServiceFAQs
        faqs={[
          {
            q: "Who is required to comply with transfer pricing regulations?",
            a: "Companies entering into international or specified domestic transactions with related parties must comply with transfer pricing regulations.",
          },
          {
            q: "Is transfer pricing documentation mandatory?",
            a: "Yes, maintaining transfer pricing documentation is mandatory to substantiate arm’s length pricing.",
          },
          {
            q: "What is Form 3CEB?",
            a: "Form 3CEB is a mandatory audit report certifying related-party transactions under transfer pricing provisions.",
          },
          {
            q: "Do you assist during transfer pricing assessments?",
            a: "Yes, we provide complete support during assessments, audits, and transfer pricing litigation.",
          },
        ]}
      />

      {/* CTA */}
      <ServiceCTA />
    </>
  );
};

export default TransferPricing;
