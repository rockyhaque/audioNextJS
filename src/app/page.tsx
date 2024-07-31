import FeaturesCourses from "@/components/FeaturesCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection></HeroSection>
      <FeaturesCourses></FeaturesCourses>
      <WhyChooseUs></WhyChooseUs>
      <MusicSchoolTestimonials></MusicSchoolTestimonials>
      <UpcomingWebinars />
      <Instructors />
      <Footer></Footer>
    </main>
  );
}
