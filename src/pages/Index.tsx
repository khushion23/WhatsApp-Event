import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyAttend from "@/components/WhyAttend";
import Agenda from "@/components/Agenda";
import RSVP from "@/components/RSVP";
import ForMoreQueries from "@/components/ForMoreQueries";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Particles />
      <Navbar />
      <Hero />
      <About />
      <Agenda />
      <WhyAttend />
      <div id="venue" />
      <RSVP />
      <ForMoreQueries />
      <Footer />
    </div>
  );
};

export default Index;
