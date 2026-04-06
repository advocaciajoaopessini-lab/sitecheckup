import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { InfoSection } from './sections/InfoSection';
import { SolutionSection } from './sections/SolutionSection';
import { StepsSection } from './sections/StepsSection';
import { ResultsSection } from './sections/ResultsSection';
import { PricingSection } from './sections/PricingSection';
import { FAQSection } from './sections/FAQSection';
import { FooterSection } from './sections/FooterSection';
import { CookieBanner } from './sections/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <HeroSection />
      <ProblemSection />
      <InfoSection />
      <SolutionSection />
      <StepsSection />
      <ResultsSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
      <CookieBanner />
    </div>
  );
}

export default App;
