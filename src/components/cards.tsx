import { CheckCircle2 } from 'lucide-react';

export function ProofItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-white/70">
      <CheckCircle2 className="text-[#00B583]" size={18} />
      <span>{text}</span>
    </div>
  );
}
