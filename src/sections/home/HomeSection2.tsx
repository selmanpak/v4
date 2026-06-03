import { motion } from 'framer-motion';
import { BrainCircuit, Landmark, ShieldCheck, Workflow } from 'lucide-react';

const capabilities = [
  {
    label: '01',
    title: 'Tokenization Infrastructure',
    text: 'Issue and manage real-world asset tokens through controlled, auditable workflows.',
    icon: Landmark,
  },
  {
    label: '02',
    title: 'Compliance Operations',
    text: 'Support KYC, eligibility, disclosures, roles, approvals, and regulatory reporting.',
    icon: ShieldCheck,
  },
  {
    label: '03',
    title: 'Custody & Governance',
    text: 'Maintain traceable links between assets, custody models, wallets, and token lifecycle.',
    icon: Workflow,
  },
  {
    label: '04',
    title: 'AI-Enhanced Intelligence',
    text: 'Use AI-enabled workflows to support review, reporting, insight, and advisory processes.',
    icon: BrainCircuit,
  },
];

export function HomeSection2() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#001A13]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#00B583]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#00B583]/10 blur-3xl" />

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
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div variants={section2ItemVariants}>
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/35 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
              Section 2
            </div>
            <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-white md:text-6xl">
              Infrastructure pillars for institutional tokenization.
            </h2>
          </motion.div>

          <motion.p
            variants={section2ItemVariants}
            className="max-w-2xl text-base leading-8 text-white/58 md:text-lg lg:justify-self-end"
          >
            A premium operating layer for launching, controlling, and reporting real-world asset token programs with compliance, custody, governance, and AI intelligence built into the flow.
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
                className="group relative min-h-[310px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-black/35 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#00B583]/50 hover:bg-[#00291D]/45"
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00B583]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#00B583]/10 blur-2xl transition group-hover:bg-[#00B583]/20" />
                <div className="absolute bottom-5 right-5 text-8xl font-black leading-none text-white/[0.035]">
                  {capability.label}
                </div>

                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00B583]/25 bg-[#00B583]/10 text-[#00B583] shadow-lg shadow-[#00B583]/10">
                      <Icon size={25} />
                    </div>
                    <div className="text-xs font-extrabold tracking-[0.24em] text-white/25">
                      {capability.label}
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold tracking-[-0.03em] text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {capability.text}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#00B583]/80">
                    <span className="h-px w-8 bg-[#00B583]/70" />
                    Core pillar
                  </div>
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
