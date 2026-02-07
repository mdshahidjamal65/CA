import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";

const ExpatriateTaxation = () => {
  return (
    <>
      {/* Breadcrumb */}
      <ServiceBreadcrumb service="Expatriate Taxation" />

      {/* Service Banner */}
      <ServiceBanner
        title="Expatriate Taxation Services in India"
        description="Specialized tax planning, compliance, and advisory services for expatriates working or residing in India."
        ctaText="Get Expat Tax Consultation"
      />

      {/* Service Content */}
      <ServiceContent
        heading="What is Expatriate Taxation?"
        content={[
          "Expatriate taxation deals with tax compliance and planning for foreign nationals working, earning, or residing in India.",
          "It includes determination of residential status, taxability of global income, and compliance with Indian income tax laws.",
          "We assist expatriates and employers with tax return filing, withholding tax compliance, and advisory on double taxation avoidance agreements (DTAA)."
        ]}
      />

      {/* Service Highlights */}
      <ServiceHighlights
        items={[
          {
            icon: "🌍",
            title: "Who We Serve",
            text: "Foreign nationals, NRIs, and overseas employees in India",
          },
          {
            icon: "📄",
            title: "Tax Services Covered",
            text: "ITR filing, tax planning, DTAA advisory & compliance",
          },
          {
            icon: "⚖️",
            title: "Regulatory Framework",
            text: "Income Tax Act & Double Taxation Avoidance Agreements",
          },
          {
            icon: "🧮",
            title: "Tax Planning",
            text: "Optimizing tax liability while ensuring full compliance",
          },
          {
            icon: "📞",
            title: "Expert Support",
            text: "Dedicated Chartered Accountant for expatriate taxation",
          },
        ]}
      />

      {/* Contact Form */}
      <section id="contact-form">
        <ContactLeadForm defaultService="Expatriate Taxation" />
      </section>

      {/* FAQs */}
      <ServiceFAQs
        faqs={[
          {
            q: "Who is considered an expatriate for tax purposes in India?",
            a: "Foreign nationals working or earning income in India are considered expatriates for tax purposes.",
          },
          {
            q: "Is global income taxable for expatriates?",
            a: "Taxability of global income depends on the residential status determined under Indian tax laws.",
          },
          {
            q: "Do you provide DTAA advisory services?",
            a: "Yes, we provide advisory and compliance support under applicable Double Taxation Avoidance Agreements.",
          },
          {
            q: "Can you assist employers with expatriate payroll compliance?",
            a: "Yes, we assist employers with withholding tax, payroll compliance, and expatriate tax planning.",
          },
        ]}
      />

      {/* CTA */}
      <ServiceCTA />
    </>
  );
};

export default ExpatriateTaxation;
