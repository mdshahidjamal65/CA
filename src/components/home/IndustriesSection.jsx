import { useState } from "react";

const industries = [
  { name: "Startups & MSMEs", type: "domestic" },
  { name: "Large Corporates", type: "domestic" },
  { name: "IT & SaaS Companies", type: "domestic" },
  { name: "Manufacturing Firms", type: "domestic" },
  { name: "Professionals & Consultants", type: "domestic" },
  { name: "E-Commerce Businesses", type: "domestic" },
  { name: "Foreign-Owned Companies", type: "international" },
  { name: "NRIs & Expatriates", type: "international" },
  { name: "Joint Ventures", type: "international" },
  { name: "Import / Export Businesses", type: "international" },
];

const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredIndustries = industries.filter((industry) => {
    const matchTab =
      activeTab === "all" || industry.type === activeTab;
    const matchSearch = industry.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchTab && matchSearch;
  });

  const visibleIndustries = showAll
    ? filteredIndustries
    : filteredIndustries.slice(0, 8);

  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-[#1D4ED8] font-semibold">
            Our Expertise
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Industries We Serve
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We provide specialized Chartered Accountancy and financial
            advisory services across diverse industries and business models.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { id: "all", label: "All Industries" },
                { id: "domestic", label: "Domestic Businesses" },
                { id: "international", label: "International Clients" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setShowAll(false);
                  }}
                  className={`px-5 py-2 rounded-lg text-sm font-medium border
                    ${
                      activeTab === tab.id
                        ? "bg-[#1D4ED8] text-white border-[#1D4ED8]"
                        : "bg-white text-gray-700 border-gray-200 hover:border-[#93C5FD]"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* INDUSTRY CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {visibleIndustries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm border hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">
                      {industry.name}
                    </h4>

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium
                        ${
                          industry.type === "international"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                    >
                      {industry.type === "international"
                        ? "International"
                        : "Domestic"}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mt-3">
                    Tailored tax, compliance, and advisory solutions
                    for this sector.
                  </p>
                </div>
              ))}
            </div>

            {/* VIEW MORE */}
            {!showAll && filteredIndustries.length > 8 && (
              <div className="mt-8">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-6 py-3 bg-[#1D4ED8] text-white rounded-lg font-medium hover:bg-[#1E40AF] transition"
                >
                  View More
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search industry..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowAll(false);
              }}
              className="w-full mb-6 px-4 py-3 border rounded-lg text-sm focus:outline-none focus:border-[#60A5FA]"
            />

            {/* INFO CARD */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">
                Why Industry-Specific Expertise Matters
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every industry has unique taxation, compliance, and
                regulatory challenges. Our Chartered Accountants
                deliver industry-focused solutions that ensure
                compliance, efficiency, and sustainable growth.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li>✓ Sector-specific tax planning</li>
                <li>✓ Regulatory & statutory compliance</li>
                <li>✓ Practical business advisory</li>
                <li>✓ Dedicated CA support</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
