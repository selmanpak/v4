import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="home-placeholder">
        <div className="home-placeholder__inner">
          <h1>Hello World</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
