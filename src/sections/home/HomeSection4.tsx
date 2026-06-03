import { motion } from 'framer-motion';
import { FlowRailStep } from '../../components/cards';

const flowSteps = [
  {
    number: '01',
    label: 'Intake',
    title: 'Onboard',
    text: 'Capture asset, issuer, documentation, and eligibility data.',
  },
  {
    number: '02',
    label: 'Rules',
    title: 'Structure',
    text: 'Define legal, compliance, economic, and disclosure rules.',
  },
  {
    number: '03',
    label: 'Core',
    title: 'Tokenize',
    text: 'Configure supply, smart contract controls, and issuance logic.',
    highlighted: true,
  },
  {
    number: '04',
    label: 'Control',
    title: 'Govern',
    text: 'Apply roles, approvals, custody, wallets, and audit trails.',
  },
  {
    number: '05',
    label: 'Access',
    title: 'Distribute',
    text: 'Enable controlled investor access and lifecycle operations.',
  },
  {
    number: '06',
    label: 'Insight',
    title: 'Report',
    text: 'Provide dashboards, audit trails, lifecycle data, and compliance visibility.',
  },
];

export function HomeSection4() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <motion.div
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
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
        <motion.div className="mx-auto max-w-3xl text-center" variants={section4ItemVariants}>
          <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
            Platform Flow
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
            From asset onboarding to lifecycle reporting.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/58">
            FirstData is designed to support the complete tokenization journey
            with institutional-grade controls at every stage.
          </p>
        </motion.div>

        <motion.div className="mt-16" variants={section4ItemVariants}>
          <div className="relative overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/35 p-5 md:p-8">
            <motion.div
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B583]/10 blur-3xl"
              animate={{ scale: [1, 1.18, 0.96, 1], opacity: [0.45, 0.8, 0.5, 0.45] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute left-8 right-8 top-[5.25rem] hidden h-px bg-gradient-to-r from-transparent via-[#00B583]/50 to-transparent lg:block"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              className="relative z-10 grid gap-5 lg:grid-cols-6"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.16 },
                },
              }}
            >
              {flowSteps.map((step) => (
                <motion.div key={step.number} variants={flowStepVariants}>
                  <FlowRailStep
                    number={step.number}
                    label={step.label}
                    title={step.title}
                    text={step.text}
                    highlighted={step.highlighted}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const section4ItemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const flowStepVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};
