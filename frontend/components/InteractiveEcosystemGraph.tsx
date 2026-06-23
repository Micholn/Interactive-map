'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import type { EcosystemNode, EntityCategory } from '@/types/graph';

const ForceGraph2D = dynamic(
  () => import('react-force-graph-2d'),
  { ssr: false }
);

interface InteractiveEcosystemGraphProps {
  nodes: EcosystemNode[];
  activeCategory: EntityCategory | 'all';
  onNodeClick?: (node: EcosystemNode) => void;
}

export default function InteractiveEcosystemGraph({
  nodes,
  activeCategory,
  onNodeClick,
}: InteractiveEcosystemGraphProps) {
  // Filter nodes based on active category
  const filteredNodes = useMemo(() => {
    if (activeCategory === 'all') return nodes;
    return nodes.filter((node) => node.category === activeCategory);
  }, [nodes, activeCategory]);

  // Generate links automatically (you can replace this later with real data)
  const graphData = useMemo(() => {
    const nodeIds = new Set(filteredNodes.map((n) => n.id));

    const links: { source: string; target: string }[] = [];

    filteredNodes.forEach((node) => {
      if (node.category === 'model') {
        // Models usually connect to labs and frameworks
        const labs = filteredNodes.filter((n) => n.category === 'lab');
        const frameworks = filteredNodes.filter((n) => n.category === 'framework');

        if (labs.length > 0) {
          links.push({ source: node.id, target: labs[0].id });
        }
        if (frameworks.length > 0) {
          links.push({ source: node.id, target: frameworks[0].id });
        }
      }

      if (node.category === 'framework') {
        // Frameworks often connect to hardware
        const hardware = filteredNodes.filter((n) => n.category === 'hardware');
        if (hardware.length > 0) {
          links.push({ source: node.id, target: hardware[0].id });
        }
      }
    });

    // Remove duplicate links
    const uniqueLinks = Array.from(
      new Map(links.map((l) => [`${l.source}-${l.target}`, l])).values()
    );

    return {
      nodes: filteredNodes.map((node) => ({
        id: node.id,
        name: node.name,
        category: node.category,
        centrality: node.centrality,
      })),
      links: uniqueLinks,
    };
  }, [filteredNodes]);

  const getNodeColor = (node: any) => {
    switch (node.category) {
      case 'model': return '#caf95d';
      case 'lab': return '#d9f7ff';
      case 'framework': return '#8fe9ff';
      case 'hardware': return '#071f26';
      case 'compute': return '#006f7d';
      case 'repository': return '#fff4c9';
      default: return '#dfff47';
    }
  };

  return (
    <div className="w-full h-[520px] rounded-[32px] bg-white/70 shadow-[0_25px_80px_rgba(18,73,84,.14)] backdrop-blur overflow-hidden">
      <ForceGraph2D
        graphData={graphData}
        width={undefined} // Let it fill the container
        height={520}
        nodeLabel={(node: any) => `${node.name} (${node.category})`}
        nodeColor={getNodeColor}
        nodeRelSize={6}
        linkColor={() => '#007c91'}
        linkWidth={1.5}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.005}
        onNodeClick={(node: any) => {
          const fullNode = filteredNodes.find((n) => n.id === node.id);
          if (fullNode && onNodeClick) {
            onNodeClick(fullNode);
          }
        }}
        enableNodeDrag={true}
        enableZoomPanInteraction={true}
        cooldownTicks={80}
      />
    </div>
  );
}