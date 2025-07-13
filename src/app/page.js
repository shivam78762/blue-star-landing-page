import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
  <>

  <Hero/>

  <HowItWorks/>
  <Gallery/>
  <Testimonials/>
  
  
  </>
  );
}
