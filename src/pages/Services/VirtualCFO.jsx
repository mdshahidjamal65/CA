import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";

const VirtualCFO = () => {
  return (
    <>
      {/* Breadcrumb */}
      <ServiceBreadcrumb service="Virtual CFO" />

      {/* Banner */}
      <ServiceBanner
        title="Virtual CFO Services for Growing Businesses"
        description="Strategic financial leadership and expert CFO-level support delivered remotely to help startups and businesses scale efficiently."
        ctaText="Talk to a Virtual CFO"
      />

      {/* Content */}
      <ServiceContent
        heading="What are Virtual CFO Services?"
        content={[
          "Virtual CFO services provide expert financial management without the cost of a full-time CFO.",
          "Our Virtual CFOs help with financial planning, MIS reporting, budgeting, and strategic decision-making.",
          "This service is ideal for startups, SMEs, and growing businesses looking for professional financial oversight."
        ]}
      />

      {/* Highlights */}
      <ServiceHighlights
        items={[
          {
            icon: "📊",
            title: "Financial Planning",
            text: "Budgeting, forecasting & cash flow management",
          },
          {
            icon: "📈",
            title: "MIS Reporting",
            text: "Monthly & quarterly management reports",
          },
          {
            icon: "💼",
            title: "Strategic Advisory",
            text: "Business growth & profitability analysis",
          },
          {
            icon: "💰",
            title: "Cost Optimization",
            text: "Expense control & financial efficiency",
          },
          {
            icon: "🤝",
            title: "Dedicated Support",
            text: "Expert Chartered Accountant guidance",
          },
        ]}
      />

      {/* Contact Form */}
      <section id="contact-form">
        <ContactLeadForm defaultService="Virtual CFO" />
      </section>

      {/* FAQs */}
      <ServiceFAQs
        faqs={[
          {
            q: "Who should opt for Virtual CFO services?",
            a: "Startups, SMEs, and growing businesses that need expert financial management without hiring a full-time CFO.",
          },
          {
            q: "Is Virtual CFO service cost-effective?",
            a: "Yes, it provides CFO-level expertise at a fraction of the cost of a full-time CFO.",
          },
          {
            q: "Do you provide ongoing financial support?",
            a: "Yes, our Virtual CFO services include continuous monitoring, reporting, and advisory support.",
          },
          {
            q: "Can Virtual CFO help with fundraising?",
            a: "Absolutely. We assist with financial projections, investor presentations, and due diligence.",
          },
        ]}
      />

      {/* CTA */}
      <ServiceCTA />
    </>
  );
};

export default VirtualCFO;
