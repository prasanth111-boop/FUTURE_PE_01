import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Location from "@/components/landing/Location";
import Newsletter from "@/components/landing/Newsletter";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Location />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
