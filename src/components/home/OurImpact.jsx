const OurImpact = () => {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-[#1D4ED8] font-semibold mb-3">
            Our Impact
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted Financial Advisors for Businesses & Individuals
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With strong domain expertise and a client-first approach,
            K&amp;A Financial Advisory has helped individuals, startups,
            and businesses achieve compliance, tax efficiency, and
            long-term financial growth.
          </p>
        </div>

        {/* IMPACT CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-[#E0E7FF] text-[#1D4ED8]">
              📊
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              5,000+
            </h3>

            <p className="mt-2 font-semibold text-gray-800">
              Clients Served
            </p>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Providing tax, accounting, and compliance services to
              individuals and businesses across India.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-[#E0E7FF] text-[#1D4ED8]">
              ⏱
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              10+ 
            </h3>

            <p className="mt-2 font-semibold text-gray-800">
              Years of Experience
            </p>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Extensive experience in Income Tax, GST, Audit,
              and statutory compliance services.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-[#E0E7FF] text-[#1D4ED8]">
              ✅
            </div>

            <h3 className="text-3xl font-bold text-gray-900">
              100%
            </h3>

            <p className="mt-2 font-semibold text-gray-800">
              Compliance Focus
            </p>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Ensuring accuracy, transparency, and on-time
              compliance with the latest tax laws and regulations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurImpact;
