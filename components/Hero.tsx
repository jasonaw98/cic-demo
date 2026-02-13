"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white min-h-[90vh] flex items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-8 text-blue-200">
            <Globe className="w-4 h-4" />
            <span>Connecting Malaysia & South East Asia to China</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            CIC International <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-white">
              (M) Sdn Bhd
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Your trusted gateway for Food, Beverage, Health & Halal Products. We
            provide independent inspection, certification, and testing services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-accent hover:bg-brand-accent-hover text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg shadow-red-900/20 transition-all"
            >
              <a href="mailto:info@cic-malaysia.com">Get Consultation</a>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <a href="#about">Learn More</a>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats / Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-10"
        >
          {[
            { label: "Retail Outlets", value: "3,500+" },
            { label: "Clearance Days", value: "≤ 60" },
            { label: "Free Trade Zones", value: "Multiple" },
            { label: "Countries Served", value: "6+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
