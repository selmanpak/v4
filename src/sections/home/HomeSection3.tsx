import { CircleDollarSign, EyeOff, LockKeyhole, Workflow } from 'lucide-react';
import { ProblemCard } from '../../components/cards';

export function HomeSection3() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div>
        <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
          Why Tokenization
        </div>

        <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
          Real assets need a more efficient market layer.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
          Many real-world assets remain difficult to access, expensive to
          distribute, and complex to manage across legal, operational,
          investor, and reporting workflows. Tokenization creates a new
          infrastructure layer for controlled access, transparent ownership
          logic, and more efficient lifecycle operations.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <ProblemCard
          icon={<LockKeyhole size={21} />}
          title="Limited access"
          text="High entry thresholds can keep qualified investors away from premium asset classes."
        />
        <ProblemCard
          icon={<Workflow size={21} />}
          title="Operational friction"
          text="Manual onboarding, documentation, approvals, and reporting slow down distribution."
        />
        <ProblemCard
          icon={<EyeOff size={21} />}
          title="Low transparency"
          text="Asset, investor, custody, and transaction data are often fragmented across systems."
        />
        <ProblemCard
          icon={<CircleDollarSign size={21} />}
          title="Illiquidity"
          text="Real-world assets need better infrastructure for controlled distribution and future liquidity."
        />
      </div>
    </section>
  );
}
