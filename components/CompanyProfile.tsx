"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CompanyProfile() {
  return (
    <section className="py-20 bg-white border-t border-brand-border/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-soft rounded-3xl p-8 md:p-12 border border-brand-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-left space-y-4 max-w-lg">
            <div className="flex items-center gap-3 text-brand-primary">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-brand-border text-brand-accent">
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Company Profile
              </h2>
            </div>
            <p className="text-brand-secondary text-lg leading-relaxed">
              Explore our comprehensive profile to learn more about our history,
              accreditations, and the full range of services we offer to support
              your business in China.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <motion.a
              href="/CIC_Cmpy_Pro_V4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-brand-primary text-white rounded-full font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-all whitespace-nowrap"
            >
              <span>View (EN)</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="/CIC_Profile_2016.03.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-brand-primary text-white rounded-full font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-all whitespace-nowrap"
            >
              <span>View (CN)</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
