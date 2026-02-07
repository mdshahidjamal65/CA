import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingActions = () => {
  return (
    <>
      {/* PHONE – LEFT SIDE */}
      <a
        href="tel:+919241303862"
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#1D4ED8] text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WHATSAPP – RIGHT SIDE */}
     <a
      href="https://wa.me/919241303862?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20Chartered%20Accountant%20services.%20Kindly%20assist."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
     <FaWhatsapp size={28} />
    </a>

    </>
  );
};

export default FloatingActions;
