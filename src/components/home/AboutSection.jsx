import aboutImg from "../../assets/images/about-office.webp"; 
// you can replace this image later

const AboutSection = () => {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block text-[#1D4ED8] font-semibold mb-3">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Trusted Chartered Accountants <br /> for Your Financial Success
            </h2>

            <p className="mt-3 text-gray-600 font-medium">
              Professional CA Services Across India
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              K&amp;A Financial Advisory is a professional Chartered Accountancy
              firm providing reliable and result-driven financial solutions to
              individuals, startups, and businesses.
              <br /><br />
              Our experienced Chartered Accountants specialize in Income Tax,
              GST, Accounting, Audit, and statutory compliance, helping clients
              stay compliant, minimize risks, and achieve sustainable growth.
            </p>

            {/* BULLET POINTS */}
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1D4ED8] text-white text-sm">
                  ✓
                </span>
                <span className="text-gray-800 font-medium">
                  Qualified & experienced Chartered Accountants
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1D4ED8] text-white text-sm">
                  ✓
                </span>
                <span className="text-gray-800 font-medium">
                  Accurate, timely & compliant financial services
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#1D4ED8] text-white text-sm">
                  ✓
                </span>
                <span className="text-gray-800 font-medium">
                  Personalized advisory & dedicated client support
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="K&A Financial Advisory Office"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
