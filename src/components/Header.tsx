import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '../config';
import { Logo } from './Logo';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? 'text-[#00B583]' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="rounded-full border border-transparent bg-[#00B583] px-5 py-3 text-sm font-bold text-black transition hover:border-[#00B583] hover:bg-[#00291D] hover:text-[#00B583]"
            >
              Book a Demo
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-white/15 bg-black p-2 text-white transition hover:border-[#00B583] hover:text-[#00B583] lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed left-0 top-0 z-[99999] h-dvh w-screen bg-black px-5 lg:hidden"
            style={{ backgroundColor: '#000000' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
              <Logo />

              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/15 bg-black p-2 text-white transition hover:border-[#00B583] hover:text-[#00B583]"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mx-auto mt-8 flex max-w-7xl flex-col gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 pb-5 text-2xl font-semibold text-white transition hover:text-[#00B583]"
                >
                  {item.label}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-full border border-transparent bg-[#00B583] px-6 py-4 text-center font-bold text-black transition hover:border-[#00B583] hover:bg-black hover:text-[#00B583]"
              >
                Book a Demo
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
