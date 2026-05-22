import { getNodeDegree, getRelatedNodes, categoryStyles } from '@/lib/graph-utils';
import { EcosystemLink, EcosystemNode } from '@/types/graph';
import { ArrowRight, ShieldAlert } from 'lucide-react';

export function EntityPanel({ selected, nodes, links }: { selected?: EcosystemNode; nodes: EcosystemNode[]; links: EcosystemLink[] }) {
  if (!selected) {
    return (
      <aside className="glass rounded-3xl p-6">
        <h2 className="font-display text-2xl font-semibold">Select an entity</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">Click any node or card to inspect its relationships, risk profile, and dependency neighborhood.</p>
      </aside>
    );
  }

  const related = getRelatedNodes(selected, nodes, links).slice(0, 7);
  const style = categoryStyles[selected.category];

  return (
    <aside className="glass rounded-3xl p-6">
      <div className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${style.bg}`}>{style.label}</div>
      <h2 className="font-display text-3xl font-bold">{selected.name}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">{selected.description}</p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <Metric label="Centrality" value={`${selected.centrality}`} />
        <Metric label="Degree" value={`${getNodeDegree(selected.id, links)}`} />
        <Metric label="Risk" value={selected.risk ?? 'n/a'} />
      </div>

      <div className="mt-6 rounded-3xl border border-rose-300/20 bg-rose-300/10 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-rose-100"><ShieldAlert size={16} /> Dependency note</div>
        <p className="mt-2 text-sm leading-6 text-rose-100/80">High-centrality and critical-risk entities should be treated as potential concentration points in the AI ecosystem.</p>
      </div>

      <h3 className="mt-6 font-display text-lg font-semibold">Connected entities</h3>
      <div className="mt-3 space-y-2">
        {related.map((node) => (
          <div key={node.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
            {node.name}<ArrowRight size={15} className="text-slate-500" />
          </div>
        ))}
      </div>
    </aside>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-bold capitalize text-white">{value}</div>
    </div>
  );
}
