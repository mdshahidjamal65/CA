import ContactLeadForm from "../components/common/ContactLeadForm";

const Contact = () => {
  return (
    <>
      {/* ===== HERO (MATCHES SERVICES / BLOG / FAQ) ===== */}
      <section className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Connect with our Chartered Accountants for expert guidance on
            taxation, compliance, auditing, and financial advisory services.
          </p>
        </div>
      </section>

      {/* ===== LEAD FORM (UNCHANGED) ===== */}
      <ContactLeadForm />
    </>
  );
};

export default Contact;
