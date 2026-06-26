import type { EcosystemData, EcosystemNode } from '@/types/graph';

export function getNodeById(data: EcosystemData, id: string) {
  return data.nodes.find((node) => node.id === id);
}

export function getConnectedNodes(data: EcosystemData, nodeId: string) {
  const relatedIds = data.links
    .filter((link) => link.source === nodeId || link.target === nodeId)
    .map((link) => (link.source === nodeId ? link.target : link.source));

  return data.nodes.filter((node) => relatedIds.includes(node.id));
}

export function getNodeRelationships(data: EcosystemData, nodeId: string) {
  return data.links.filter((link) => link.source === nodeId || link.target === nodeId);
}

export function getDependencyPath(data: EcosystemData, startNodeId: string) {
  const path: EcosystemNode[] = [];
  let current = getNodeById(data, startNodeId);

  while (current) {
    path.push(current);
    const preferredTypes = ['developed_by', 'uses', 'depends_on', 'runs_on', 'maintained_by'];
    const nextLink = data.links.find(
      (link) => link.source === current?.id && preferredTypes.includes(link.type)
    );

    if (!nextLink) break;

    const nextNode = getNodeById(data, nextLink.target);
    if (!nextNode || path.some((node) => node.id === nextNode.id)) break;

    current = nextNode;
  }

  return path;
}

export function getTopCentralNodes(data: EcosystemData, limit = 5) {
  return [...data.nodes].sort((a, b) => b.centrality - a.centrality).slice(0, limit);
}

export function getConcentrationRisk(data: EcosystemData) {
  const hardwareNodes = data.nodes.filter((node) => node.category === 'hardware');
  const computeNodes = data.nodes.filter((node) => node.category === 'compute');
  const hardwareAverage = hardwareNodes.reduce((sum, node) => sum + node.centrality, 0) / hardwareNodes.length;
  const computeAverage = computeNodes.reduce((sum, node) => sum + node.centrality, 0) / computeNodes.length;
  return Math.round((hardwareAverage + computeAverage) / 2);
}

export function searchNodes(data: EcosystemData, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return data.nodes;
  return data.nodes.filter((node) =>
    [node.name, node.description, node.category, node.organization || '', ...node.tags]
      .join(' ')
      .toLowerCase()
      .includes(q)
  );
}
