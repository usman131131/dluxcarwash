import React, { useState } from "react";
import SEO from "../components/layout/SEO";

import SuccessMessage from "../components/Success/SuccessMessage"; // Assuming you have this from previous steps

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.phone.trim()) {
      const phoneDigits = formData.phone.replace(/\D/g, "");
      if (phoneDigits.length !== 10 || !/^0/.test(phoneDigits)) {
        newErrors.phone = "Must be a valid 10-digit AU number";
      }
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitting(true);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "99d2494a-a2ed-46e4-853d-3870d30898d3",
            redirect: "https://dluxcarcare.com.au/",
            ...formData,
          }),
        });
        const result = await response.json();

        if (result.success) {
          setIsSuccess(true);
          window.scrollTo(0, 0);
        } else {
          alert("Something went wrong.");
        }
      } catch (error) {
        alert("Network error.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] relative flex items-center justify-center py-24 md:py-32 px-4 md:px-6 overflow-hidden">
      <SEO
        title="Contact DLUX | Book Your Detail"
        description="Get in touch with DLUX Hand Car Wash & Detailing. Visit our Yarraville studio or book a mobile service. Call us at +61 430 585 538."
        path="/contact"
      />

      {/* --- OPTIMIZED BACKGROUND (No Blurs) --- */}
      {/* Uses Radial Gradients for performance instead of CSS Blur filters */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(219,62,51,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(219,62,51,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:grid lg:grid-cols-5">
        {/* --- LEFT PANEL (Info) --- */}
        <div className="lg:col-span-2 bg-[#0a0a0a] p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative order-2 lg:order-1">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              DLUX.
            </h2>
            <p className="text-white/50 text-xs md:text-sm leading-relaxed">
              Automotive purification studio based in Yarraville.
            </p>
          </div>

          <div className="space-y-6 mb-8 lg:mb-0">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="overflow-hidden">
                <span className="block text-[10px] font-bold text-white uppercase tracking-widest">
                  Visit Us
                </span>
                <span className="text-white/60 text-sm truncate block">
                  321-325 Williamstown Rd
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="overflow-hidden">
                <span className="block text-[10px] font-bold text-white uppercase tracking-widest">
                  Email Us
                </span>
                <span className="text-white/60 text-sm truncate block">
                  info@dluxwash.com.au
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="overflow-hidden">
                <span className="block text-[10px] font-bold text-white uppercase tracking-widest">
                  Call Us
                </span>
                <span className="text-white/60 text-sm truncate block">
                  +61 430 585 538
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                <i className="fa-solid fa-message"></i>
              </div>
              <div className="overflow-hidden">
                <span className="block text-[10px] font-bold text-white uppercase tracking-widest">
                  Text Us Or Call After Hours
                </span>
                <span className="text-white/60 text-sm truncate block">
                  0410 111 190
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-6 text-white/30 text-lg pt-4 border-t border-white/10 lg:border-none lg:pt-0">
            <a
              href="https://www.instagram.com/dluxhandcarwash/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram hover:text-white transition-colors cursor-pointer"></i>
            </a>
            <a
              href="https://web.facebook.com/dluxwash/?_rdc=1&_rdr#"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook hover:text-white transition-colors cursor-pointer"></i>
            </a>
          </div>
        </div>

        {/* --- RIGHT PANEL (Form) --- */}
        <div className="lg:col-span-3 p-6 md:p-10 lg:p-16 bg-[#111] order-1 lg:order-2">
          {isSuccess ? (
            <SuccessMessage
              title="Message Received"
              message="Thank you for reaching out. We will respond shortly."
            />
          ) : (
            <>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="relative">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-3 text-white text-sm md:text-base placeholder-white/30 focus:outline-none transition-colors ${
                        errors.name
                          ? "border-red-500"
                          : "border-white/10 focus:border-primary"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-3 text-white text-sm md:text-base placeholder-white/30 focus:outline-none transition-colors ${
                        errors.email
                          ? "border-red-500"
                          : "border-white/10 focus:border-primary"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-red-400 text-xs mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-3 text-white text-sm md:text-base placeholder-white/30 focus:outline-none transition-colors ${
                      errors.phone
                        ? "border-red-500"
                        : "border-white/10 focus:border-primary"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-red-400 text-xs mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-3 text-white/70 text-sm md:text-base focus:outline-none transition-colors appearance-none cursor-pointer ${
                      errors.service
                        ? "border-red-500"
                        : "border-white/10 focus:border-primary"
                    }`}
                  >
                    <option className="bg-[#111]" value="" disabled>
                      Select a Service...
                    </option>
                    <option className="bg-[#111]" value="Service Inquiry">
                      General Inquiry
                    </option>
                    <option className="bg-[#111]" value="Booking Request">
                      Booking Request
                    </option>
                    <option className="bg-[#111]" value="Partnership">
                      Partnership
                    </option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-4 top-4 text-white/30 pointer-events-none text-xs"></i>
                  {errors.service && (
                    <span className="text-red-400 text-xs mt-1 block">
                      {errors.service}
                    </span>
                  )}
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-3 text-white text-sm md:text-base placeholder-white/30 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-white/10 focus:border-primary"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-400 text-xs mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-white text-black py-4 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all shadow-lg mt-2 ${
                    isSubmitting ? "opacity-50 cursor-wait" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
