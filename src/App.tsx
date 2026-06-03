import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeHeroSection } from './sections/home/HomeHeroSection';
import { HomeSection2 } from './sections/home/HomeSection2';
import { HomeSection3 } from './sections/home/HomeSection3';
import { HomeSection4 } from './sections/home/HomeSection4';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HomeHeroSection />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
      </main>
      <Footer />
    </div>
  );
}
