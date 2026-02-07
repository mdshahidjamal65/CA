import ServiceBreadcrumb from "../../components/services/ServiceBreadcrumb";
import ServiceBanner from "../../components/services/ServiceBanner";
import ServiceContent from "../../components/services/ServiceContent";
import ServiceHighlights from "../../components/services/ServiceHighlights";
import ServiceFAQs from "../../components/services/ServiceFAQs";
import ServiceCTA from "../../components/services/ServiceCTA";
import ContactLeadForm from "../../components/common/ContactLeadForm";

const Litigation = () => {
  return (
    <>
      {/* Breadcrumb */}
      <ServiceBreadcrumb service="Litigation" />

      {/* Banner */}
      <ServiceBanner
        title="Tax & Regulatory Litigation Services"
        description="Professional representation and expert handling of tax disputes, assessments, and appeals before authorities."
        ctaText="Get Litigation Support"
      />

      {/* Content */}
      <ServiceContent
        heading="What are Litigation Services?"
        content={[
          "Litigation services involve representation in tax and regulatory disputes.",
          "We assist clients in handling notices, assessments, appeals, and hearings before tax authorities.",
          "Our structured approach ensures compliance, strong documentation, and effective representation."
        ]}
      />

      {/* Highlights */}
      <ServiceHighlights
        items={[
          {
            icon: "⚖️",
            title: "Tax Litigation",
            text: "Income Tax & GST disputes",
          },
          {
            icon: "📑",
            title: "Notices & Replies",
            text: "Drafting & submission of responses",
          },
          {
            icon: "🏛️",
            title: "Appeals & Hearings",
            text: "Representation before authorities",
          },
          {
            icon: "🔍",
            title: "Assessment Support",
            text: "Handling scrutiny & assessments",
          },
          {
            icon: "🤝",
            title: "Expert Representation",
            text: "Experienced Chartered Accountants",
          },
        ]}
      />

      {/* Contact Form */}
      <section id="contact-form">
        <ContactLeadForm defaultService="Litigation" />
      </section>

      {/* FAQs */}
      <ServiceFAQs
        faqs={[
          {
            q: "Do you handle GST litigation?",
            a: "Yes, we provide complete GST litigation and dispute resolution services.",
          },
          {
            q: "Can you represent clients before tax authorities?",
            a: "Yes, we represent clients during assessments, appeals, and hearings.",
          },
          {
            q: "Do you assist with notice replies?",
            a: "Absolutely. We draft and file accurate replies to notices issued by authorities.",
          },
          {
            q: "Is litigation support available for businesses?",
            a: "Yes, we provide litigation services for individuals, startups, and corporates.",
          },
        ]}
      />

      {/* CTA */}
      <ServiceCTA />
    </>
  );
};

export default Litigation;
