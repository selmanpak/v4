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
