const services = [
  "Food & Beverage Inspection",
  "Cosmetics & Personal Care Labelling",
  "Health Supplements Testing",
  "Pre-shipment & Final Random Inspection",
  "Label License Consultation",
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="border rounded-xl p-6 bg-white shadow-sm"
            >
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
