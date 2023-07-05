import HeroSection from "@/components/HeroSection";
import Promotions from "@/components/Promotions";
import Feature from "@/components/Feature";
import Newsletter from "@/components/Newsletter";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Promotions />      
      <Feature />
      <Newsletter />
    </>
  )
}
