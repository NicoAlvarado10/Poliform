import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { SocialProof } from "@/components/sections/SocialProof";
import { Product } from "@/components/sections/Product";

export default function Home() {
  return (
    <>
    <Hero/>
    <Product/>
    <SocialProof/>
    <About/>
    <Projects/>
    <Footer/>
    </>
  );
}
