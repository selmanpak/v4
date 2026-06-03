import type React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function ProofItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-white/70">
      <CheckCircle2 className="text-[#00B583]" size={18} />
      <span>{text}</span>
    </div>
  );
}

export function Pillar({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/40">
      <div className="mb-5 h-1 w-12 rounded-full bg-[#00B583]" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/58">{text}</p>
    </div>
  );
}

export function ProblemCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#00B583]/40 hover:bg-[#00291D]/25">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00B583]/12 text-[#00B583]">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

export function FlowRailStep({
  number,
  label,
  title,
  text,
  highlighted = false,
}: {
  number: string;
  label: string;
  title: string;
  text: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative rounded-[2rem] border p-5 transition ${
        highlighted
          ? 'border-[#00B583]/50 bg-[#00B583]/12 shadow-2xl shadow-[#00B583]/10'
          : 'border-white/10 bg-black/35 hover:border-[#00B583]/35'
      }`}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#00B583]/35 bg-black text-sm font-extrabold text-[#00B583]">
        {number}
      </div>
      <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#00B583]/80">
        {label}
      </div>
      <h3 className="mt-3 text-lg font-extrabold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}
