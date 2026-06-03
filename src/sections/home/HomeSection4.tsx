import { FlowRailStep } from '../../components/cards';

export function HomeSection4() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
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
        </div>

        <div className="mt-16">
          <div className="relative overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/35 p-5 md:p-8">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B583]/10 blur-3xl" />
            <div className="absolute left-8 right-8 top-[5.25rem] hidden h-px bg-gradient-to-r from-transparent via-[#00B583]/50 to-transparent lg:block" />

            <div className="relative z-10 grid gap-5 lg:grid-cols-6">
              <FlowRailStep
                number="01"
                label="Intake"
                title="Onboard"
                text="Capture asset, issuer, documentation, and eligibility data."
              />
              <FlowRailStep
                number="02"
                label="Rules"
                title="Structure"
                text="Define legal, compliance, economic, and disclosure rules."
              />
              <FlowRailStep
                number="03"
                label="Core"
                title="Tokenize"
                text="Configure supply, smart contract controls, and issuance logic."
                highlighted
              />
              <FlowRailStep
                number="04"
                label="Control"
                title="Govern"
                text="Apply roles, approvals, custody, wallets, and audit trails."
              />
              <FlowRailStep
                number="05"
                label="Access"
                title="Distribute"
                text="Enable controlled investor access and lifecycle operations."
              />
              <FlowRailStep
                number="06"
                label="Insight"
                title="Report"
                text="Provide dashboards, audit trails, lifecycle data, and compliance visibility."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
