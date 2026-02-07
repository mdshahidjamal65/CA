import { useState } from "react";
import faqs from "../data/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-[#F9FAFB]">

      {/* ===== HERO (UPDATED TO MATCH SERVICES / BLOG) ===== */}
      <section className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-blue-100">
            Clear answers to common questions about taxation, compliance,
            auditing, and financial advisory services.
          </p>
        </div>
      </section>

      {/* ===== FAQ LIST (UNCHANGED) ===== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="font-medium text-[#0F172A]">
                  {faq.q}
                </span>
                <span className="text-[#1D4ED8] text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-[#64748B] leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}

        </div>
      </section>

    </main>
  );
};

export default FAQ;
