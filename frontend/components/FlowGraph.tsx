'use client';

import React, { useCallback } from 'react';
import ReactFlow, {
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  Node,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import { Entity, Relationship } from '@/types/ecosystem';

const nodeTypes = { custom: CustomNode };

interface FlowGraphProps {
  initialNodes: Entity[];
  initialEdges: Relationship[];
  onNodeClick: (node: Entity) => void;
}

export default function FlowGraph({ initialNodes, initialEdges, onNodeClick }: FlowGraphProps) {
  const nodes = initialNodes.map((entity, index) => ({
    id: entity.id,
    type: 'custom',
    position: { 
      x: 150 + (index % 6) * 260, 
      y: 80 + Math.floor(index / 6) * 220 
    },
    data: entity,
  }));

  const edges = initialEdges.map((rel, index) => ({
    id: rel.id,
    source: rel.source,
    target: rel.target,
    label: rel.label.replace('_', ' '),
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#4b5563', strokeWidth: 2.5 },
  }));

  const onNodeClickHandler = useCallback((_: any, node: Node) => {
    onNodeClick(node.data);
  }, [onNodeClick]);

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClickHandler}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        attributionPosition="bottom-left"
      >
        <Background variant={BackgroundVariant.Dots} gap={18} size={1} color="#1f2937" />
        <Controls position="bottom-right" />
        <MiniMap position="bottom-left" />
      </ReactFlow>
    </div>
  );
}