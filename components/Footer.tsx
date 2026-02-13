export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-semibold text-white">
          China Inspection Consultancy (M) Sdn Bhd
        </p>

        <p className="mt-2">
          Malaysia • China • Hong Kong • Thailand • Indonesia • Singapore
        </p>
        <p className="mt-3">
          <a href="mailto:info@cic-malaysia.com">Email: info@cic-malaysia.com</a> |{" "}
          <a href="tel:+60312345678">Tel: +60 3-1234 5678</a> |{" "}
          <a href="https://wa.me/60122888898" target="blank">WhatsApp: +60 12-288 8898</a>
        </p>
        <p className="mt-4 text-sm">© {new Date().getFullYear()} CIC Malaysia</p>
      </div>
    </footer>
  );
}
