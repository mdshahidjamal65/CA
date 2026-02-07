import { NavLink } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

const ServicesSection = () => {
  const limitedServices = servicesData.slice(0, 6);

  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-[#1D4ED8] font-semibold mb-3">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Chartered Accountancy Services
          </h2>

          <p className="mt-4 text-gray-600">
            Expert financial, taxation, audit, and compliance solutions
            for businesses and individuals across India.
          </p>
        </div>

        {/* SERVICES GRID (ONLY 6) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {limitedServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition"
            >
              <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-xl bg-[#E0E7FF] text-2xl">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                {service.desc}
              </p>

              <NavLink
                to={service.link}
                className="inline-flex items-center gap-2 mt-5 text-[#1D4ED8] font-semibold"
              >
                Learn more →
              </NavLink>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="mt-14 text-center">
          <NavLink
            to="/services"
            className="inline-block bg-[#1D4ED8] hover:bg-[#1E40AF] text-white px-8 py-3 rounded-md font-semibold transition"
          >
            View All Services
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
