"use client";

import { motion } from "framer-motion";
import { FileCheck, Microscope, Ship, Warehouse, Store } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: FileCheck,
    title: "Label License",
    description:
      "Expert handling of product documentation & regulatory approval for smooth entry.",
  },
  {
    icon: Microscope,
    title: "Inspection & Testing",
    description:
      "Rigorous pre-shipment checks and compliance verification to meet standards.",
  },
  {
    icon: Ship,
    title: "Shipping",
    description:
      "Efficient export consolidation and international logistics management.",
  },
  {
    icon: Warehouse,
    title: "Bonded Warehouse",
    description:
      "Secure storage solutions within Free Trade Zones for flexible distribution.",
  },
  {
    icon: Store,
    title: "Display on Shelf",
    description: "Strategic online & offline retail distribution execution.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProcessFlow() {
  return (
    <section className="py-24 bg-brand-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-primary mb-4"
          >
            Gateway to China Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-secondary max-w-2xl mx-auto"
          >
            A streamlined, end-to-end pathway for your products to reach the
            Chinese market.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-5 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-brand-border -z-10 group-hover:bg-brand-accent/50 transition-colors duration-500" />
              )}

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-lg group-hover:shadow-brand-accent/20 group-hover:border-brand-accent/50 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-brand-accent transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold border-4 border-brand-soft">
                    {index + 1}
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-3 text-brand-primary group-hover:text-brand-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
