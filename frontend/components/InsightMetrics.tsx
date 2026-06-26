import { Cpu, Network, ShieldAlert, Zap } from 'lucide-react';
import type { EcosystemData } from '@/types/graph';
import { getConcentrationRisk, getTopCentralNodes } from '@/lib/graphUtils';

type Props = { data: EcosystemData };

export default function InsightMetrics({ data }: Props) {
  const risk = getConcentrationRisk(data);
  const topNodes = getTopCentralNodes(data, 4);

  return (
    <section className="grid gap-5 md:grid-cols-4">
      <MetricCard icon={<Network size={22} />} label="Entities" value={data.nodes.length.toString()} />
      <MetricCard icon={<Zap size={22} />} label="Relationships" value={data.links.length.toString()} />
      <MetricCard icon={<ShieldAlert size={22} />} label="Risk Score" value={`${risk}%`} />
      <MetricCard icon={<Cpu size={22} />} label="Top Choke Point" value={topNodes[0]?.name || 'N/A'} />
    </section>
  );
}

function MetricCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[28px] bg-white/75 p-6 shadow-[0_20px_55px_rgba(18,73,84,.10)]">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#dfff47] text-black">{icon}</div>
      <p className="mt-6 text-sm font-black uppercase text-[#52666b]">{label}</p>
      <h3 className="mt-1 text-2xl font-black tracking-[-.04em]">{value}</h3>
    </div>
  );
}
