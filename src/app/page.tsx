import Features from "../components/features";
import HeroSection from "../components/hero";
import Ceramics from "./Mainlisting/Ceramics";
import Product from "./Mainlisting/product"
import Benefits from "../components/Benefits"
import Features2 from "../components/Features2"

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <Ceramics />
      <Product />
      <Benefits />
      <Features2 />
    </div>
  );
}
