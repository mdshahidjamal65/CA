const AboutStats = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {[
          { value: "12+", label: "Years of Professional Experience" },
          { value: "5K+", label: "Clients Served" },
          { value: "1K+", label: "Businesses & Individuals Advised" },
          { value: "100%", label: "Compliance & Client Satisfaction" },
        ].map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-[#1D4ED8]">
              {stat.value}
            </h3>
            <p className="mt-2 text-[#64748B]">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default AboutStats;
