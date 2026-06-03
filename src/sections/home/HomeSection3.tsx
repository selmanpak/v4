import { CircleDollarSign, EyeOff, LockKeyhole, Workflow } from 'lucide-react';
import { ProblemCard } from '../../components/cards';

export function HomeSection3() {
  return (
    <section className="relative overflow-hidden bg-[#050807]">
      <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_60%_50%,#000,transparent_75%)]" />
      <div className="pointer-events-none absolute -right-24 -top-44 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(0,181,131,0.35),transparent_65%)] blur-[80px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(160deg,#00291D_0%,rgba(0,41,29,0)_65%)] opacity-50 [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
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
      </div>
    </section>
  );
}
