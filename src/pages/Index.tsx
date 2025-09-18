import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Expertise />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
