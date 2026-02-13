import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gateway from "@/components/Gateway";
import HowItWorks from "@/components/How";
import Strengths from "@/components/Strengths";
import Footer from "@/components/Footer";
import ProcessFlow from "@/components/Process";
import EcosystemDiagram from "@/components/Ecosystem";
import CompanyProfile from "@/components/CompanyProfile";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <CompanyProfile />
      <ProcessFlow />
      <EcosystemDiagram />
      <Services />
      <Gateway />
      <HowItWorks />
      <Strengths />
      <Footer />
    </main>
  );
}
