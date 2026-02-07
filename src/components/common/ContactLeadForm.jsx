import { useState, useEffect } from "react";

const ContactLeadForm = ({ defaultService = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // AUTO-SELECT SERVICE BASED ON PAGE
  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({
        ...prev,
        service: defaultService,
      }));
    }
  }, [defaultService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-[#F9FAFB] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT CONTENT */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h2 className="text-3xl font-bold text-[#0F172A]">
              Get Professional CA Consultation — Trusted & Reliable
            </h2>

            <p className="mt-4 text-[#64748B]">
              Our experienced Chartered Accountants provide accurate,
              compliant, and result-driven financial solutions for
              individuals, startups, and businesses.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Qualified & experienced Chartered Accountants",
                "Accurate tax & compliance guidance",
                "Transparent pricing with no hidden charges",
                "Dedicated support & timely service",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#1D4ED8] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl p-10 shadow-md">
            <h3 className="text-2xl font-bold mb-6">
              Request a Free Consultation
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:border-[#1D4ED8] ${
                  formData.service ? "text-[#0F172A]" : "text-[#64748B]"
                }`}
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option value="Foreign Investment Approval">
                  Foreign Investment Approval
                </option>
                <option value="Auditing">
                  Auditing
                </option>
                <option value="Corporate Compliance">
                  Corporate Compliance
                </option>
                <option value="Expatriate Taxation">
                  Expatriate Taxation
                </option>
                <option value="Business Taxation">
                  Business Taxation
                </option>
                <option value="Transfer Pricing">
                  Transfer Pricing
                </option>
                <option value="Virtual CFO">
                  Virtual CFO
                </option>
                <option value="Business Setup">
                  Business Setup
                </option>
               <option value="Litigation">
                 Litigation
                </option>
              </select>

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your requirement"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white bg-[#1D4ED8] hover:opacity-90"
              >
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactLeadForm;
