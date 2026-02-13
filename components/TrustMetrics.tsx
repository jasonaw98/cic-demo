const stats = [
  { label: "Retail Outlets", value: "3,500+" },
  { label: "Working Days Clearance", value: "≤ 60" },
  { label: "China Free Trade Zones", value: "Multiple" },
  { label: "Countries Served", value: "6+" },
];

export function TrustMetrics() {
  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-slate-300 mt-2 text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
