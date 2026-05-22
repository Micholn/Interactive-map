'use client';

import dynamic from 'next/dynamic';
import { useMemo, useRef } from 'react';
import { EcosystemNode, GraphData } from '@/types/graph';
import { categoryStyles } from '@/lib/graph-utils';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

type GraphCanvasProps = {
  data: GraphData;
  selected?: EcosystemNode;
  onSelect: (node: EcosystemNode) => void;
};

export function GraphCanvas({ data, selected, onSelect }: GraphCanvasProps) {
  const graphRef = useRef<any>(null);
  const graphData = useMemo(() => JSON.parse(JSON.stringify(data)), [data]);

  return (
    <div className="glass relative min-h-[620px] overflow-hidden rounded-[2rem]">
      <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl">
        Drag nodes • Zoom • Click to inspect
      </div>
      <ForceGraph2D
        ref={graphRef}
        graphData={graphData}
        backgroundColor="rgba(0,0,0,0)"
        linkColor={() => 'rgba(148,163,184,.25)'}
        linkWidth={(link: any) => Math.max(1, link.strength * 2)}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={(link: any) => link.strength * 2}
        nodeRelSize={7}
        cooldownTicks={80}
        onNodeClick={(node: any) => {
          onSelect(node as EcosystemNode);
          graphRef.current?.centerAt(node.x, node.y, 700);
          graphRef.current?.zoom(2.2, 700);
        }}
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const typedNode = node as EcosystemNode & { x: number; y: number };
          const style = categoryStyles[typedNode.category];
          const isSelected = selected?.id === typedNode.id;
          const radius = isSelected ? 10 : 6 + typedNode.centrality / 25;

          ctx.beginPath();
          ctx.arc(typedNode.x, typedNode.y, radius + 6, 0, 2 * Math.PI, false);
          ctx.fillStyle = `${style.color}22`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(typedNode.x, typedNode.y, radius, 0, 2 * Math.PI, false);
          ctx.fillStyle = style.color;
          ctx.shadowColor = style.color;
          ctx.shadowBlur = isSelected ? 24 : 12;
          ctx.fill();
          ctx.shadowBlur = 0;

          const label = typedNode.name;
          const fontSize = Math.max(10, 14 / globalScale);
          ctx.font = `${fontSize}px Inter`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillStyle = 'rgba(255,255,255,.92)';
          ctx.fillText(label, typedNode.x, typedNode.y + radius + 8);
        }}
      />
    </div>
  );
}
