import type React from 'react';
import { Building2, DatabaseZap, Network, ShieldCheck } from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative hidden min-h-[520px] lg:block">
      <div className="absolute right-0 top-8 h-[440px] w-[440px] rounded-full bg-[#00B583]/10 blur-3xl" />

      <div className="absolute right-8 top-16 h-[410px] w-[410px] rounded-[4rem] border border-[#00B583]/25 bg-[#00291D]/30 p-8 shadow-2xl shadow-[#00B583]/10">
        <div className="grid h-full grid-cols-2 gap-4">
          <VisualCard icon={<Building2 />} title="Real Assets" />
          <VisualCard icon={<ShieldCheck />} title="Regulated Rails" />
          <VisualCard icon={<Network />} title="Tokenization Flow" />
          <VisualCard icon={<DatabaseZap />} title="AI Intelligence" />
        </div>
      </div>

      <div className="absolute right-52 top-4 h-24 w-24 rounded-[2rem] border border-white/10 bg-white/[0.03]" />
      <div className="absolute bottom-12 right-0 h-28 w-28 rounded-full border border-[#00B583]/20" />
    </div>
  );
}

function VisualCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/45 p-5">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00B583]/15 text-[#00B583]">
        {icon}
      </div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-4 h-1 w-16 rounded-full bg-[#00B583]/60" />
      <div className="mt-3 h-1 w-10 rounded-full bg-white/20" />
    </div>
  );
}
