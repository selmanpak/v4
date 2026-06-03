import { motion } from 'framer-motion';
import { Pillar } from '../../components/cards';

const pillars = [
  {
    title: 'Tokenization Infrastructure',
    text: 'Issue and manage real-world asset tokens through controlled, auditable workflows.',
  },
  {
    title: 'Compliance Operations',
    text: 'Support KYC, eligibility, disclosures, roles, approvals, and regulatory reporting.',
  },
  {
    title: 'Custody & Governance',
    text: 'Maintain traceable links between assets, custody models, wallets, and token lifecycle.',
  },
  {
    title: 'AI-Enhanced Intelligence',
    text: 'Use AI-enabled workflows to support review, reporting, insight, and advisory processes.',
  },
];

export function HomeSection2() {
  return (
    <section className="border-y border-white/10 bg-[#00291D]/25">
      <motion.div
        className="mx-auto grid max-w-7xl gap-6 px-5 py-14 lg:grid-cols-4 lg:px-8"
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
        {pillars.map((pillar) => (
          <motion.div key={pillar.title} variants={section2ItemVariants}>
            <Pillar title={pillar.title} text={pillar.text} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const section2ItemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};
