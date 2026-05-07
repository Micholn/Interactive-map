"use client";

import FlowGraph from './FlowGraph';
import { initialEntities, initialRelationships } from '@/data/ai-ecosystem';
import { useState } from 'react';
import { Entity } from '@/types/ecosystem';

export default function AIExplorer() {
  const [selectedNode, setSelectedNode] = useState<Entity | null>(null);

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950 px-6 py-4">
        <h1 className="text-3xl font-bold tracking-tight">AI Ecosystem Explorer</h1>
        <p className="text-zinc-400">Mapping dependencies across models, labs, frameworks, and infrastructure</p>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Graph Area */}
        <div className="flex-1 relative">
          <FlowGraph 
            initialNodes={initialEntities} 
            initialEdges={initialRelationships}
            onNodeClick={setSelectedNode}
          />
        </div>

        {/* Side Panel */}
        {selectedNode && (
          <div className="w-96 border-l border-zinc-800 bg-zinc-950 p-6 overflow-auto">
            <button 
              onClick={() => setSelectedNode(null)}
              className="mb-4 text-sm text-zinc-400 hover:text-white"
            >
              ← Close
            </button>
            
            <h2 className="text-2xl font-semibold mb-2">{selectedNode.name}</h2>
            <div className="inline-block px-3 py-1 rounded-full text-sm mb-4" 
                 style={{ backgroundColor: selectedNode.color + '20', color: selectedNode.color }}>
              {selectedNode.type.toUpperCase()}
            </div>
            
            <p className="text-zinc-300 mb-6">{selectedNode.description || 'No description available yet.'}</p>
            
            {selectedNode.org && (
              <p><strong>Organization:</strong> {selectedNode.org}</p>
            )}
            {selectedNode.openness && (
              <p><strong>Openness:</strong> {selectedNode.openness}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}