import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gateway from "@/components/Gateway";
import HowItWorks from "@/components/How";
import Strengths from "@/components/Strengths";
import Footer from "@/components/Footer";
import ProcessFlow from "@/components/Process";
import EcosystemDiagram from "@/components/Ecosystem";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
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
