import { ChevronRight } from 'lucide-react';
import type { EcosystemNode } from '@/types/graph';

type Props = { path: EcosystemNode[] };

export default function DependencyPath({ path }: Props) {
  if (!path.length) return null;

  return (
    <div className="rounded-[28px] bg-white/75 p-6 shadow-[0_20px_55px_rgba(18,73,84,.12)]">
      <h2 className="text-xl font-black tracking-[-.04em]">DEPENDENCY PATH</h2>
      <p className="mt-1 text-sm font-semibold text-[#52666b]">Follow the selected entity through its upstream dependency chain.</p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        {path.map((node, index) => (
          <div key={node.id} className="flex items-center gap-3">
            <span className="rounded-full bg-[#eaf9fb] px-4 py-3 text-sm font-black">{node.name}</span>
            {index < path.length - 1 && <ChevronRight size={18} className="text-[#008393]" />}
          </div>
        ))}
      </div>
    </div>
  );
}
