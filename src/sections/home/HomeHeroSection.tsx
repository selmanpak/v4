const heroLines = [
  'Institutional infrastructure',
  'for real-world asset',
  'tokenization.',
];

const statusSteps = ['Asset Verified', 'Token Ready', 'Access Controlled'];

const proofItems = [
  'Regulatory-first deployment',
  'Custody-aware workflows',
  'Institutional lifecycle reporting',
];

const visualCards = [
  'Real Assets',
  'Regulated Rails',
  'Tokenization Flow',
  'AI Intelligence',
];

export function HomeHeroSection() {
  return (
    <section className="home-hero">
      <HeroAmbientLayer />

      <div className="home-hero__content">
        <div className="home-hero__eyebrow">AI-Integrated RWA Tokenization</div>

        <h1 className="home-hero__title">
          {heroLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>

        <p className="home-hero__text">
          FirstData enables regulated tokenization, distribution, custody-aware workflows, and
          lifecycle reporting for real-world assets — engineered for Saudi Arabia and scalable
          across markets.
        </p>

        <div className="home-hero__actions">
          <a className="home-hero__primary" href="#contact">
            Book a Demo <span aria-hidden="true">→</span>
          </a>

          <a className="home-hero__secondary" href="#platform">
            Explore the Platform
          </a>
        </div>

        <HeroStatusStrip />

        <div className="home-hero__proofs">
          {proofItems.map((item) => (
            <div className="home-hero__proof" key={item}>
              <span aria-hidden="true">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}

function HeroAmbientLayer() {
  return (
    <div className="home-hero__ambient" aria-hidden="true">
      <div className="home-hero__ambient-orb home-hero__ambient-orb--one" />
      <div className="home-hero__ambient-orb home-hero__ambient-orb--two" />
      <div className="home-hero__ambient-ring" />
      <div className="home-hero__ambient-line" />
    </div>
  );
}

function HeroStatusStrip() {
  return (
    <div className="home-hero__status">
      {statusSteps.map((step) => (
        <div className="home-hero__status-item" key={step}>
          <span aria-hidden="true">✓</span>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="home-hero__visual" aria-label="FirstData tokenization platform visual">
      <div className="home-hero__visual-glow" />
      <div className="home-hero__visual-panel">
        {visualCards.map((card) => (
          <div className="home-hero__visual-card" key={card}>
            <div className="home-hero__visual-icon">✦</div>
            <p>{card}</p>
            <span />
            <span />
          </div>
        ))}
      </div>
      <div className="home-hero__visual-square" />
      <div className="home-hero__visual-circle" />
    </div>
  );
}
