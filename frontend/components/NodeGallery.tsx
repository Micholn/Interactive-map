import { EcosystemNode } from '@/types/graph';
import { categoryStyles } from '@/lib/graph-utils';

export function NodeGallery({ nodes, selected, onSelect }: { nodes: EcosystemNode[]; selected?: EcosystemNode; onSelect: (node: EcosystemNode) => void }) {
  return (
    <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {nodes.map((node) => {
        const style = categoryStyles[node.category];
        return (
          <button key={node.id} onClick={() => onSelect(node)} className={`node-card rounded-3xl border p-5 text-left ${selected?.id === node.id ? 'border-cyan-300/70 bg-cyan-300/10' : 'border-white/10 bg-white/[0.04]'}`}>
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${style.bg}`}>{style.label}</span>
              <span className="text-xs text-slate-500">C {node.centrality}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white">{node.name}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">{node.description}</p>
          </button>
        );
      })}
    </section>
  );
}
