import { navItems } from '../config';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Logo />
          <p className="site-footer__description">
            AI-integrated infrastructure for real-world asset tokenization.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.path} href={item.path}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__contact">
          <p>2239 Al Urubah Rd.</p>
          <p>Al Olaya Dist. 12214 Riyadh, KSA</p>
          <p>+966 11 211 1556</p>
          <p>Empowering Solutions Through Data&amp;AI</p>
        </div>
      </div>

      <div className="site-footer__bottom">© 2026 FirstData. All rights reserved.</div>
    </footer>
  );
}
