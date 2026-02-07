import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Trusted Chartered Accountants <br />
            for Smart Tax & Financial Growth <br />
            at{" "}
            <span className="text-[#60A5FA]">
              K&amp;A Financial Advisory
            </span>
          </h1>

          <p className="mt-6 text-gray-200 text-base md:text-lg">
            We provide expert Income Tax, GST, Accounting, Audit, and
            Compliance services for individuals, startups, and businesses.
            Get reliable financial solutions backed by experienced
            Chartered Accountants.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <NavLink
              to="/contact"
              className="inline-block bg-[#1D4ED8] hover:bg-[#1E40AF] text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Get Free Consultation
            </NavLink>
          </div>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="text-[#60A5FA] text-xl">•</span>
              Qualified Chartered Accountants
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#60A5FA] text-xl">•</span>
              GST, Income Tax & Compliance Experts
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#60A5FA] text-xl">•</span>
              Serving Clients Across India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
