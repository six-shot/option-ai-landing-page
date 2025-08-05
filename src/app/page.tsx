import Feauture3 from "@/components/feauture-3";
import Features from "@/components/feautures-1";
import Feautures2 from "@/components/feautures-2";
import Feautures4 from "@/components/feautures-4";
import HeroSection from "@/components/hero-section";
import AnalysisChart from "@/components/analysis-chart";
import Trusted from "@/components/testimonial";
import FrequentlyAskedQuestions from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div
      
      className="font-[family-name:var(--font-lato)]"
    >
      <HeroSection />
      <Features />
      <Feautures2 />
      <Feauture3/>
      <Feautures4/>
      <AnalysisChart/>
      <Trusted/>
      <FrequentlyAskedQuestions/>
      <Footer/>
    </div>
  );
}
