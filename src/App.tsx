import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeHeroSection } from './sections/home/HomeHeroSection';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HomeHeroSection />
      </main>
      <Footer />
    </div>
  );
}
