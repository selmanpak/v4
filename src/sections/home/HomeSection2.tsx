import { motion } from 'framer-motion';
import { BrainCircuit, Coins, Handshake, Network } from 'lucide-react';

const capabilities = [
  {
    label: '01',
    title: 'Digital Assets',
    text: 'Compliant issuance and distribution of fractionalized real-world asset tokens, end to end.',
    icon: Coins,
    glowMotion: {
      x: ['34%', '-12%', '18%', '46%', '34%'],
      y: ['-30%', '8%', '42%', '-6%', '-30%'],
      scale: [1, 1.16, 0.96, 1.08, 1],
    },
    duration: 16.8,
  },
  {
    label: '02',
    title: 'Artificial Intelligence',
    text: 'Proprietary AI applications and AI-enabled advisory that sharpen structuring, diligence and insight.',
    icon: BrainCircuit,
    glowMotion: {
      x: ['42%', '6%', '-18%', '30%', '42%'],
      y: ['-24%', '36%', '12%', '-16%', '-24%'],
      scale: [1.08, 0.96, 1.18, 1, 1.08],
    },
    duration: 19.4,
  },
  {
    label: '03',
    title: 'Infrastructure & Platforms',
    text: 'Scalable, vendor-agnostic, institutional-grade infrastructure built for regulated environments.',
    icon: Network,
    glowMotion: {
      x: ['28%', '52%', '-14%', '20%', '28%'],
      y: ['-34%', '18%', '32%', '-12%', '-34%'],
      scale: [0.98, 1.12, 1.02, 0.94, 0.98],
    },
    duration: 20.6,
  },
  {
    label: '04',
    title: 'Advisory',
    text: 'Strategic guidance that helps issuers and investors navigate tokenization with confidence.',
    icon: Handshake,
    glowMotion: {
      x: ['46%', '10%', '34%', '-16%', '46%'],
      y: ['-28%', '22%', '-10%', '38%', '-28%'],
      scale: [1.04, 1.18, 0.96, 1.1, 1.04],
    },
    duration: 17.8,
  },
];

export function HomeSection2() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#050807]">
      <div className="pointer-events-none absolute -right-52 -top-28 h-[500px] w-[800px] rounded-full bg-[radial-gradient(ellipse,rgba(0,181,131,0.18),transparent_65%)] blur-[90px]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:50px_50px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,181,131,0.12),transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B583]/40 to-transparent" />

      <motion.div
        className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.24 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.08 },
          },
        }}
      >
        <div className="grid place-items-center gap-6 text-center">
          <motion.div variants={section2ItemVariants} className="grid place-items-center">
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/35 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
              WHAT WE DO
            </div>
            <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-white md:text-6xl">
              One company. Four pillars of value.
            </h2>
          </motion.div>

          <motion.p
            variants={section2ItemVariants}
            className="mx-auto max-w-3xl text-base leading-8 text-white/58 md:text-lg"
          >
            FirstData transforms how real-world assets are owned, traded and managed — combining deep AI expertise with regulated digital-asset infrastructure to move global investment into the Kingdom and beyond.
          </motion.p>
        </div>

        <motion.div
          variants={section2ItemVariants}
          className="mt-14 grid gap-5 lg:grid-cols-4"
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.article
                key={capability.title}
                className="group relative flex min-h-[310px] flex-col items-center justify-center overflow-hidden rounded-[2.25rem] border border-white/10 bg-[rgba(8,22,17,0.74)] p-6 text-center shadow-2xl shadow-black/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#00B583]/50 hover:bg-[#00291D]/45"
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <motion.div
                  className="pointer-events-none absolute h-40 w-40 rounded-full bg-[#00B583]/65 blur-2xl"
                  animate={capability.glowMotion}
                  transition={{
                    duration: capability.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="pointer-events-none absolute h-24 w-24 rounded-full bg-[#16E3A6]/65 blur-xl"
                  animate={{
                    x: capability.glowMotion.x.slice().reverse(),
                    y: capability.glowMotion.y.slice().reverse(),
                    scale: capability.glowMotion.scale.slice().reverse(),
                  }}
                  transition={{
                    duration: capability.duration + 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00B583]/60 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00B583]/25 bg-[#00B583]/10 text-[#00B583] shadow-lg shadow-[#00B583]/10">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl font-extrabold tracking-[-0.03em] text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {capability.text}
                  </p>
                </div>

                {index < capabilities.length - 1 && (
                  <div className="pointer-events-none absolute -right-5 top-1/2 hidden h-px w-10 bg-gradient-to-r from-[#00B583]/60 to-transparent lg:block" />
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

const section2ItemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};
