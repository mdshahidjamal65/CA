const AboutIntro = () => {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            Simplifying Taxation, Compliance & Financial Decisions
          </h2>

          <p className="mt-6 text-[#64748B] leading-relaxed">
            K&amp;A Financial Advisory is a professional Chartered Accountancy
            firm dedicated to helping individuals, startups, and businesses
            manage their taxation, compliance, and financial requirements
            with clarity and confidence.
          </p>

          <p className="mt-4 text-[#64748B] leading-relaxed">
            From income tax, business taxation, and auditing to corporate
            compliance, expatriate taxation, and foreign investment advisory,
            we deliver end-to-end financial solutions tailored to your needs.
          </p>

          <p className="mt-4 text-[#64748B] leading-relaxed">
            Our services are trusted by entrepreneurs, professionals,
            corporates, and international clients across India.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <ul className="space-y-4">
            {[
              "Qualified & experienced Chartered Accountants",
              "Accurate tax planning & statutory compliance",
              "Transparent processes with ethical practices",
              "Dedicated advisory & ongoing support",
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] font-bold">
                  ✓
                </span>
                <span className="text-[#0F172A] font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;
