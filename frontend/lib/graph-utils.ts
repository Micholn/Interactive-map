import { EcosystemLink, EcosystemNode, EntityCategory } from '@/types/graph';

export const categoryStyles: Record<EntityCategory, { label: string; color: string; bg: string }> = {
  model: { label: 'Model', color: '#38bdf8', bg: 'bg-sky-400/15 text-sky-200 border-sky-300/20' },
  lab: { label: 'Lab', color: '#a78bfa', bg: 'bg-violet-400/15 text-violet-200 border-violet-300/20' },
  framework: { label: 'Framework', color: '#34d399', bg: 'bg-emerald-400/15 text-emerald-200 border-emerald-300/20' },
  compute: { label: 'Compute', color: '#f59e0b', bg: 'bg-amber-400/15 text-amber-200 border-amber-300/20' },
  hardware: { label: 'Hardware', color: '#fb7185', bg: 'bg-rose-400/15 text-rose-200 border-rose-300/20' },
  repository: { label: 'Repository', color: '#e879f9', bg: 'bg-fuchsia-400/15 text-fuchsia-200 border-fuchsia-300/20' }
};

export function getNodeDegree(nodeId: string, links: EcosystemLink[]) {
  return links.filter((l) => l.source === nodeId || l.target === nodeId).length;
}

export function getRelatedNodes(node: EcosystemNode, nodes: EcosystemNode[], links: EcosystemLink[]) {
  const ids = new Set<string>();
  links.forEach((link) => {
    if (link.source === node.id) ids.add(String(link.target));
    if (link.target === node.id) ids.add(String(link.source));
  });
  return nodes.filter((n) => ids.has(n.id));
}
