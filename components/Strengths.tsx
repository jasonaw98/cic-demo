"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Warehouse, Fingerprint, Users } from "lucide-react";

const strengths = [
  {
    text: "Government-backed fast clearance (within 60 working days)",
    icon: Zap,
  },
  {
    text: "Integrated customs & logistics systems",
    icon: ShieldCheck,
  },
  {
    text: "Large-scale warehousing facilities",
    icon: Warehouse,
  },
  {
    text: "Product authentication & traceability",
    icon: Fingerprint,
  },
  {
    text: "Experienced multi-disciplinary team",
    icon: Users,
  },
];

export default function Strengths() {
  return (
    <section className="py-24 px-6 bg-brand-primary text-white relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Strengths</h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Why leading brands choose CIC as their partner for China market
            entry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center mb-4 text-red-500 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="text-lg font-medium text-slate-200 leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
