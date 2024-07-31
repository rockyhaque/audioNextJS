import FeaturesCourses from "@/components/FeaturesCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection></HeroSection>
      <FeaturesCourses></FeaturesCourses>
      <WhyChooseUs></WhyChooseUs>
    </main>
  );
}
