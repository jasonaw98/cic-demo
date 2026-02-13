"use client";

import { motion } from "framer-motion";

const steps = [
  "Label License Documentation",
  "Product Screening",
  "Inspection & Testing",
  "Shipping & Consolidation",
  "Warehousing (Bonded)",
  "Display on Shelf",
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-brand-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-white">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
           <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-brand-accent">
                {index + 1}
              </p>
              <p className="text-lg font-medium text-slate-200 leading-snug">
                {step}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
