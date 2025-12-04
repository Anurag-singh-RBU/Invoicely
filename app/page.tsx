import Features from "@/components/layout/landing/Features";
import Footer from "@/components/layout/landing/Footer";
import Header from "@/components/layout/landing/Header";
import Hero from "@/components/layout/landing/Hero";
import OgImg from "@/components/layout/landing/OgImg";
import OurSponser from "@/components/layout/landing/Sponsors";

export default function Home() {

  return (

    <div className="new-container relative border-none! sm:border-dashed!">
      <Header/>
      <Hero/>
      <Features/>
      <OgImg/>
      <OurSponser/>
      <Footer/>
    </div>

  );
}
