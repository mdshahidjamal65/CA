const AboutWhyUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
          Why Clients Trust K&amp;A Financial Advisory
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Chartered Accountants",
              text: "Qualified and experienced Chartered Accountants delivering accurate, compliant, and reliable financial solutions."
            },
            {
              title: "Transparent & Ethical Approach",
              text: "Clear advice, honest pricing, and strict adherence to professional and ethical standards."
            },
            {
              title: "Business-Focused Advisory",
              text: "Practical, growth-oriented solutions tailored for individuals, startups, and businesses."
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-[#1D4ED8]">
                {item.title}
              </h3>
              <p className="mt-3 text-[#64748B] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutWhyUs;
