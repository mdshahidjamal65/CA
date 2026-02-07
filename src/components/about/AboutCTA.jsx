import { NavLink } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] py-16 text-center text-white">
      <h2 className="text-3xl font-bold">
        Ready to Simplify Your Tax & Compliance Needs?
      </h2>
      <p className="mt-4 text-blue-100">
        Connect with our Chartered Accountants for expert advice,
        accurate compliance, and trusted financial solutions.
      </p>
      <NavLink
        to="/contact"
        className="inline-block mt-8 bg-white text-[#1D4ED8] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Get Free Consultation
      </NavLink>
    </section>
  );
};

export default AboutCTA;
