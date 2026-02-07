import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";

// Services
import Services from "../pages/Services/Services";
import ForeignInvestmetApproval from "../pages/Services/ForeignInvestmetApproval";
import Auditing from "../pages/Services/Auditing";
import CorporateCompliance from "../pages/Services/CorporateCompliance";
import ExpatriateTaxation from "../pages/Services/ExpatriateTaxation";
import BusinessTaxation from "../pages/Services/BusinessTaxation";
import TransferPricing from "../pages/Services/TransferPricing";



import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/BlogDetail";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      {/* MAIN LAYOUT */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/foreign-investmet-approval" element={<ForeignInvestmetApproval />} />
        <Route path="/services/auditing" element={<Auditing />} />
        <Route path="/services/corporate-compliance" element={<CorporateCompliance />} />
        <Route path="/services/expatriate-taxation" element={<ExpatriateTaxation />} />
        <Route path="/services/business-taxation" element={<BusinessTaxation />} />
        <Route path="/services/transfer-pricing" element={<TransferPricing />} />

        
      

        
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;