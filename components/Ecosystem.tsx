"use client";

import { motion } from "framer-motion";
import {
  Network,
  ShieldCheck,
  Building2,
  ShoppingBag,
  Microscope,
  Warehouse,
} from "lucide-react";

import { cn } from "@/lib/utils";

const nodes = [
  { label: "Government Support", icon: Building2 },
  { label: "Inspection & Testing", icon: Microscope },
  { label: "Customs Clearance", icon: ShieldCheck },
  { label: "Bonded Warehousing", icon: Warehouse },
  { label: "Retail Distribution", icon: ShoppingBag },
];

export default function EcosystemDiagram() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-red-50/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6">
            Integrated Market Entry Ecosystem
          </h2>
          <p className="text-brand-secondary max-w-2xl mx-auto text-lg">
            A comprehensive network connecting regulatory bodies, logistics, and
            market channels.
          </p>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px] hidden md:flex items-center justify-center">
          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-20 relative"
          >
            {/* Pulsing Effect */}
            <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-xl animate-pulse" />

            <div className="bg-brand-primary text-white rounded-full w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-center text-center shadow-2xl shadow-slate-900/30 border-4 border-white relative z-10">
              <Network className="w-12 h-12 mb-4 text-blue-300" />
              <div className="font-bold text-lg md:text-xl">
                CIC Gateway
                <br />
                to China
              </div>
            </div>
          </motion.div>

          {/* Orbital Nodes */}
          {nodes.map((node, index) => {
            const totalNodes = nodes.length;
            const angle = (index / totalNodes) * 2 * Math.PI - Math.PI / 2; // Start from top
            const radius = 250; // Increased radius for better spacing

            // Calculate position relative to center
            // We use standard trigonometry: x = r * cos(theta), y = r * sin(theta)
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0, x, y }}
                whileInView={{ opacity: 1, scale: 1, x, y }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="absolute flex flex-col items-center justify-center w-48"
                style={{
                  // Center the element reference point
                  left: "50%",
                  top: "50%",
                  // Offset to center the element itself
                  marginLeft: "-6rem", // Half of width (w-48 = 12rem)
                  marginTop: "-3rem", // Approximate half height
                }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  className="bg-gray-100 p-4 rounded-xl shadow-lg border border-brand-border w-full text-center hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 z-30"
                >
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-2 text-brand-accent">
                    <node.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-brand-primary text-sm leading-tight">
                    {node.label}
                  </h3>
                </motion.div>

                {/* Connector Line to Center - Simple Approach */}
                <div
                  className="absolute top-1/2 left-1/2 h-px bg-brand-border -z-10 origin-left"
                  style={{
                    width: `${radius - 100}px`, // Connect to near center
                    transform: `rotate(${angle * (180 / Math.PI) + 180}deg)`,
                    left: "50%",
                    top: "50%",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile List Fallback */}
        <div className="md:hidden grid grid-cols-1 gap-4 mt-8">
          <div className="bg-brand-primary text-white rounded-xl p-6 text-center mb-8 shadow-lg">
            <Network className="w-12 h-12 mb-4 mx-auto text-blue-300" />
            <div className="font-bold text-xl">CIC Gateway to China</div>
          </div>
          {nodes.map((node, i) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-brand-border"
            >
              <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-brand-accent">
                <node.icon className="w-5 h-5" />
              </div>
              <span className="font-medium text-brand-primary">
                {node.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
