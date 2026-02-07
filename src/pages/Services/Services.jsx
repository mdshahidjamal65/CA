import { NavLink } from "react-router-dom";
import { servicesData } from "../../data/servicesData";

const ServicesPage = () => {
  return (
    <>
      {/* ===== HERO (SAME DESIGN AS BLOG PAGE) ===== */}
      <div className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">Our Services</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Comprehensive Chartered Accountancy and financial advisory
            services tailored for individuals, startups, and businesses.
          </p>
        </div>
      </div>

      {/* ===== SERVICES GRID (UNCHANGED) ===== */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
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

        </div>
      </section>
    </>
  );
};

export default ServicesPage;
