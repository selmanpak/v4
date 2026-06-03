import { useState } from 'react';
import { navItems } from '../config';
import { Logo } from './Logo';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Logo />

          <nav className="site-header__nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.path} href={item.path}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="site-header__cta" href="#contact">
            Book a Demo
          </a>

          <button
            type="button"
            className="site-header__menu-button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu__top">
            <Logo />
            <button
              type="button"
              className="mobile-menu__close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav className="mobile-menu__nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.path} href={item.path} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}

            <a className="mobile-menu__cta" href="#contact" onClick={() => setOpen(false)}>
              Book a Demo
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
