import { ExternalLink, Network, ShieldAlert } from 'lucide-react';
import type { EcosystemData, EcosystemNode } from '@/types/graph';
import { getConnectedNodes, getNodeRelationships, getNodeById } from '@/lib/graphUtils';

type Props = { node: EcosystemNode; data: EcosystemData };

export default function EntityDetailsPanel({ node, data }: Props) {
  const connectedNodes = getConnectedNodes(data, node.id);
  const relationships = getNodeRelationships(data, node.id);

  return (
    <aside className="rounded-[32px] bg-[#071315] p-7 text-white shadow-[0_25px_80px_rgba(7,19,21,.22)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase text-[#dfff47]">{node.category}</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-.05em]">{node.name}</h2>
        </div>
        <div className="grid h-14 w-14 place-items-center rounded-full bg-[#dfff47] text-black"><Network size={22} /></div>
      </div>

      <p className="mt-5 text-sm font-semibold leading-6 text-white/70">{node.description}</p>

      <div className="mt-6">
        <p className="text-sm font-black text-white/50">CENTRALITY SCORE</p>
        <div className="mt-3 h-4 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-[#dfff47]" style={{ width: `${node.centrality}%` }} />
        </div>
        <p className="mt-2 text-2xl font-black">{node.centrality}%</p>
      </div>

      <div className="mt-7 rounded-[24px] bg-white/10 p-5">
        <div className="mb-4 flex items-center gap-2">
          <ShieldAlert size={18} className="text-[#dfff47]" />
          <h3 className="font-black">Connected Entities</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {connectedNodes.map((connected) => (
            <span key={connected.id} className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white/80">
              {connected.name}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-black">Relationships</h3>
        <div className="mt-3 space-y-3">
          {relationships.map((relationship, index) => {
            const source = getNodeById(data, relationship.source)?.name || relationship.source;
            const target = getNodeById(data, relationship.target)?.name || relationship.target;
            return (
              <div key={`${relationship.source}-${relationship.target}-${index}`} className="rounded-2xl bg-white/10 p-4 text-sm font-semibold text-white/75">
                {source} → {relationship.label} → {target}
              </div>
            );
          })}
        </div>
      </div>

      {node.sources && node.sources.length > 0 && (
        <div className="mt-6">
          <h3 className="font-black">Sources</h3>
          <div className="mt-3 space-y-2">
            {node.sources.map((source) => (
              <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold text-[#dfff47]">
                {source.label}
                <ExternalLink size={15} />
              </a>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
