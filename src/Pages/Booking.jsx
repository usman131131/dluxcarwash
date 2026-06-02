import React, { useState, useEffect } from "react";
import SEO from "../components/layout/SEO";
import SuccessMessage from "../components/Success/SuccessMessage";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleSize: "",
    service: "",
    drivewayPackage: "", // New Field for Driveway sub-options
    day: "",
    month: new Date().toLocaleString("default", { month: "long" }),
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const allTimeSlots = [
    { label: "9:00 AM", value: "9:00 AM", hour: 9 },
    { label: "12:00 PM", value: "12:00 PM", hour: 12 },
    { label: "4:00 PM", value: "4:00 PM", hour: 16 },
  ];

  // Driveway Sub-Options
  const drivewayPackages = [
    "Valet",
    "Valet & Hand Polish",
    "Valet Superior",
    "Valet & Exterior Works",
    "Valet & Interior Works"
  ];

  // ... (Date Logic remains same: getAuTime, months, getAvailableDays, getAvailableTimes) ...
  const getAuTime = () => new Date(new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
  const months = [0, 1, 2].map((i) => {
    const d = getAuTime();
    d.setMonth(d.getMonth() + i);
    return d.toLocaleString("default", { month: "long" });
  });
  
  const getAvailableDays = () => {
    const todayInAu = getAuTime();
    const currentMonthName = todayInAu.toLocaleString("default", { month: "long" });
    const monthIndexOffset = months.indexOf(formData.month);
    const targetDate = getAuTime();
    targetDate.setMonth(todayInAu.getMonth() + (monthIndexOffset !== -1 ? monthIndexOffset : 0));
    const year = targetDate.getFullYear();
    const monthIndex = targetDate.getMonth();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    let startDay = 1;
    if (formData.month === currentMonthName) startDay = todayInAu.getDate();
    return Array.from({ length: daysInMonth - startDay + 1 }, (_, i) => startDay + i);
  };

  const getAvailableTimes = () => {
    const todayInAu = getAuTime();
    const currentMonthName = todayInAu.toLocaleString("default", { month: "long" });
    const currentDay = todayInAu.getDate();
    const currentHour = todayInAu.getHours();
    const isToday = formData.month === currentMonthName && parseInt(formData.day) === currentDay;
    if (isToday) return allTimeSlots.filter((slot) => slot.hour > currentHour);
    return allTimeSlots;
  };

  const availableDays = getAvailableDays();
  const availableTimes = getAvailableTimes();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };

    // Reset Sub-Package if main service changes away from Driveway
    if (name === "service" && value !== "Driveway") {
        updatedData.drivewayPackage = "";
    }

    if (name === "month") { updatedData.day = ""; updatedData.time = ""; }
    if (name === "day") { updatedData.time = ""; }

    setFormData(updatedData);
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (phoneDigits.length !== 10 || !/^0/.test(phoneDigits)) newErrors.phone = "Enter a valid 10-digit number";

    if (!formData.vehicleSize) newErrors.vehicleSize = "Please select vehicle size";
    if (!formData.service) newErrors.service = "Please select a service";
    
    // Validate Sub-Package if Driveway is selected
    if (formData.service === "Driveway" && !formData.drivewayPackage) {
        newErrors.drivewayPackage = "Please select a package";
    }

    if (!formData.day) newErrors.day = "Select Day";
    if (!formData.month) newErrors.month = "Select Month";
    if (!formData.time) newErrors.time = "Select Time";

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
        // Construct final service string (e.g., "Driveway Service - Valet Superior")
        const finalService = formData.service === "Driveway" 
            ? `Driveway Service - ${formData.drivewayPackage}`
            : formData.service;
        
        const finalData = {
          ...formData,
          service: finalService, // Override service field for email
          date_requested: `${formData.day} ${formData.month} at ${formData.time}`,
        };

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: "99d2494a-a2ed-46e4-853d-3870d30898d3",
            redirect: "https://dluxwash.com.au/",
            ...finalData,
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
    <div className="min-h-screen bg-[#050505] pt-24 md:pt-32 pb-20 px-4 md:px-12 flex justify-center">
      <SEO title="Book an Appointment | DLUX Car Care" description="..." path="/booking" />
      <div className="max-w-3xl w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-16 shadow-2xl">
        {isSuccess ? (
          <SuccessMessage title="Booking Request Sent" message="Thank you for choosing DLUX. We will confirm your slot shortly." />
        ) : (
          <>
            <div className="text-center mb-10 md:mb-12">
              <span className="text-primary font-bold tracking-[0.2em] text-sm mt-2 md:text-xs uppercase mb-4 block">Book Appointment</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white uppercase leading-none">Secure Your Slot.</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              
              {/* 1. Personal Info */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Full Name *</label>
                  <input name="name" type="text" value={formData.name} onChange={handleChange} className={`w-full bg-transparent border-b py-3 text-white focus:outline-none text-base ${errors.name ? "border-red-500" : "border-white/20 focus:border-primary"}`} placeholder="John Doe" />
                  {errors.name && <span className="text-red-500 text-xs absolute -bottom-5 left-0">{errors.name}</span>}
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Phone Number *</label>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className={`w-full bg-transparent border-b py-3 text-white focus:outline-none text-base ${errors.phone ? "border-red-500" : "border-white/20 focus:border-primary"}`} placeholder="0400 000 000" />
                  {errors.phone && <span className="text-red-500 text-xs absolute -bottom-5 left-0">{errors.phone}</span>}
                </div>
              </div>

              {/* 2. Vehicle Size */}
              <div className="relative">
                <label className={`block text-xs font-bold uppercase tracking-widest mb-4 ${errors.vehicleSize ? "text-red-500" : "text-white/40"}`}>Vehicle Size *</label>
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {["Sedan", "SUV", "Large"].map((size) => (
                    <label key={size} className="cursor-pointer relative">
                      <input type="radio" name="vehicleSize" value={size} onChange={handleChange} className="peer sr-only" />
                      <div className={`border bg-white/5 rounded-lg p-3 text-center hover:bg-white/10 ${formData.vehicleSize === size ? "border-primary bg-primary/10 text-white" : "border-white/10 text-white/50"}`}>
                        <span className="text-xs font-bold uppercase">{size}</span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.vehicleSize && <span className="text-red-500 text-xs absolute -bottom-5 left-0">{errors.vehicleSize}</span>}
              </div>

              {/* 3. Service Selection */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {/* Main Service */}
                  <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Service *</label>
                    <div className="relative">
                        <select name="service" value={formData.service} onChange={handleChange} className={`w-full bg-[#0a0a0a] border rounded-lg px-4 py-3 text-white appearance-none focus:outline-none ${errors.service ? "border-red-500" : "border-white/20 focus:border-primary"}`}>
                            <option value="" disabled className="text-white/30">Select Service...</option>
                            <option className="bg-[#111]" value="Detail">Full Detail</option>
                            <option className="bg-[#111]" value="Protect">Paint Protection</option>
                            <option className="bg-[#111]" value="Interior">Interior Detail</option>
                            <option className="bg-[#111]" value="Headlight">Headlight Restoration</option>
                            <option className="bg-[#111]" value="Driveway">Driveway Service (Valet/Polish/Works)</option>
                        </select>
                        <i className="fa-solid fa-chevron-down absolute right-4 top-4 text-white/30 pointer-events-none text-xs"></i>
                    </div>
                    {errors.service && <span className="text-red-500 text-xs absolute -bottom-5 left-0">{errors.service}</span>}
                  </div>

                  {/* Sub-Package Dropdown (Conditional) */}
                  {formData.service === "Driveway" && (
                      <div className="relative animate-fadeIn">
                        <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Select Package *</label>
                        <div className="relative">
                            <select name="drivewayPackage" value={formData.drivewayPackage} onChange={handleChange} className={`w-full bg-[#0a0a0a] border rounded-lg px-4 py-3 text-white appearance-none focus:outline-none ${errors.drivewayPackage ? "border-red-500" : "border-white/20 focus:border-primary"}`}>
                                <option value="" disabled className="text-white/30">Select Package...</option>
                                {drivewayPackages.map(pkg => <option key={pkg} className="bg-[#111]" value={pkg}>{pkg}</option>)}
                            </select>
                            <i className="fa-solid fa-chevron-down absolute right-4 top-4 text-white/30 pointer-events-none text-xs"></i>
                        </div>
                        {errors.drivewayPackage && <span className="text-red-500 text-xs absolute -bottom-5 left-0">{errors.drivewayPackage}</span>}
                      </div>
                  )}
              </div>

              {/* 4. Scheduling */}
              <div className="grid grid-cols-3 gap-4">
                 {/* Day */}
                 <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Day *</label>
                    <div className="relative">
                        <select name="day" value={formData.day} onChange={handleChange} className={`w-full bg-transparent border-b p-3 text-white appearance-none focus:border-primary outline-none ${errors.day ? "border-red-500" : "border-white/20"}`}>
                            <option value="" className="bg-[#111]">DD</option>
                            {availableDays.map(d => <option key={d} value={d} className="bg-[#111]">{d}</option>)}
                        </select>
                        <i className="fa-solid fa-chevron-down absolute right-0 top-4 text-white/30 pointer-events-none text-[10px]"></i>
                    </div>
                 </div>
                 {/* Month */}
                 <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Month *</label>
                    <div className="relative">
                        <select name="month" value={formData.month} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 p-3 text-white appearance-none focus:border-primary outline-none">
                            {months.map(m => <option key={m} value={m} className="bg-[#111]">{m}</option>)}
                        </select>
                        <i className="fa-solid fa-chevron-down absolute right-0 top-4 text-white/30 pointer-events-none text-[10px]"></i>
                    </div>
                 </div>
                 {/* Time */}
                 <div className="relative">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Time *</label>
                    <div className="relative">
                        <select name="time" value={formData.time} onChange={handleChange} disabled={!formData.day} className={`w-full bg-transparent border-b p-3 text-white appearance-none focus:border-primary outline-none ${errors.time ? "border-red-500" : "border-white/20"} ${!formData.day ? "opacity-50" : ""}`}>
                            <option className="bg-[#111]" value="" disabled>--</option>
                            {availableTimes.length > 0 ? availableTimes.map(t => <option key={t.value} className="bg-[#111]" value={t.value}>{t.label}</option>) : <option className="bg-[#111]" disabled>Full</option>}
                        </select>
                        <i className="fa-solid fa-clock absolute right-0 top-4 text-white/30 pointer-events-none text-[10px]"></i>
                    </div>
                 </div>
              </div>

              {/* 5. Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Notes <span className="text-white/20 normal-case">(Optional)</span></label>
                <textarea name="message" rows="2" value={formData.message} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 p-3 text-white focus:border-primary outline-none resize-none placeholder-white/40" placeholder="Car Model/Year/Color"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full bg-white text-black py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all rounded-lg mt-4 ${isSubmitting ? "opacity-50" : ""}`}>
                {isSubmitting ? "Processing..." : "Confirm Booking"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;