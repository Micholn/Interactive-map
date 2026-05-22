import { GraphData } from '@/types/graph';
import { Cpu, GitBranch, Layers3, ShieldAlert } from 'lucide-react';

export function StatsBar({ data }: { data: GraphData }) {
  const critical = data.nodes.filter((n) => n.risk === 'critical').length;
  const models = data.nodes.filter((n) => n.category === 'model').length;
  const providers = data.nodes.filter((n) => n.category === 'compute').length;
  const relationships = data.links.length;

  const stats = [
    { label: 'Models mapped', value: models, icon: Layers3 },
    { label: 'Dependencies', value: relationships, icon: GitBranch },
    { label: 'Compute providers', value: providers, icon: Cpu },
    { label: 'Critical nodes', value: critical, icon: ShieldAlert }
  ];

  return (
    <section className="grid gap-4 md:grid-cols-4">
      {stats.map(({ label, value, icon: Icon }) => (
        <div key={label} className="glass rounded-3xl p-5">
          <Icon className="mb-4 text-cyan-300" size={24} />
          <div className="font-display text-4xl font-bold">{value}</div>
          <div className="text-sm text-slate-400">{label}</div>
        </div>
      ))}
    </section>
  );
}
