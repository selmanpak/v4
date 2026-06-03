import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { primaryButtonClass } from '../../config';
import { HeroVisual } from '../../components/HeroVisual';
import { ProofItem } from '../../components/cards';

const heroLines = [
  'Institutional infrastructure',
  'for real-world asset',
  'tokenization.',
];

const statusSteps = ['Asset Verified', 'Token Ready', 'Access Controlled'];

export function HomeHeroSection() {
  return (
    <section className="home-hero-motion relative mx-auto grid max-w-7xl items-center gap-12 overflow-hidden px-5 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-28">
      <HeroAmbientLayer />

      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.08 },
          },
        }}
      >
        <motion.div
          variants={heroItemVariants}
          className="mb-7 inline-flex rounded-full border border-[#00B583]/40 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]"
        >
          AI-Integrated RWA Tokenization
        </motion.div>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white md:text-7xl">
          {heroLines.map((line) => (
            <motion.span key={line} variants={heroLineVariants} className="block">
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={heroItemVariants}
          className="mt-7 max-w-2xl text-base leading-8 text-white/62 md:text-lg"
        >
          FirstData enables regulated tokenization, distribution, custody-aware
          workflows, and lifecycle reporting for real-world assets — engineered
          for Saudi Arabia and scalable across markets.
        </motion.p>

        <motion.div
          variants={heroItemVariants}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link to="/contact" className={`${primaryButtonClass} px-7 py-4`}>
            Book a Demo <ArrowRight size={18} />
          </Link>

          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:border-[#00B583]/60 hover:text-[#00B583]"
          >
            Explore the Platform
          </Link>
        </motion.div>

        <motion.div variants={heroItemVariants}>
          <HeroStatusStrip />
        </motion.div>

        <motion.div
          variants={heroItemVariants}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          <ProofItem text="Regulatory-first deployment" />
          <ProofItem text="Custody-aware workflows" />
          <ProofItem text="Institutional lifecycle reporting" />
        </motion.div>

        <motion.div
          variants={heroItemVariants}
          className="mt-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/35 lg:hidden"
        >
          <motion.div
            className="h-10 w-px bg-gradient-to-b from-[#00B583] to-transparent"
            animate={{ scaleY: [0.35, 1, 0.35], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
          />
          Discover the platform
        </motion.div>
      </motion.div>

      <HeroVisual />
    </section>
  );
}

const heroItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroLineVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function HeroAmbientLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden lg:hidden">
      <motion.div
        className="absolute -right-28 top-12 h-72 w-72 rounded-full bg-[#00B583]/14 blur-3xl"
        animate={{ x: [-18, 12, -18], y: [0, 28, 0], opacity: [0.42, 0.72, 0.42] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-24 top-64 h-64 w-64 rounded-full bg-[#00291D]/80 blur-3xl"
        animate={{ x: [0, 24, 0], y: [14, -18, 14], opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-28 h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-[#00B583]/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute left-[12%] top-[26rem] h-px w-[76%] bg-gradient-to-r from-transparent via-[#00B583]/35 to-transparent"
        animate={{ opacity: [0.25, 0.7, 0.25], scaleX: [0.65, 1, 0.65] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

function HeroStatusStrip() {
  return (
    <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-[#00B583]/20 bg-black/35 p-3 backdrop-blur-xl sm:max-w-2xl">
      <div className="grid gap-2 sm:grid-cols-3">
        {statusSteps.map((step, index) => (
          <motion.div
            key={step}
            className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-[#00291D]/35 px-4 py-3"
            animate={{
              borderColor: ['rgba(255,255,255,0.10)', 'rgba(0,181,131,0.45)', 'rgba(255,255,255,0.10)'],
              backgroundColor: ['rgba(0,41,29,0.35)', 'rgba(0,181,131,0.11)', 'rgba(0,41,29,0.35)'],
            }}
            transition={{
              duration: 2.4,
              delay: index * 0.45,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00B583]/15 text-[#00B583]"
              animate={{ scale: [1, 1.12, 1], opacity: [0.65, 1, 0.65] }}
              transition={{
                duration: 2.4,
                delay: index * 0.45,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <CheckCircle2 size={16} />
            </motion.div>
            <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/75">
              {step}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
