import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";

const BusinessTaxation = () => {
  return (
    <>
      {/* Breadcrumb */}
      <ServiceBreadcrumb service="Business Taxation" />

      {/* Service Banner */}
      <ServiceBanner
        title="Business Taxation Services in India"
        description="Expert business taxation, corporate tax planning, compliance, and advisory services delivered by experienced Chartered Accountants."
        ctaText="Get Tax Consultation"
      />

      {/* Service Content */}
      <ServiceContent
        heading="What is Business Taxation?"
        content={[
          "Business taxation involves the computation, planning, and compliance of direct taxes applicable to businesses, companies, and professionals.",
          "Effective tax planning helps businesses reduce tax liabilities while remaining fully compliant with the Income Tax Act and applicable regulations.",
          "We assist businesses with corporate tax return filing, advance tax computation, tax audits, and representation before tax authorities."
        ]}
      />

      {/* Service Highlights */}
      <ServiceHighlights
        items={[
          {
            icon: "🏢",
            title: "Who We Serve",
            text: "Startups, SMEs, corporates & professional firms",
          },
          {
            icon: "📊",
            title: "Tax Services Covered",
            text: "Corporate tax filing, advance tax, MAT & AMT",
          },
          {
            icon: "⚖️",
            title: "Regulatory Compliance",
            text: "Income Tax Act & applicable corporate tax laws",
          },
          {
            icon: "🧮",
            title: "Tax Planning",
            text: "Strategic planning to minimize tax liability legally",
          },
          {
            icon: "📞",
            title: "Dedicated Support",
            text: "Expert Chartered Accountant assistance & guidance",
          },
        ]}
      />

      {/* Contact Form */}
      <section id="contact-form">
        <ContactLeadForm defaultService="Business Taxation" />
      </section>

      {/* FAQs */}
      <ServiceFAQs
        faqs={[
          {
            q: "Who needs business taxation services?",
            a: "All businesses, companies, and professionals earning taxable income require business taxation services.",
          },
          {
            q: "Do you help with corporate tax planning?",
            a: "Yes, we provide strategic tax planning to reduce liabilities while ensuring full compliance.",
          },
          {
            q: "Can you handle tax notices and assessments?",
            a: "Yes, we assist with tax notices, assessments, and representation before authorities.",
          },
          {
            q: "Is advance tax calculation included?",
            a: "Yes, we compute and advise on advance tax payments and due dates.",
          },
        ]}
      />

      {/* CTA */}
      <ServiceCTA />
    </>
  );
};

export default BusinessTaxation;
