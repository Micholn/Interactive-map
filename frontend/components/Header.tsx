import { Network, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-glow">
      <div className="absolute inset-0 bg-aurora" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <Sparkles size={16} /> Dependency Intelligence Map
          </div>
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
            AI Ecosystem <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">Dependency Explorer</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Explore how models, labs, frameworks, repositories, cloud providers, and hardware stack together — revealing concentration risk and hidden choke points.
          </p>
        </div>
        <div className="glass rounded-3xl p-5">
          <div className="flex items-center gap-3 text-slate-200">
            <Network className="text-cyan-300" />
            <span className="font-semibold">System Lens</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            The glamorous view is not only aesthetic: it highlights where dependencies converge, making the invisible AI supply chain easier to reason about.
          </p>
        </div>
      </div>
    </header>
  );
}
