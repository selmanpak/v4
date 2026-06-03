import { Pillar } from '../../components/cards';

export function HomeSection2() {
  return (
    <section className="border-y border-white/10 bg-[#00291D]/25">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <Pillar
          title="Tokenization Infrastructure"
          text="Issue and manage real-world asset tokens through controlled, auditable workflows."
        />
        <Pillar
          title="Compliance Operations"
          text="Support KYC, eligibility, disclosures, roles, approvals, and regulatory reporting."
        />
        <Pillar
          title="Custody & Governance"
          text="Maintain traceable links between assets, custody models, wallets, and token lifecycle."
        />
        <Pillar
          title="AI-Enhanced Intelligence"
          text="Use AI-enabled workflows to support review, reporting, insight, and advisory processes."
        />
      </div>
    </section>
  );
}
