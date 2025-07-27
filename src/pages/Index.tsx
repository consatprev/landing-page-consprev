import { Hero } from "@/components/sections/Hero";
import { Expertises } from "@/components/sections/Expertises";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Expertises />
      <About />
      <Services />
      <Partners />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
