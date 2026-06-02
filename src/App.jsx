// src/App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AnimatedPage from "./components/layout/AnimatedPage";

// Pages
import Home from "./Pages/Home";
import DrivewayServices from "./Pages/DrivewayServices";
import Detail from "./Pages/Detail";
import Protect from "./Pages/Protect";
import HeadLight from "./Pages/HeadLight";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import NotFound from "./Pages/NotFound";
import ShowcaseSlider from "./Pages/ShowCaseSlider";
import ProShowcase from "./Pages/ProShowcase";

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-accent text-dark font-sans antialiased selection:bg-primary selection:text-secondary overflow-x-hidden w-full relative">
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />
          <Route
            path="/driveway-services"
            element={
              <AnimatedPage>
                <DrivewayServices />
              </AnimatedPage>
            }
          />
          <Route
            path="/detail"
            element={
              <AnimatedPage>
                <Detail />
              </AnimatedPage>
            }
          />
          <Route
            path="/protect"
            element={
              <AnimatedPage>
                <Protect />
              </AnimatedPage>
            }
          />
          <Route
            path="/restoration"
            element={
              <AnimatedPage>
                <HeadLight />
              </AnimatedPage>
            }
          />
          <Route
            path="/contact"
            element={
              <AnimatedPage>
                <Contact />
              </AnimatedPage>
            }
          />
          <Route
            path="/booking"
            element={
              <AnimatedPage>
                <Booking />
              </AnimatedPage>
            }
          />
          <Route
            path="*"
            element={
              <AnimatedPage>
                <NotFound />
              </AnimatedPage>
            }
          />
          <Route path="/slider-mode" element={<ShowcaseSlider />} />
       <Route path="/pro-showcase" element={<ProShowcase />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
