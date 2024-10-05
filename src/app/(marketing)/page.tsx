import HomeHeader from "@/components/marketing/HomeHeader";
import HeroSection from "@/components/marketing/HeroSection";
import Solidarity from "@/components/marketing/Solidarity";
import Mentality from "@/components/marketing/Mentality";
import Decentralization from "@/components/marketing/Decentralization";
import CombinedLevel from "@/components/marketing/combinedlevel";
import IndividualLevel from "@/components/marketing/individuallevel";
import Registration from "@/components/marketing/registration";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HeroSection />
      <Solidarity />
      <Mentality />
      <Decentralization />
      <CombinedLevel />
      <IndividualLevel />
      <Registration />
    </main>
  );
}
