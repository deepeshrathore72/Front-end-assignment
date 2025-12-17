import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CriticalAreasSection } from './components/CriticalAreasSection';
import { ProcessSection } from './components/ProcessSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CriticalAreasSection />
        <ProcessSection />
        <DeliverablesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
