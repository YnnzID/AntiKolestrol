'use client';
import { FadeIn } from './FadeIn';
interface SectionHeaderProps { badge: string; nomor: string; judulBold: string; judulScript: string; credit?: string; dark?: boolean; }
export function SectionHeader({ badge, nomor, judulBold, judulScript, credit, dark=false }: SectionHeaderProps) {
  return (
    <FadeIn className="mb-16">
      <div className="flex items-start justify-between mb-8">
        <span className="inline-block px-4 py-2 rounded-full bg-lime text-forest text-[11px] font-bold uppercase tracking-[0.15em]">
          {badge}
        </span>
        <span className={`font-sans text-[14px] ${dark ? 'text-cream' : 'text-grayish'}`}>/{nomor}</span>
      </div>
      <h2 className={`font-heading text-[56px] md:text-[72px] uppercase leading-[0.95] ${dark ? 'text-cream' : 'text-charcoal'}`}>
        {judulBold}{' '}
        <span className="font-script italic text-lime text-[64px] md:text-[84px] normal-case">
          {judulScript}
        </span>
      </h2>
      {credit && <p className={`mt-6 text-[14px] font-sans ${dark ? 'text-cream/80' : 'text-grayish'}`}>oleh {credit}</p>}
    </FadeIn>
  );
}
