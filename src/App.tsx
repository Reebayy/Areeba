import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1736] flex flex-col font-sans selection:bg-[#CCFBF1] selection:text-[#115E59]">
      {/* Floating Modern Transparent Pill Navigation */}
      <Navbar />

      {/* Main Sections in clean, crisp flow */}
      <main className="flex-1">
        {/* 1. Hero with Areeba stats card */}
        <Hero />

        {/* 2. About Me (compact side badge) */}
        <About />

        {/* 3. Services Offered */}
        <Services />

        {/* 4. Professional Experience & Publisher Networks with Logos */}
        <Experience />

        {/* 5. Featured Case Studies */}
        <CaseStudies />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* Clean Editorial Footer */}
      <Footer />
    </div>
  );
}
