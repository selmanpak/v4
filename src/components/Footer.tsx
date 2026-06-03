import { Link } from 'react-router-dom';
import { navItems } from '../config';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1fr_1.4fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
            AI-integrated infrastructure for real-world asset tokenization.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 text-sm sm:grid-cols-5">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="text-white/55 hover:text-[#00B583]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="text-sm leading-6 text-white/45 lg:text-right">
          <p>2239 Al Urubah Rd.</p>
          <p>Al Olaya Dist. 12214 Riyadh, KSA</p>
          <p className="mt-3">+966 11 211 1556</p>
          <p className="mt-3">Empowering Solutions Through Data&amp;AI</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/10 px-5 py-6 text-xs text-white/35 lg:px-8">
        © 2026 FirstData. All rights reserved.
      </div>
    </footer>
  );
}
